/*==================================================
 SeeOldCartoon Premium Script
 Version : 1.0
 Part : 1
==================================================*/

"use strict";

/*========================
Loading Screen
=========================*/

window.addEventListener("load", () => {

const loader = document.querySelector(".loading-screen");

if(loader){

loader.style.opacity = "0";

loader.style.pointerEvents = "none";

setTimeout(()=>{

loader.style.display="none";

},500);

}

});

/*========================
Back To Top
=========================*/

const backTop = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

if(window.scrollY > 350){

backTop.style.display="flex";

}else{

backTop.style.display="none";

}

});

backTop?.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/*========================
Navbar Shadow
=========================*/

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>60){

header.style.background="rgba(0,0,0,.85)";

header.style.backdropFilter="blur(20px)";

}else{

header.style.background="rgba(0,0,0,.45)";

}

});

/*========================
Fade Animation
=========================*/

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

});

document.querySelectorAll("section").forEach(sec=>{

observer.observe(sec);

});
/*========================
Mobile Menu
=========================*/

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeMenu = document.querySelector(".close-menu");

menuBtn?.addEventListener("click", () => {

    mobileMenu.style.right = "0";

});

closeMenu?.addEventListener("click", () => {

    mobileMenu.style.right = "-100%";

});

/*========================
Search Popup
=========================*/

const searchPopup = document.querySelector(".search-popup");
const searchBtn = document.querySelector(".search-box button");
const closeSearch = document.querySelector(".close-search");

searchBtn?.addEventListener("click", () => {

    searchPopup.style.display = "flex";

});

closeSearch?.addEventListener("click", () => {

    searchPopup.style.display = "none";

});

/*========================
ESC Close
=========================*/

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        if(searchPopup){

            searchPopup.style.display="none";

        }

        if(mobileMenu){

            mobileMenu.style.right="-100%";

        }

    }

});

/*========================
Outside Click Close
=========================*/

searchPopup?.addEventListener("click",(e)=>{

    if(e.target===searchPopup){

        searchPopup.style.display="none";

    }

});

/*========================
Notification Auto Hide
=========================*/

const notification = document.querySelector(".notification-box");

if(notification){

setTimeout(()=>{

notification.style.opacity="0";

notification.style.transform="translateY(30px)";

setTimeout(()=>{

notification.style.display="none";

},500);

},6000);

  }
/*========================
Hero Button Actions
=========================*/

const watchButtons = document.querySelectorAll(".watch-btn");

watchButtons.forEach(button=>{

button.addEventListener("click",()=>{

const latest=document.querySelector(".latest");

if(latest){

latest.scrollIntoView({

behavior:"smooth"

});

}

});

});

const infoButtons=document.querySelectorAll(".info-btn");

infoButtons.forEach(button=>{

button.addEventListener("click",()=>{

alert("Welcome to SeeOldCartoon! More amazing classic cartoons are coming soon.");

});

});

/*========================
Card Hover Effect
=========================*/

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*========================
Current Year
=========================*/

const copyright=document.querySelector(".copyright p");

if(copyright){

const year=new Date().getFullYear();

copyright.innerHTML=`© ${year} SeeOldCartoon. All Rights Reserved.`;

}

/*========================
Navbar Active Link
=========================*/

const navLinks=document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

navLinks.forEach(item=>item.classList.remove("active"));

link.classList.add("active");

});

});

/*========================
Console Message
=========================*/

console.log("🚀 SeeOldCartoon Loaded Successfully");
/*========================
Cookie Accept
=========================*/

const cookiePopup = document.querySelector(".cookie-popup");
const cookieButton = document.querySelector(".cookie-popup button");

if(localStorage.getItem("soc_cookie") === "accepted"){

if(cookiePopup){

cookiePopup.style.display="none";

}

}

cookieButton?.addEventListener("click",()=>{

localStorage.setItem("soc_cookie","accepted");

cookiePopup.style.display="none";

});

