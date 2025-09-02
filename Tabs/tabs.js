let tabs = document.querySelectorAll(".head p");
let content = document.querySelectorAll(".content div");
content[0].style.display = "block";
tabs.forEach(function (ele) {
  ele.onclick = function () {
    tabs.forEach(function (a) {
      a.classList.remove("activetab");
    });
    this.classList.add("activetab");
    content.forEach(function (ele, index) {
      if (index === Array.from(tabs).indexOf(event.currentTarget)) {
        ele.style.display = "block";
      } else {
        ele.style.display = "none";
      }
    });
  };
});

