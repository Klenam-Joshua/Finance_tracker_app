import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBDjZOyf7rZxAKlEqYa5IUu0LHRimCS1TE",
    authDomain: "my--money-bb40f.firebaseapp.com",
    projectId: "my--money-bb40f",
    storageBucket: "my--money-bb40f.appspot.com",
    messagingSenderId: "734827002030",
    appId: "1:734827002030:web:d212040bc81e671ee8d53f",
    measurementId: "G-KYYMT4LL87"
  };



firebase.initializeApp(firebaseConfig);

 const projectFirestore = firebase.firestore();
 const projectAuth = firebase.auth();
 export {projectFirestore, projectAuth}

