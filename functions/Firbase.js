// Import the functions you need from the SDKs you need
const {initializeApp} =require("firebase/app");

const {getFirestore } =require("firebase/firestore");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyC4Zb9uac3xvdmpFom9-eUbsiBE3G-undA",
    authDomain: "holdinfo-b1507.firebaseapp.com",
    projectId: "holdinfo-b1507",
    storageBucket: "holdinfo-b1507.appspot.com",
    messagingSenderId: "881893896577",
    appId: "1:881893896577:web:ec2dcb818d16ffe24bf880",
    measurementId: "G-7Z6K8S16Y7"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db=getFirestore(app);

module.exports = { app, db };