/*========================
Scroll Progress Bar
=========================*/

const progressBar=document.createElement("div");

progressBar.style.position="fixed";
progressBar.style.top="0";
progressBar.style.left="0";
progressBar.style.height="4px";
progressBar.style.width="0%";
progressBar.style.background="#ff3b30";
progressBar.style.zIndex="999999";

document.body.appendChild(progressBar);

window.addEventListener("scroll",()=>{

const totalHeight=document.documentElement.scrollHeight-window.innerHeight;

const progress=(window.scrollY/totalHeight)*100;

progressBar.style.width=progress+"%";

});

/*========================
Image Lazy Loading
=========================*/

const images=document.querySelectorAll("img");

const imageObserver=new IntersectionObserver((entries,observer)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const img=entry.target;

if(img.dataset.src){

img.src=img.dataset.src;

}

observer.unobserve(img);

}

});

});

images.forEach(img=>{

imageObserver.observe(img);

});

/*========================
Button Ripple Effect
=========================*/

document.querySelectorAll("button").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(this.clientWidth,this.clientHeight);

circle.style.width=diameter+"px";

circle.style.height=diameter+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.35)";

circle.style.transform="scale(0)";

circle.style.animation="ripple .6s linear";

circle.style.left=e.offsetX-diameter/2+"px";

circle.style.top=e.offsetY-diameter/2+"px";

this.appendChild(circle);

setTimeout(()=>{

circle.remove();

},600);

});

});
/*========================
Live Search
=========================*/

const searchInput = document.querySelector(".search-container input");
const allCards = document.querySelectorAll(".card");

searchInput?.addEventListener("keyup", () => {

const value = searchInput.value.toLowerCase();

allCards.forEach(card => {

const title = card.querySelector("h3").textContent.toLowerCase();

if(title.includes(value)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

/*========================
Favorite System
=========================*/

allCards.forEach(card=>{

const fav=document.createElement("button");

fav.innerHTML="❤";

fav.className="favorite-btn";

card.appendChild(fav);

fav.addEventListener("click",(e)=>{

e.stopPropagation();

fav.classList.toggle("active");

});

});

/*========================
Card Click Animation
=========================*/

allCards.forEach(card=>{

card.addEventListener("click",()=>{

card.classList.add("zoom-in");

setTimeout(()=>{

card.classList.remove("zoom-in");

},600);

});

});

/*========================
Smooth Page Reveal
=========================*/

document.body.style.opacity="0";

window.addEventListener("load",()=>{

document.body.style.transition="opacity .5s ease";

document.body.style.opacity="1";

});

/*========================
Disable Right Click
=========================*/

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

/*========================
Disable F12
=========================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="F12"){

e.preventDefault();

}

});

/*========================
End Part 5
=========================*/

console.log("Script Part 5 Loaded Successfully");

/*========================
Theme Auto Detect
=========================*/

if(window.matchMedia("(prefers-color-scheme: dark)").matches){

console.log("Dark mode detected.");

}

/*========================
Card Entrance Animation
=========================*/

const revealCards=document.querySelectorAll(".card");

const revealObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

revealCards.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(40px)";

card.style.transition=".6s ease";

revealObserver.observe(card);

});

/*========================
Image Error Handler
=========================*/

document.querySelectorAll("img").forEach(img=>{

img.onerror=function(){

this.src="assets/images/placeholder.jpg";

};

});

/*========================
Simple Visitor Counter
=========================*/

let visits=localStorage.getItem("soc_visits");

if(!visits){

visits=1;

}else{

visits=parseInt(visits)+1;

}

localStorage.setItem("soc_visits",visits);

console.log("Visits:",visits);

/*========================
Website Ready
=========================*/

window.addEventListener("load",()=>{

console.log("================================");
console.log(" SeeOldCartoon v1.0 Loaded");
console.log(" HTML ✓");
console.log(" CSS ✓");
console.log(" JavaScript ✓");
console.log("================================");

});
