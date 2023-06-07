// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7P8lDRqOIKtL-oW-JrGTBHA1-gs2TkOk",
  authDomain: "summer-camp-dance.firebaseapp.com",
  projectId: "summer-camp-dance",
  storageBucket: "summer-camp-dance.appspot.com",
  messagingSenderId: "810629780131",
  appId: "1:810629780131:web:d0f81f86a8dd95c6b9e516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;