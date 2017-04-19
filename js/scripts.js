//Screen size variables
var scrX = screen.width;
var scrY = screen.height;
var winX = window.innerWidth;
var winY = window.innerHeight;

//Shorthand get element
function $(id) {
  return document.getElementById(id);
}

//Positions the logo
function logoPos() {
  $("logo").style.left = (winX / 2 - 350) + "px";
}

document.addEventListener("DOMContentLoaded", logoPos);
window.addEventListener("resize", logoPos);