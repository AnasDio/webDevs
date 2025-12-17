let body = document.querySelector(".body");
let arrow = document.querySelector("#arrow");
let head = document.querySelector(".head");
arrow.addEventListener("click", function () {
  arrow.classList.toggle("flip");
  body.classList.toggle("visible");
});
let bodyParts = document.querySelectorAll(".body div");
bodyParts.forEach(function (e) {
  e.addEventListener("click", function () {
    bodyParts.forEach(function (e, index) {
      if (index == Array.from(bodyParts).indexOf(event.currentTarget)) {
        e.children[0].classList.remove("noSelect");
        head.childNodes[0].textContent = e.childNodes[0].textContent;
        setTimeout(() => {
          arrow.click();
        }, 500);
      } else {
        e.children[0].classList.add("noSelect");
      }
    });
  });
});
