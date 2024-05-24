// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJC-AXvmlx9hdYlQ2lrYTEBFVuU0C8S3o",
  authDomain: "portfolio-kaustav-74b61.firebaseapp.com",
  projectId: "portfolio-kaustav-74b61",
  storageBucket: "portfolio-kaustav-74b61.appspot.com",
  messagingSenderId: "350641189510",
  appId: "1:350641189510:web:ed915f65a50bc443475707",
  measurementId: "G-31CYKFTKQ9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
