document.querySelector("#flipper").addEventListener("click", function () {
  document.querySelector(".card").style.transition = "1s";
  document.querySelector(".card").classList.toggle("flipped");
});

// Array of 10 quiz questions
const questions = [
  "What is the capital city of Australia?",
  "Which planet is known as the 'Red Planet'?",
  "What is the largest ocean on Earth?",
  "In what year did the first manned moon landing occur?",
  "What is the chemical symbol for gold?",
  "Which famous scientist developed the theory of relativity?",
  "How many continents are there?",
  "What is the primary gas that makes up the air we breathe?",
  "What is the name of the longest river in the world?",
  "Which animal is known as the 'King of the Jungle'?",
];

// Array of the 10 corresponding correct answers
const answers = [
  "Canberra",
  "Mars",
  "Pacific Ocean",
  "1969",
  "Au",
  "Albert Einstein",
  "Seven",
  "Nitrogen",
  "Nile",
  "Lion",
];
let line = document.querySelector(".line");
let persent = document.querySelector(".persentage");
let number = document.querySelector(".numberOfCards");
let back = document.querySelector(".back");
let front = document.querySelector(".front");
let k = 0;
display(k);

function display(i) {
  if (k < 0) {
    i = 0;
    k = 0;
  } else if (k >= answers.length) {
    i = answers.length - 1;
    k = answers.length - 1;
  }
  let actual = 1 + i;
  if ((actual / answers.length) * 100 >= 60) {
    persent.style.color = "white";
  } else persent.style.color = "black";
  if ((actual / answers.length) * 100 == 100) {
    number.style.color = "white";
  } else number.style.color = "black";
  line.style.width = `calc(${(actual / answers.length) * 100}% - 4px)`;
  back.innerHTML = `${answers[i]}`;
  front.innerHTML = `${questions[i]}`;
  persent.innerHTML = `${(actual / answers.length) * 100}%`;
  number.innerHTML = `${actual} of ${answers.length}`;
}

document.querySelector("#next").addEventListener("click", function () {
  display(++k);
  document.querySelector(".card").style.transition = "0s";
  document.querySelector(".card").classList.remove("flipped");
});
document.querySelector("#prev").addEventListener("click", function () {
  display(--k);
  document.querySelector(".card").style.transition = "0s";
  document.querySelector(".card").classList.remove("flipped");
});
