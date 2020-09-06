"use strict";

var menuList = document.getElementsByClassName("main-nav__box");
var menuOpenIcon = document.getElementsByClassName("main-nav__open");
var menuCloseIcon = document.getElementsByClassName("main-nav__close");

/* =======================
  // Menu and Navigation
  ======================= */
menuOpenIcon[0].addEventListener(
  "click",
  function () {
    menuOpen();
  },
  false
);

menuCloseIcon[0].addEventListener(
  "click",
  function () {
    menuClose();
  },
  false
);

function menuOpen() {
  menuList[0].classList.add("visible");
}

function menuClose() {
  menuList[0].classList.remove("visible");
}

/* ================================
  // AOS - Animate On Scroll Library
  ================================ */
AOS.init();
