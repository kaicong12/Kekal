import { initializeApp } from 'firebase/app';
import {getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBPRtZD_5thDXzuDa1QMHuPR2Edux2WkyU",
  authDomain: "motorkekal-18db6.firebaseapp.com",
  projectId: "motorkekal-18db6",
  storageBucket: "motorkekal-18db6.appspot.com",
  messagingSenderId: "1052086365693",
  appId: "1:1052086365693:web:a6da618e4cb5d615217d94",
  measurementId: "G-2DSKNEB4VC"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };