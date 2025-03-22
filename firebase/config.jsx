import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCCu3PgyV7U4agRS9iWrebX3my-T3WuHdQ",
  authDomain: "devlinks-50442.firebaseapp.com",
  projectId: "devlinks-50442",
  storageBucket: "devlinks-50442.firebasestorage.app",
  messagingSenderId: "74825721380",
  appId: "1:74825721380:web:6b9730bad387e3a5241ab1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
