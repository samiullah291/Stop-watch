let start = document.getElementById("start");
let store = document.getElementById("store");
let Stop = document.getElementById("Stop");
let Clear = document.getElementById("Clear");
let display = document.getElementById("timer");
let second = 0;
let time = null;
let array = [];
let ul = document.getElementById("listlap");

store.addEventListener("click", function () {
  if (array.length < 5) {
    array.push(display.innerText);
  } else {
    array.push("0");

    second = 0;
    clearInterval(time);
    display.innerText = "00:00:00";
    start.disabled = false;
    array = [];
  }
  ul.innerHTML = "";

  for (const i of array) {
    ul.innerHTML += `<li>${i}</li>`;
  }
});

start.addEventListener("click", function () {
  time = setInterval(() => {
    updatetime();
    start.disabled = true;
  }, 1000);
});

Stop.addEventListener("click", function () {
  clearInterval(time);
  start.disabled = false;
});

Clear.addEventListener("click", function () {
  second = 0;
  clearInterval(time);
  start.disabled = false;
  display.innerText = "00:00:00";
});

function updatetime() {
  second = second + 1;
  let hrs = Math.floor(second / 3600);
  let mint = Math.floor((second % 3600) / 60);
  let sec = second % 60;
  //   console.log(hrs + " : " + mint + " : " + sec);
  display.innerText =
    hrs.toString().padStart(2, "00") +
    ":" +
    mint.toString().padStart(2, "00") +
    ":" +
    sec.toString().padStart(2, "00");
}