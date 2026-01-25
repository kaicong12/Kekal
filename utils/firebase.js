import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import prodConfig from "@/keys/prodKekal.json";
import devConfig from "@/keys/devKekal.json";

const env = process.env.NODE_ENV;
const firebaseConfig = env === 'production' ? prodConfig : devConfig;

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export { db, storage, auth, googleProvider };
