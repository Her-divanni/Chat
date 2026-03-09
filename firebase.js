import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import { getStorage} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

const firebaseConfing = {

    apiKey: "API_KEY",
    authDomain: "APP.firebaseapp.com",
    projectId: "APP",
    storageBucket: "APP.appspot.com",
    appId: "APPID"

};

const app = initializeApp(firebaseConfing);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);