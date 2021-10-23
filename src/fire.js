import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB1fK-QRO2QoxkUo7XVQXLKLeyOQn8Zy88",
    authDomain: "meeran-malik.firebaseapp.com",
    databaseURL: "https://meeran-malik.firebaseio.com",
    projectId: "meeran-malik",
    storageBucket: "meeran-malik.appspot.com",
    messagingSenderId: "219760969918",
    appId: "1:219760969918:web:f2d0f2f961c7a912c8f6ef",
    measurementId: "G-ESZJQXWT4D"
  };

const fire = firebase.initializeApp(firebaseConfig)
export default fire;