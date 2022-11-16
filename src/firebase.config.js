// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxlCTlYeL8l7HN9fBJjXzG69Ex5Ddy_pQ",
  authDomain: "honor-of-kings-5f29d.firebaseapp.com",
  projectId: "honor-of-kings-5f29d",
  storageBucket: "honor-of-kings-5f29d.appspot.com",
  messagingSenderId: "107071111340",
  appId: "1:107071111340:web:6e39cc70ea963674261f09",
  measurementId: "G-1Q0PP2EY27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
