// import { auth } from "../firebase/config";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// export function signup(email, password) {
//   return createUserWithEmailAndPassword(auth, email, password);
// }

// export function login(email, password) {
//   return signInWithEmailAndPassword(auth, email, password);
// }

// export function logout() {
//   auth.signOut();
// }

import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// SignUp funksiyası
export async function signup(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential; // Qeydiyyat nəticəsini geri qaytarır
  } catch (error) {
    console.error("Signup error: ", error.message);
    throw error; // Xətanı geri qaytarır
  }
}

// Login funksiyası
export async function login(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential; // Daxil olma nəticəsini geri qaytarır
  } catch (error) {
    console.error("Login error: ", error.message);
    throw error; // Xətanı geri qaytarır
  }
}

// Logout funksiyası
export async function logout() {
  try {
    await auth.signOut();
    console.log("User signed out successfully");
  } catch (error) {
    console.error("Logout error: ", error.message);
    throw error; // Xətanı geri qaytarır
  }
}
