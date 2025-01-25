"use strict";


// ADD EVENT ON ELEMENT 

const addEventOnElem = function(elem , type , callback){
    if(elem.length >1 ){
        for(let i = 0 ; i<elem.length; i++){
            elem[i].addEventListener(type , callback)
        }
    }else{
        elem.addEventListener(type, callback)
    }
}

// NAVBAR TOGGLE
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

// HEADER STICKY & back to top active
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]")

const headerActive = function () {
    if (window.scrollY > 150) {
        header.classList.add("active");
        backTopBtn.classList.add("active")
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active")
    }
};

window.addEventListener("scroll", headerActive);

let lastScrollPos = 0;

const headerSticky = function () {
    if (window.scrollY < lastScrollPos) {
        header.classList.remove("header-hide");
    } else {
        header.classList.add("header-hide");
    }
    lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", headerSticky);


// SCROLL REVEAL EFFECT

const sections = document.querySelectorAll("[data-section]")

const scrollReveal = function(){
    for(let i =0;i<sections.length ; i++){
        if(sections[i].getBoundingClientRect().top<window.innerHeight/2){
            sections[i].classList.add("active")
        }
    }
}
scrollReveal()

addEventOnElem(window, "scroll" , scrollReveal)