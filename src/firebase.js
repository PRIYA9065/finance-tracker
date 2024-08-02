// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACMxGE2BKxM6epJcSI7mOSz59FSAVzz6w",
  authDomain: "financely-cdae0.firebaseapp.com",
  projectId: "financely-cdae0",
  storageBucket: "financely-cdae0.appspot.com",
  messagingSenderId: "45155090418",
  appId: "1:45155090418:web:118a0335426ba5dcce356b",
  measurementId: "G-WMGDPLGE4G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =  getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };