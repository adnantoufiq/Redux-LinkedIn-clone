import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBfSqP5v4tBfcTqv7xffGT8krBP8QQjli8",
  authDomain: "linkedin-clone-95cde.firebaseapp.com",
  projectId: "linkedin-clone-95cde",
  storageBucket: "linkedin-clone-95cde.appspot.com",
  messagingSenderId: "214168226422",
  appId: "1:214168226422:web:8f930ec66d3260c97cad57",
  measurementId: "G-Y1M6SQ405K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
