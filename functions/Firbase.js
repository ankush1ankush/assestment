// Import the functions you need from the SDKs you need
const {initializeApp} =require("firebase/app");

const {getFirestore } =require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


    const firebaseConfig = {
        apiKey: process.env.APIKEY,
        authDomain:  process.env.AUTHDOMAIN,
        projectId:  process.env.PROJECTID,
        storageBucket: process.env.STORAGEBUCKET,
        messagingSenderId:  process.env.MASSAGINGSENDERID,
        appId:  process.env.APPID,
        measurementId:  process.env.MEASUREMENTID,
      };



// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

module.exports = { app, db };