// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCYrxmvJeUNvSmcCMan4PEXnOdwRFo0Geo",
  authDomain: "shareme-sanity-377208.firebaseapp.com",
  projectId: "shareme-sanity-377208",
  storageBucket: "shareme-sanity-377208.appspot.com",
  messagingSenderId: "580206517752",
  appId: "1:580206517752:web:3684658c50ac5be8a78a0d",
  measurementId: "G-DMS1NY0J7R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
