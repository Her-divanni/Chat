import { db, auth, storage } from "./firebase.js";

import {
collection,
getDocs,
addDoc,
query,
where,
onSnapshot
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import {
ref,
uploadBytes,
getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";


let currentChat=null;


async function loadUsers(){

const users = await getDocs(collection(db,"users"));

users.forEach(doc=>{

let u=doc.data();

let div=document.createElement("div");

div.innerText=u.pseudo;

div.onclick=()=>startChat(doc.id);

usersList.appendChild(div);

});

}

loadUsers();


function startChat(uid){

currentChat=[auth.currentUser.uid,uid].sort().join("_");

listenMessages();

}


window.send=async function(){

let text=msg.value;

let imageFile=image.files[0];

let imageURL=null;

if(imageFile){

const storageRef=ref(storage,"images/"+Date.now());

await uploadBytes(storageRef,imageFile);

imageURL=await getDownloadURL(storageRef);

}

await addDoc(collection(db,"messages"),{

chat:currentChat,
sender:auth.currentUser.uid,
text:text,
image:imageURL,
date:Date.now()

});

msg.value="";

}


function listenMessages(){

const q=query(collection(db,"messages"),where("chat","==",currentChat));

onSnapshot(q,(snapshot)=>{

messages.innerHTML="";

snapshot.forEach(doc=>{

let m=doc.data();

let div=document.createElement("div");

div.className="message "+(m.sender==auth.currentUser.uid?"me":"other");

div.innerHTML=m.text || "";

if(m.image){

div.innerHTML+=`<img src="${m.image}" width="150">`;

}

messages.appendChild(div);

});

});

}