/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 * 
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");


const express =require("express");
const cors=require("cors");
const {doc,setDoc}=require("firebase/firestore")
const app = express();


const {db} = require("./Firbase")

const axios=require('axios');


app.use(cors());


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
 
setInterval(()=>{

   async function getdata(){

    const response=await axios.get("https://api.wazirx.com/api/v2/tickers");
     let i=0;

     for(let key in response.data)
     {
        if(i<10)
        {
          
          
           await setDoc(doc(db,"Data","Data123","file",key),{
               name:response.data[key].name,
               last:response.data[key].last,
               buy:response.data[key].buy,
               sell:response.data[key].sell,
               volume:response.data[key].volume,
               base_unit:response.data[key].base_unit

           })
           i++;
        }
        else{
            break;

        }  
     }
        
    }
     
    getdata();
   
    
},30000)

exports.api = functions.https.onRequest(app);