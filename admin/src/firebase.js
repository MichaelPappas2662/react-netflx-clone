import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.APP_KEY,
    authDomain: "netflix-eb618.firebaseapp.com",
    projectId: "netflix-eb618",
    storageBucket: "netflix-eb618.appspot.com",
    messagingSenderId: "1025523160120",
    appId: "1:1025523160120:web:dec128f4010aa11a6e82cd",
    measurementId: "G-THFSZEG29H"
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;