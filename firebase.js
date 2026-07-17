// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
getFirestore
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

import {
getStorage
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-storage.js";


// Firebase Config
const firebaseConfig = {

apiKey: "AIzaSyAafOYrG6cuihbT7CT4R5EO4_MRGge_YHk",

authDomain: "seeoldcartoon-257bc.firebaseapp.com",

projectId: "seeoldcartoon-257bc",

storageBucket: "seeoldcartoon-257bc.firebasestorage.app",

messagingSenderId: "895730182195",

appId: "1:895730182195:web:676b1eedebba52e5481b46"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);


// Services

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);


// Export

export {

auth,

db,

storage

};

