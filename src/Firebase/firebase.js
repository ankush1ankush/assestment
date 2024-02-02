// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}  from "firebase/firestore"
// TODO: Add SDKs for Fir products that you want to use
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
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db=getFirestore(app)