let x = document.querySelector('.fa-xmark');
let btn = document.querySelector('.mybtn');
let cookie = document.querySelector('.cookie');
let shown = 0;
document.body.onmouseenter = function() {
    if (!shown) {
        cookie.style.cssText = "visibility:visible;opacity:1;";
        shown = 1;
    }
}
x.addEventListener("click",function(){
    x.parentElement.style.cssText = "visibility:hidden;opacity:0;"
})
btn.addEventListener("click",function(){
    btn.parentElement.style.cssText = "visibility:hidden;opacity:0;"
    window.alert("You Have Been Hacked! :)")
})