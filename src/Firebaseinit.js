// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjyPQpPYKBodjeYqn4-0UAOO9iCKnai2E",
  authDomain: "assignment-12-9793d.firebaseapp.com",
  projectId: "assignment-12-9793d",
  storageBucket: "assignment-12-9793d.appspot.com",
  messagingSenderId: "1058782234696",
  appId: "1:1058782234696:web:68d9f9854d50b98d51707d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
