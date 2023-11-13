const admin = require('firebase-admin');
const serviceAccount = require('../motorkekal-18db6-firebase-adminsdk-xuq7j-3a60bf57e8.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://motorkekal-18db6.firebaseio.com'
  });

const db = admin.firestore();

async function updateMotorcycle(motorcycleId, newData) {
  const motorcycleRef = db.collection('motorcycles').doc(motorcycleId);
  
  try {
    await motorcycleRef.set(newData, { merge: true });
    console.log(`Document with ID ${motorcycleId} updated successfully.`);
  } catch (error) {
    console.error('Error updating document:', error);
  }
}

const motorCycleData = {
    "uwBnQVuQwp2F8yU51xUz": {
      "description": "The 2023 Yamaha MT-15, a notable entry in the roadster segment, comes equipped with new features including a traction control system and dual-channel ABS, enhancing its safety profile. The bike now boasts full-LED lighting and a Bluetooth-enabled LCD instrument cluster, providing modern connectivity options like call alerts and fuel tracking. It retains its 155cc, liquid-cooled, SOHC engine, delivering 18.1bhp at 10,000rpm and 14.2Nm torque at 7,500rpm. The MT-15's sturdy deltabox frame, combined with advanced suspension and braking systems, ensures a balanced and secure ride.",
      "specification": {
        "Engine Displacement": "155 cc",
        "Maximum Power": "18.1 bhp at 10,000 rpm",
        "Maximum Torque": "14.2 Nm at 7,500 rpm",
        "Cooling System": "Liquid Cooled",
        "Transmission": "6-Speed Manual",
        "Fuel Tank Capacity": "10 Litres",
        "Front Tyre": "100/80 R17",
        "Rear Tyre": "140/70 R17",
        "Braking System": "282mm Front Disc, 220mm Rear Rotor with Dual-Channel ABS",
        "Weight": "141 kg (Kerb)"
      }
    }
}

Object.entries(motorCycleData).forEach(([mId, mData]) => {
  updateMotorcycle(mId, mData); 
})