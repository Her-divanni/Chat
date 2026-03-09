import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getStorage} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfing = {

  apiKey: "AIzaSyCRMcs2PvqRbxIVsDss5kQRJe8mD840cBM",
  authDomain: "chat-f35b2.firebaseapp.com",
  projectId: "chat-f35b2",
  storageBucket: "chat-f35b2.firebasestorage.app",
  messagingSenderId: "1006603779080",
  appId: "1:1006603779080:web:3d6c4d83af8365e23665bd",
  measurementId: "G-SVL5NXG3C9"

};

const app = initializeApp(firebaseConfing);

export const auth = getAuth(app);
export const db = getFirestore(app);

export const storage = getStorage(app);
