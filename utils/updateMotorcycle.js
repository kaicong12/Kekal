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

const motorcycleIds = ['35MLK2jxNtnZXjKp8IWg', '0dyrjVKnyJKWxzVE615Z', 'G5eQSkn9ny85Zsnid0Y2', 'GRUCyuZ5f7RvkxpQ9Jhm']
const motorCycleData = {
    "35MLK2jxNtnZXjKp8IWg": {
        description: "The 2023 Yamaha Y15ZR is a sleek and modern scooter, equipped with a 149.7 cc liquid-cooled engine, offering 15.4 PS power and 13.8 Nm torque. It features a five-speed gearbox, new blue color scheme with fresh graphics, LED headlamps, a digital LCD console, and 17-inch wheels. This scooter is designed for both efficiency and style, making it a great choice for everyday use and longer journeys.",
        specification: {
            "Engine": "149.7 cc",
            "Engine Type": "Liquid-cooled, SOHC",
            "Power Output": "15.4 PS at 8,500 rpm",
            "Torque": "13.8 Nm at 7,000 rpm",
            "Transmission": "5-speed manual",
            "Fuel Type": "Petrol",
            "Cooling System": "Liquid Cooled",
            "Seat Height": "845 mm",
            "Fuel Tank Capacity": "4.2 liters",
            "Tyre (Front)": "Radial, Tubeless; R17",
            "Tyre (Rear)": "120/70 R17",
            "Available Colors": "Blue, Red, Cyan, Grey"
          }
    },
    "0dyrjVKnyJKWxzVE615Z": {
      description: "The 2023 Yamaha YZF R15 is a dynamic sport motorcycle known for its agility and performance. It is powered by a 155 cc petrol engine and features a liquid-cooled, SOHC setup. The engine produces 19.04 hp at 10,000 rpm and a maximum torque of 14.7 Nm at 8,500 rpm. The bike comes with a 6-speed manual transmission, ensuring a smooth and responsive ride. Design-wise, it boasts a sleek Deltabox frame, LED headlamps, and a digital console. Its radial, tubeless tires and efficient suspension system make it a great choice for both city streets and sporty rides.",
      specification: {
        "Engine": "155 cc",
        "Power Output": "19.04 hp at 10,000 rpm",
        "Torque": "14.7 Nm at 8,500 rpm",
        "Transmission": "6-speed manual",
        "Fuel Type": "Petrol",
        "Cooling System": "Liquid Cooled",
        "Seat Height": "830 mm",
        "Fuel Tank Capacity": "11.0 liters",
        "Tyre (Front)": "100/80 R17",
        "Tyre (Rear)": "140/70 R17"
      }
    },
    "G5eQSkn9ny85Zsnid0Y2": {
      description: "The Yamaha 135LC Fi is a versatile and stylish scooter, offering a balanced blend of performance and comfort. It features a 135 cc liquid-cooled engine, delivering a power output of 12 hp. Known for its agility and efficient fuel consumption, this scooter is ideal for city commuting as well as leisure riding. Its compact design, combined with modern aesthetics, makes it a popular choice among riders who value both functionality and style.",
      specification: {
        "Engine": "135 cc",
        "Power Output": "12 hp",
        "Fuel Tank Capacity": "4.6 L",
        "Cooling System": "Liquid Cooled",
        "Maximum Torque": "12.2 Nm",
        "Drive Type": "Chain Drive",
        "Engine Type": "Liquid-Cooled, SOHC Engine",
        "SeatHeight": "775 mm",
        "Tyre (Front)": "70/90 R17",
        "Tyre (Rear)": "80/90 R17"
      }
    },
    "GRUCyuZ5f7RvkxpQ9Jhm": {
      description: "The SYM VF3i 185 Pro stands out as a high-performance moped with a sporty edge. Equipped with a robust 183 cc engine, it produces 19 hp, making it one of the most powerful in its class. The VF3i 185 Pro is designed for riders who seek thrilling performance and superior handling. Its sleek design, combined with advanced features like a liquid-cooled engine and efficient fuel injection system, positions it as a top choice for both daily commutes and adventurous rides.",
      specification: {
        "Engine": "183 cc",
        "Power Output": "19 hp",
        "Fuel Tank Capacity": "7 L",
        "Bore X Stroke": "63.5 mm x 57.8 mm",
        "Engine": "Single Cylinder, Liquid-Cooled SOHC Engine",
        "Maximum Torque": "17.4 Nm",
        "Cooling System": "Liquid Cooled",
        "Seat Height": "790 mm",
        "Tyre (Front)": "90/80 R17",
        "Tyre (Rear)": "120/70 R17"
      }
    }
}

for (const mId of motorcycleIds) {
    updateMotorcycle(mId, motorCycleData[mId]); 
}

