const fs = require('fs');
const path = require('path');
const https = require('https');
const _ = require('lodash');
const ExcelJS = require('exceljs');

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, getDocs, deleteDoc, updateDoc, doc, setDoc, query, where } = require('firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBPRtZD_5thDXzuDa1QMHuPR2Edux2WkyU",
  authDomain: "motorkekal-18db6.firebaseapp.com",
  projectId: "motorkekal-18db6",
  storageBucket: "motorkekal-18db6.appspot.com",
  messagingSenderId: "1052086365693",
  appId: "1:1052086365693:web:a6da618e4cb5d615217d94",
  measurementId: "G-2DSKNEB4VC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


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

        const { ext: extension, name } = path.parse(gsPath);
        const destination = path.join(require('os').tmpdir(), name);

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
            console.log(row.values)
            if (rowIndex === 1) {
                return
            }
    
            const [
                ,
                brand,
                description,
                engine,
                model,
                gear,
                path,
                year,
                specification,
                featured
            ] = row.values;

            result.push({
                brand,
                description,
                engine,
                model,
                gear,
                path,
                year,
                specification: JSON.parse(specification),
                featured
            });
        });
    })

    return result
}

const deleteOldDatabase = async () => {
    const motorcycleCollection = collection(db, 'motorcycle');
    const snapshot = await getDocs(motorcycleCollection);

    const batch = db.batch();
    snapshot.forEach(doc => {
        batch.delete(doc.ref);
    });
    await batch.commit();
}

const processExcelFile = async (excelFilePath) => {
    const data = await parseExcelFile(excelFilePath)

    console.log(data, 'data')

    const updatePromises = data.map(async (motorcycle) => {
        const docRef = doc(motorcycleCollection);
        await setDoc(docRef, motorcycle);
    });

    await Promise.all(updatePromises)
}

const main = async () => {
    const fileNode = process.env.FILE_NODE || 'productSyncFile'
    const fileCollectionRef = collection(db, fileNode);
    const q = query(fileCollectionRef, where('isProcessed', '==', false));
    const querySnapshot = await getDocs(q);
    // await deleteOldDatabase()
    for (const docSnap of querySnapshot.docs) {
        const fileRef = doc(db, fileNode, docSnap.id);
        try {
            const fileData = docSnap.data();
            const excelFileUrl = fileData.file_url;

            if (!excelFileUrl) {
                throw new Error("No file url");
            }

            const excelFile = await downloadFilePromise(excelFileUrl);

            if (excelFile) {
                await updateDoc(fileRef, {
                    status: 'processing'
                });
                await processExcelFile(excelFile)
                fs.unlinkSync(excelFile)
                // await updateDoc(fileRef, {
                //     isProcessed: true,
                //     status: 'processed'
                // });
            }
            else {
                throw new Error("No file to download")
            }

        } catch (err) {
            console.log(`Error for ${docSnap.id}`, err);
            // await updateDoc(fileRef, {
            //     isProcessed: true,
            //     errors: err.message
            // });
        }
    }
}

main().then(() => process.exit(0))
