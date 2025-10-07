let x = document.querySelector(".fa-xmark");
let btn = document.querySelector(".mybtn");
let cookie = document.querySelector(".cookie");
let shown = 0;
let container = document.querySelector("#con");
let lay = document.querySelector('.lay');

setTimeout(function(){
if (!shown) {
    lay.style.visibility = "visible"
    cookie.style.cssText = "visibility:visible;opacity:1;margin-bottom:20px";
    shown = 1;
  }
}, 4000)
x.addEventListener("click", function () {
  lay.style.visibility = "hidden"
  x.parentElement.style.cssText = "visibility:hidden;opacity:0;";
  cookie.parentElement.style.cssText = "opacity:1;";
});
btn.addEventListener("click", function () {
  lay.style.visibility = "hidden"
  cookie.parentElement.style.cssText = "opacity:1;";
  btn.parentElement.style.cssText = "visibility:hidden;opacity:0;";
  window.alert("You Have Been Hacked! :)");
});
