const admin = require('firebase-admin');
const serviceAccount = require('../../keys/motorkekal-18db6-31a99cf31bfa-google.json');

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

async function convertPriceFieldToNumber(collectionPath) {
  try {
    // Get reference to the collection
    const collectionRef = db.collection(collectionPath);

    // Fetch all documents in the collection
    const snapshot = await collectionRef.get();

    // Track conversion statistics
    let convertedCount = 0;
    let skippedCount = 0;

    // Batch write to optimize Firestore operations
    const batch = db.batch();

    // Iterate through documents
    snapshot.forEach(async (doc) => {
      const data = doc.data();
      
      // Check if price exists and is a string
      if (data.price && typeof data.price === 'string') {
        // Attempt to convert to number
        const numericPrice = parseFloat(data.price.replace(/[^0-9.-]+/g, ''));
        
        // Validate conversion
        if (!isNaN(numericPrice)) {
          batch.update(doc.ref, { 
            price: numericPrice 
          });
          convertedCount++;
        } else {
          console.warn(`Skipping invalid price for document ${doc.id}: ${data.price}`);
          skippedCount++;
        }
      }
    });

    // Commit the batch
    await batch.commit();

    console.log(`Conversion complete. 
      Converted documents: ${convertedCount}
      Skipped documents: ${skippedCount}`);
  } catch (error) {
    console.error('Error converting price field:', error);
  } finally {
    // Optional: Close the Firebase app
    admin.app().delete();
  }
}

// Usage example
convertPriceFieldToNumber('motorcycles');