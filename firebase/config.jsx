import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyiliSfETyMvOSpJi4l5OjRYzRf83lJWU",
  authDomain: "devlinks-3ccbf.firebaseapp.com",
  projectId: "devlinks-3ccbf",
  storageBucket: "devlinks-3ccbf.firebasestorage.app",
  messagingSenderId: "219971087064",
  appId: "1:219971087064:web:be4d3308b207c53e0585ad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
