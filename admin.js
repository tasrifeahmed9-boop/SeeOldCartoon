import { auth, db } from "./firebase.js";

import {
signInWithEmailAndPassword,
signOut,
onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import {
collection,
addDoc,
getDocs,
deleteDoc,
doc
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const loginForm = document.getElementById("loginForm");
const adminDashboard = document.getElementById("adminDashboard");
const logoutBtn = document.getElementById("logoutBtn");

const cartoonForm = document.getElementById("cartoonForm");
const cartoonList = document.getElementById("cartoonList");
// ==========================
// LOGIN
// ==========================

loginForm.addEventListener("submit", async (e) => {

e.preventDefault();

const email = document.getElementById("email").value.trim();

const password = document.getElementById("password").value;

try{

await signInWithEmailAndPassword(

auth,

email,

password

);

alert("✅ Login Successful");

}

catch(error){

alert("❌ " + error.message);

}

});


// ==========================
// AUTH STATE
// ==========================

onAuthStateChanged(auth,(user)=>{

if(user){

document.querySelector(".admin-login").style.display="none";

adminDashboard.style.display="block";

loadCartoons();

}else{

document.querySelector(".admin-login").style.display="block";

adminDashboard.style.display="none";

}

});


// ==========================
// LOGOUT
// ==========================

logoutBtn.addEventListener("click",async()=>{

await signOut(auth);

alert("Logged Out");

});
// ==========================
// SAVE CARTOON
// ==========================

cartoonForm.addEventListener("submit", async (e) => {

e.preventDefault();

const data = {

title: document.getElementById("title").value,

category: document.getElementById("category").value,

thumbnail: document.getElementById("thumbnail").value,

video: document.getElementById("video").value,

description: document.getElementById("description").value,

featured: document.getElementById("featured").checked,

trending: document.getElementById("trending").checked,

createdAt: Date.now()

};

try{

await addDoc(collection(db,"cartoons"),data);

alert("✅ Cartoon Added Successfully");

cartoonForm.reset();

loadCartoons();

}catch(err){

alert("❌ "+err.message);

}

});


// ==========================
// LOAD CARTOONS
// ==========================

async function loadCartoons(){

cartoonList.innerHTML="Loading...";

const snapshot=await getDocs(collection(db,"cartoons"));

cartoonList.innerHTML="";

snapshot.forEach((docSnap)=>{

const c=docSnap.data();

cartoonList.innerHTML+=`

<div class="cartoon-item">

<div class="cartoon-info">

<h4>${c.title}</h4>

<p>${c.category}</p>

</div>

<div class="cartoon-actions">

<button class="delete-btn"

onclick="deleteCartoon('${docSnap.id}')">

Delete

</button>

</div>

</div>

`;

});

}
// ==========================
// DELETE CARTOON
// ==========================

window.deleteCartoon = async function(id){

const ok = confirm("Are you sure you want to delete this cartoon?");

if(!ok) return;

try{

await deleteDoc(doc(db,"cartoons",id));

alert("🗑 Cartoon Deleted Successfully");

loadCartoons();

}catch(err){

alert("❌ "+err.message);

}

};
