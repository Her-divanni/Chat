import { auth, db } from "./firebase.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyCRMcs2PvqRbxIVsDss5kQRJe8mD840cBM",
  authDomain: "chat-f35b2.firebaseapp.com",
  projectId: "chat-f35b2",
  storageBucket: "chat-f35b2.firebasestorage.app",
  messagingSenderId: "1006603779080",
  appId: "1:1006603779080:web:3d6c4d83af8365e23665bd",
  measurementId: "G-SVL5NXG3C9"
}

const app = initializeApp(firebaseConfig);

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
}from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import{
    doc,
    setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.register = async function (){

    let email=emailInput.value;
    let pass=passwordInput.value;
    let pseudo=pseudoInput.value;

    const user = await createUserWithEmailAndPassword(auth,email,pass);

    await setDoc(doc(db,"users",user.user.uid),{

        pseudo:pseudo,
        email:email

    });

    alert ("Compte Créé");

}

window.login = async function(){

    let email = emailInput.value;
    let pass = passwordInput.value;

    await signInWithEmailAndPassword(auth,email,pass);

    window.location="chat.html";

}

