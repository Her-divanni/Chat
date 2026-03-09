import { auth, db } from "./firebase.js";

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

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
