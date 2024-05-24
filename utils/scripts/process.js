import fs from 'fs'
import path from 'path'
import https from 'https'
import _ from 'lodash'
import fb from '../../firebase/index.js'
import ExcelJS from 'exceljs';

import {getDownloadURL, ref} from "firebase/storage"


const getGsPathFromURL = (_url) => {
    // console.log(_url)
    let result
    if (/^http.*firebasestorage\.googleapis\.com.*/.test(_url)) {
        let urlPath = new URL(decodeURIComponent(_url)).pathname;
        result = urlPath.replace(/^.*?\.appspot.com\/o\/gs:\/.*\.appspot\.com\//, "");
    } else if (/^http.*storage\.googleapis\.com.*/.test(_url)) {
        let urlPath = new URL(decodeURIComponent(_url)).pathname;
        result = urlPath.replace(/^.*?\.appspot.com\//, "")
    } else if (/^gs\:\/\//.test(_url)) {
        result = _url
    } else {
        result = null
    }

    return result ? decodeURI(result) : null
}

const downloadFilePromise = (url) => {
    return new Promise((res, rej) => {
        const gsPath = getGsPathFromURL(url)

        const { ext: extension, name } = path.parse(gsPath)
        const destination = path.join(tmpdir, name)
        console.log(destination)

        const file = fs.createWriteStream(destination);

        const request = https.get(url, res => {
            res.pipe(file)
        })

        file.on('finish', () => file.close(() => {
            res(destination)
        }));

        request.on('error', (err) => {
            fs.unlink(destination);
            return rej(err);
        });

        file.on('error', (err) => {
            fs.unlink(destination);
            return rej(err);
        });
    })
};

const parseExcelFile = async (excelFilePath) => {
    const result = []
    const workbook = new ExcelJS.Workbook()
    await workbook.xlsx.readFile(excelFilePath)

    // collection name is the name of the worksheet
    const worksheets = workbook?.worksheets
    if (!worksheets) {
        return result
    }

    worksheets.forEach(worksheet => {
        worksheet.eachRow((row, rowIndex) => {
            if (rowIndex === 1) {
                return
            }
    
            const [
                description,
                engineDisplacement,
                maximumPower,
                maximumTorque,
                coolingSystem,
                departmentCode,
                category,
                occupationDesc,
                phone
            ] = row.values

            result.push({
                worksheetName: worksheet.name,
                description,
                specification: {

                }
                "specification": {
                  "Engine Displacement": engineDisplacement,
                  "Maximum Power": maximumPower,
                  "Maximum Torque": maximumTorque,
                  "Cooling System": coolingSystem,
                  "Transmission": "6-Speed Manual",
                  "Fuel Tank Capacity": "10 Litres",
                  "Front Tyre": "100/80 R17",
                  "Rear Tyre": "140/70 R17",
                  "Braking System": "282mm Front Disc, 220mm Rear Rotor with Dual-Channel ABS",
                  "Weight": "141 kg (Kerb)"
                }
            })
        });
    })

    return result
}

const processExcelFile = async (excelFilePath) => {
    const data = await parseExcelFile(excelFilePath)

    const newUsers = []
    const noTMSCodeUsers = []
    const noPhoneUsers = []
    const noProfileUserId = []
    const duplicateUsers = {
        tmsCode: [],
        phone: [],
    }

    const groupBys = {
        tmsCode: _.groupBy(data, "identifier"),
        phone: _.groupBy(data, "phone"),
    }

    const tmsCodes = _.map(data, "identifier")
    const userIdsByIdentifiers = await getEntitiesByColumn("identifier", tmsCodes, org)
    
    const authorFromDB = await pgdb.db.any(`select * from user_details ud 
    where organization = \${org}
    and email ilike '%knownuggets.com%'
    and is_admin = true`, { org })

    const firstAuthor = authorFromDB[0]
    const author = {
        uuid: firstAuthor.uuid,
        fullName: `${firstAuthor.firstName} ${firstAuthor.lastName}`,
        organization: org,
        organizationName: orgName,
    }

    const enableAutoGroupsQuery = 'select enable_auto_groups from organizations where id = ${org}'
    const enableAutoGroupsResults = await pgdb.db.one(enableAutoGroupsQuery, { org })

    const options = {
        enableAutoGroups: enableAutoGroupsResults.enableAutoGroups,
        organization: org,
    }

    data.forEach((user, uIndex) => {
        const {
            identifier,
            phone,
            ...rest
        } = user

        if (!phone) {
            noPhoneUsers.push(uIndex)
            return
        }

        if (!identifier) {
            noTMSCodeUsers.push(uIndex)
            return
        }

        // if there is existing tms_code or phone number for this user, skip and do nothing
        if (groupBys.tmsCode[identifier].length > 1) {
            duplicateUsers.tmsCode.push(identifier)
            return
        }

        if (groupBys.phone[phone].length > 1) {
            duplicateUsers.phone.push(phone)
            return
        }

        const { userId } = userIdsByIdentifiers[identifier] || {}
        if (!userId) {
            newUsers.push({
                ...rest,
                identifier,
                phone
            })
        }
    })

    const newUsersResults = await createNewUsers(newUsers, author, options, org, orgName)
    const { Html, Subject } = generateEmailTemplate({ orgName, newUsersResults, noProfileUserId, noPhoneUsers, noTMSCodeUsers, duplicateUsers })
    await sendResultAsEmail(org, Html, Subject)

    return {
        newUsersResults,
        noProfileUserId,
        duplicateUsers
    }
}

const fileNode = process.env.FILE_NODE || 'productSyncFile'
const fileCollectionRef = collection(db, fileNode);
const excelFiles = await fb
    .getRef(`clientOrganizations/${org}/${fileNode}`)
    .orderByChild("isProcessed")
    .equalTo(false)
    .once('value')
    .then(snap => snap.val())

if (!excelFiles) {
    console.log("No excel files configured")
} else {
    for (const fileId of _.keys(excelFiles)) {
        try {
            const excelFileUrl = _.get(excelFiles, [fileId, "file", "url"])

            if (!excelFileUrl) {
                throw new Error("No file url")
            }

            const excelFile = await downloadFilePromise(excelFileUrl)

            if (excelFile) {
                await fb
                    .getRef(`clientOrganizations/${org}/${fileNode}/${fileId}`)
                    .update({
                        status: 'processing'
                    })
                const results = await processExcelFile(excelFile)
                fs.unlinkSync(excelFile)
                await fb
                    .getRef(`clientOrganizations/${org}/${fileNode}/${fileId}`)
                    .update({
                        isProcessed: true,
                        results,
                        status: 'processed'
                    })
            }
            else {
                throw new Error("No file to download")
            }

        } catch (err) {
            console.log(`Error for ${fileId}`, err)
            await fb
                .getRef(`clientOrganizations/${org}/${fileNode}/${fileId}`)
                .update({
                    isProcessed: true,
                    errors: err.message
                })
        }
    }
}

process.exit(0)