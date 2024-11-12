import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCyeyV5aUJhKTvjsPHb0dpD3ipvt7jOU3I",
  authDomain: "api-auth-app-firebase.firebaseapp.com",
  projectId: "api-auth-app-firebase",
  storageBucket: "api-auth-app-firebase.firebasestorage.app",
  messagingSenderId: "716165529736",
  appId: "1:716165529736:web:d65cd2f90c23115cfe5f3d",
  measurementId: "G-V6QDR7GVMH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}