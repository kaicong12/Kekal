const admin = require('firebase-admin');

const serviceAccount = require('../motorkekal-18db6-firebase-adminsdk-xuq7j-3a60bf57e8.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://motorkekal-18db6.firebaseio.com'
});

const db = admin.firestore();

const motorcycleData = {
  brand: "Yamaha",
  engine: "150cc",
  featured: true,
  gear: "Sequential",
  model: "YZF R15",
  path: "yamaha_r15.jpeg",
  price: 12300,
  tags: "new",
  year: "2023"
};

db.collection('motorcycles').add(motorcycleData)
  .then((docRef) => {
    console.log(`Document written with ID: ${docRef.id}`);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
