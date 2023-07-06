// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEBFOMhfpUV6O-CK5tNEdQZ9RsgRFdnzE",
  authDomain: "ricky-image-upload.firebaseapp.com",
  projectId: "ricky-image-upload",
  storageBucket: "ricky-image-upload.appspot.com",
  messagingSenderId: "244331114991",
  appId: "1:244331114991:web:da22109bab39086e9fc61a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);