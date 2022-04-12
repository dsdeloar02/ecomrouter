// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBymBedVeqsuyVj8S-cY3PFrZfmHmk32c8",
  authDomain: "bdshop-82578.firebaseapp.com",
  projectId: "bdshop-82578",
  storageBucket: "bdshop-82578.appspot.com",
  messagingSenderId: "265045344165",
  appId: "1:265045344165:web:369ad3593255de4368f24c",
  measurementId: "G-EQSW3TD3VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)

export default fireDB