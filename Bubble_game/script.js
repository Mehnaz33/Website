let pbot = document.querySelector("#pbot");

function makeBubble() {
  let clutter = "";
  for (let i = 1; i <= 168; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${rn}</div>`;
    pbot.innerHTML = clutter;
  }
}

let timer = 60;
let score = 0;
let mrn = 0;

function runTimer() {
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbot").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewHit() {
  mrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = mrn;
}
function scoreIncrease() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbot").addEventListener("click", function (det) {
  let clickedNum = Number(det.target.textContent);
  if (clickedNum == mrn) {
    scoreIncrease();
    makeBubble();
    getNewHit();
  }
});
runTimer();
makeBubble();
getNewHit();
scoreIncrease();
