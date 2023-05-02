// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWf-WOVcqhUb41-Xqgj7uQa1xmbyeWfJY",
  authDomain: "bd-nm-foodvalley.firebaseapp.com",
  projectId: "bd-nm-foodvalley",
  storageBucket: "bd-nm-foodvalley.appspot.com",
  messagingSenderId: "643900314774",
  appId: "1:643900314774:web:34d0138160cf76561c5eb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app