// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyAjC55mVGyXodVs09hhEDQVIOu3EnVfbDA",

  authDomain: "ofa-website-ceae6.firebaseapp.com",

  projectId: "ofa-website-ceae6",

  storageBucket: "ofa-website-ceae6.firebasestorage.app",

  messagingSenderId: "971824815215",

  appId: "1:971824815215:web:5f77c8bccbfd77a2b2019a",

  measurementId: "G-32ZKZCNYND"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const ofaDb = getFirestore();

const dbName = 'notices_ofa';

export { dbName };

export default ofaDb;