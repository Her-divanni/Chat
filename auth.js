import { auth, db } from "./firebase.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
doc,
setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.register = async function(){

let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;
let pseudo = document.getElementById("pseudo").value;

try{

const user = await createUserWithEmailAndPassword(auth,email,pass);

await setDoc(doc(db,"users",user.user.uid),{
pseudo:pseudo,
email:email
});

alert("Compte créé !");

}catch(err){
alert(err.message);
}

}

window.login = async function(){

let email = document.getElementById("email").value;
let pass = document.getElementById("password").value;

try{

await signInWithEmailAndPassword(auth,email,pass);

window.location="chat.html";

}catch(err){
alert(err.message);
}

}




