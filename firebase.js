// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUV2uWaFUHwHCh93t52U7zfxDCvgttT2Y",
  authDomain: "flashcardsaas-6da58.firebaseapp.com",
  projectId: "flashcardsaas-6da58",
  storageBucket: "flashcardsaas-6da58.appspot.com",
  messagingSenderId: "680417925411",
  appId: "1:680417925411:web:3095a1e4df0ff938f85496",
  measurementId: "G-JBN8237SVS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);