// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkCNidkLchtEnaL2COYQ2x8NwpKivFM_M",
  authDomain: "sdutio-canecas.firebaseapp.com",
  projectId: "sdutio-canecas",
  storageBucket: "sdutio-canecas.firebasestorage.app",
  messagingSenderId: "556904542035",
  appId: "1:556904542035:web:56a248ed65ec3c5d37bba6",
  measurementId: "G-NF9TXH9GJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);