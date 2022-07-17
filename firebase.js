// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0BYE4PO3Kw_ke634X8l_khG-H2QISYBg",
  authDomain: "expensetracker-b8136.firebaseapp.com",
  projectId: "expensetracker-b8136",
  storageBucket: "expensetracker-b8136.appspot.com",
  messagingSenderId: "71361564792",
  appId: "1:71361564792:web:10bca1cf35d5b96c7c5d8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
