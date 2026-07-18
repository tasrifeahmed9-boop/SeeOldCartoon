"use strict";

/* =========================================
   SeeOldCartoon Script V2
   Part 1
========================================= */

document.addEventListener("DOMContentLoaded", () => {

const body = document.body;
const loader = document.querySelector(".loading-screen");
const header = document.querySelector("header");

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

const searchPopup = document.querySelector(".search-popup");
const searchBtn = document.querySelector(".search-box button");
const closeSearch = document.querySelector(".close-search");

const backTop = document.querySelector(".back-to-top");

const cookiePopup = document.querySelector(".cookie-popup");
const cookieBtn = document.querySelector(".cookie-popup button");


// =============================
// Loading
// =============================

window.addEventListener("load",()=>{

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},500);

}

});


// =============================
// Navbar Scroll
// =============================

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.classList.add("scrolled");

}else{

header.classList.remove("scrolled");

}

});


// =============================
// Back To Top
// =============================

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// =============================
// Mobile Menu
// =============================

menuBtn.addEventListener("click",()=>{

mobileMenu.classList.add("show-menu");

});

closeMenu.addEventListener("click",()=>{

mobileMenu.classList.remove("show-menu");

});


// =============================
// Search Popup
// =============================

searchBtn.addEventListener("click",()=>{

searchPopup.classList.add("show-search");

});

closeSearch.addEventListener("click",()=>{

searchPopup.classList.remove("show-search");

});


// =============================
// ESC Close
// =============================

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

mobileMenu.classList.remove("show-menu");

searchPopup.classList.remove("show-search");

}

});


// =============================
// Cookie
// =============================

if(localStorage.getItem("cookieAccepted")){

cookiePopup.style.display="none";

}

cookieBtn.addEventListener("click",()=>{

localStorage.setItem("cookieAccepted","yes");

cookiePopup.style.display="none";

});

console.log("SeeOldCartoon Script V2 Part 1 Loaded");

});
// =============================
// Hero Buttons
// =============================

document.querySelectorAll(".watch-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

const latest=document.querySelector(".latest");

if(latest){

latest.scrollIntoView({

behavior:"smooth"

});

}

});

});

document.querySelectorAll(".info-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

alert("More classic cartoons will be added soon!");

});

});


// =============================
// Notification Auto Hide
// =============================

const notification=document.querySelector(".notification-box");

if(notification){

setTimeout(()=>{

notification.style.opacity="0";

notification.style.transform="translateY(40px)";

setTimeout(()=>{

notification.remove();

},500);

},6000);

}


// =============================
// Live Search
// =============================

const searchInput=document.querySelector(".search-container input");

const cards=document.querySelectorAll(".card");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

cards.forEach(card=>{

const title=card.querySelector("h3").textContent.toLowerCase();

card.style.display=

title.includes(value)

? ""

: "none";

});

});

}


// =============================
// Card Hover Animation
// =============================

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-8px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px)";

});

});


// =============================
// Active Navbar
// =============================

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

document.querySelectorAll(".nav-links a").forEach(a=>{

a.classList.remove("active");

});

link.classList.add("active");

});

});

console.log("Script V2 Part 2 Loaded");
// =============================
// Scroll Progress Bar
// =============================

const progressBar = document.createElement("div");

progressBar.className = "scroll-progress";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

const total = document.documentElement.scrollHeight - window.innerHeight;

const progress = (window.scrollY / total) * 100;

progressBar.style.width = progress + "%";

});


// =============================
// Fade Animation
// =============================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

sections.forEach(section=>observer.observe(section));


// =============================
// Image Error
// =============================

document.querySelectorAll("img").forEach(img=>{

img.onerror=function(){

this.src="assets/images/placeholder.jpg";

};

});


// =============================
// Visitor Counter
// =============================

let visits = Number(localStorage.getItem("soc_visits") || 0);

visits++;

localStorage.setItem("soc_visits", visits);

console.log("Visitors:", visits);


// =============================
// Ready
// =============================

console.log("================================");
console.log("SeeOldCartoon Script V2 Ready");
console.log("================================");
