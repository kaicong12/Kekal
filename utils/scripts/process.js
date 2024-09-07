const fs = require('fs');
const path = require('path');
const https = require('https');
const _ = require('lodash');
const ExcelJS = require('exceljs');

const { initializeApp } = require('firebase/app')
const { getFirestore, collection, getDocs, updateDoc, doc, setDoc, query, where, writeBatch } = require('firebase/firestore')
const { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } = require('firebase/storage'); 

const firebaseConfig = require('../../firebaseConfig.json');
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app); 

const downloadFilePromise = (url) => {
    return new Promise((res, rej) => {
        // const gsPath = getGsPathFromURL(url)
        // console.log(gsPath)
        const { ext: extension, name } = path.parse(url);
        const destination = path.join(require('os').tmpdir(), name);

        const file = fs.createWriteStream(destination);

        const request = https.get(url, res => {
            res.pipe(file)
        })

        file.on('finish', () => file.close(() => {
            res(destination)
        }));

        request.on('error', (err) => {
            fs.unlinkSync(destination);
            return rej(err);
        });

        file.on('error', (err) => {
            fs.unlinkSync(destination);
            return rej(err);
        });
    })
};

const parseExcelFile = async (excelFilePath) => {
    const result = [];
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);

    const worksheets = workbook?.worksheets;
    if (!worksheets) {
        return result;
    }

    worksheets.forEach(worksheet => {
        worksheet.eachRow((row, rowIndex) => {
            if (rowIndex === 1) {
                return;  // Skip the header row
            }

            const [
                ,
                name,
                brand,
                price,
                description,
                specifications,
                images
            ] = row.values;

            result.push({
                name,
                brand,
                price,
                description,
                specifications: JSON.parse(specifications),
                images: JSON.parse(images)
            });
        });
    });

    return result;
};

const uploadImageToFirebase = async (imagePath, brand, modelName, imageFileName) => {
    try {
        const fileBuffer = fs.readFileSync(imagePath); // Read the file buffer
        const storageRef = ref(storage, `${brand}/${modelName}/${imageFileName}`); // Firebase Storage reference
        const metadata = {
            contentType: 'image/jpeg',
        };

        // Upload the image to Firebase Storage
        const uploadResult = await uploadBytes(storageRef, fileBuffer, metadata);
        
        // Get the download URL of the uploaded image
        const imageUrl = await getDownloadURL(uploadResult.ref);
        // Delete the temporary downloaded image file
        fs.unlinkSync(imagePath);

        return imageUrl;
    } catch (err) {
        return null
    }    
};

const deleteOldDatabase = async () => {
    const motorcycleCollection = collection(db, 'motorcycles');
    const snapshot = await getDocs(motorcycleCollection);

    const batch = writeBatch(db); // Create a Firestore batch for deletion

    // Create an array to store deletion promises for images
    const deleteImagePromises = [];

    try {
        // Loop through each document in the motorcycle collection
        snapshot.forEach(doc => {
            const docData = doc.data();
            
            // Check if the document has images to delete
            if (docData.images && Array.isArray(docData.images)) {
                docData.images.forEach((imageUrl) => {
                    if (imageUrl) {
                        // Create a reference to the image in Firebase Storage
                        const imageRef = ref(storage, imageUrl);
                        // Push the image deletion promise to the array
                        deleteImagePromises.push(deleteObject(imageRef));
                    }
                });
            }

            // Add document deletion to the Firestore batch
            batch.delete(doc.ref);
        });
        // Delete documents from Firestore
        await batch.commit();
        
        // Wait for all image deletions to complete
        if (deleteImagePromises.length > 0) {
            await Promise.all(deleteImagePromises);
            console.log('All images deleted from Firebase Storage');
        } else {
            console.log('No images found to delete.');
        }
    } catch (err) {
        console.log(err.message)
    }
    

    console.log('Old database records deleted.');
}

const processExcelFile = async (excelFilePath) => {
    const data = await parseExcelFile(excelFilePath)
    const motorcycleCollection = collection(db, 'motorcycles');
    const batch = writeBatch(db);

    const uploadPromises = data.map(async (motorcycle) => {
        const { brand, images, name } = motorcycle;
        const imageUrls = [];

        const imageUploadPromises = images.map(async (imageUrl, index) => {
            const imageFileName = `${name.replace(/\s+/g, '-')}-image-${index + 1}.jpg`;
            const downloadedImagePath = await downloadFilePromise(imageUrl);
            const uploadedImageUrl = await uploadImageToFirebase(downloadedImagePath, brand, name, imageFileName);
            return uploadedImageUrl;
        });

        const uploadedUrls = await Promise.all(imageUploadPromises);
        imageUrls.push(...uploadedUrls);

        motorcycle.images = imageUrls;

        const docRef = doc(motorcycleCollection);
        batch.set(docRef, motorcycle); // Add this set operation to the batch
    });

    await Promise.all(uploadPromises); // Wait for all image uploads to finish
    await batch.commit();
}

const main = async () => {
    const fileNode = process.env.FILE_NODE || 'productSyncFiles'
    const fileCollectionRef = collection(db, fileNode);
    const q = query(fileCollectionRef, where('isProcessed', '==', false));
    const querySnapshot = await getDocs(q);
    await deleteOldDatabase()

    for (const docSnap of querySnapshot.docs) {
        const fileRef = doc(db, fileNode, docSnap.id);
        try {
            const fileData = docSnap.data();
            const excelFileUrl = fileData.fileUrl;

            if (!excelFileUrl) {
                throw new Error("No file url");
            }

            const excelFile = await downloadFilePromise(excelFileUrl);
            if (excelFile) {
                await processExcelFile(excelFile)
                fs.unlinkSync(excelFile)
                await updateDoc(fileRef, {
                    isProcessed: true,
                    status: 'processed'
                });
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
