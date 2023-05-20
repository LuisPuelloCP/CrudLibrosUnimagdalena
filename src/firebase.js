// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFireStore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhpFzjE7SRaphq4nbLdFYz55eNTPey_fA",
  authDomain: "crudlibros-5a957.firebaseapp.com",
  databaseURL: "https://crudlibros-5a957-default-rtdb.firebaseio.com",
  projectId: "crudlibros-5a957",
  storageBucket: "crudlibros-5a957.appspot.com",
  messagingSenderId: "562496646543",
  appId: "1:562496646543:web:e64804315092167564effa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFireStore(app)
export {db}