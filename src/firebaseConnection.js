import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyATm1E3Q2kNug2Ff7jOFdO3qhUvaQsSYrE",
    authDomain: "login-730e3.firebaseapp.com",
    databaseURL: "https://login-730e3-default-rtdb.firebaseio.com",
    projectId: "login-730e3",
    storageBucket: "login-730e3.appspot.com",
    messagingSenderId: "560505861029",
    appId: "1:560505861029:web:4b9b7efd17f9645af2ee4c",
    measurementId: "G-C6Q4MF242L"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase;