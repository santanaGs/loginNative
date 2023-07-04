import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyARRl1aeomS3RbexoUDES8NClRK2v-nJgA",
    authDomain: "meuapp2-86642.firebaseapp.com",
    databaseURL: "https://meuapp2-86642-default-rtdb.firebaseio.com",
    projectId: "meuapp2-86642",
    storageBucket: "meuapp2-86642.appspot.com",
    messagingSenderId: "148112463618",
    appId: "1:148112463618:web:e06fad26821a7762c4541b",
    measurementId: "G-25VC50GQDB"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


export default firebase;