import datepicker from "js-datepicker";

const picker = datepicker("#input", {
  formatter: (input, date) => {
    const value = date.toLocaleDateString();
    input.value = value;
  },
});
let val = document.querySelector("#input");
let btn = document.querySelector("button");
let display = document.createElement("p");
display.classList.add("here")
btn.addEventListener("click", function () {
  let birthday = new Date(val.value);
  let now = new Date();
  let years = now.getFullYear() - birthday.getFullYear();
  let months =
    (now - birthday) / 1000 / 60 / 60 / 24 / (365.25 / 12) - years * 12;
  display.innerHTML = `You are <strong> ${years} years and ${months.toFixed(
    0
  )} months </strong> old`;
  document.querySelector("div").append(display);
});
