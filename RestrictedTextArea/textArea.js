let msg = document.getElementById("message");
let counter = document.querySelector("span");
msg.addEventListener("input", () => {
  if (msg.value.length > 250) {
    msg.style.cssText = "border:red solid 2px; color:red";
    counter.style.color = "red";
  } else {
    msg.style.cssText = "border:black solid 2px; color:black";
    counter.style.color = "black";
  }
  counter.innerHTML = `${msg.value.length} / 250`;
});
