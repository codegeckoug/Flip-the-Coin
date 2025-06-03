"Use strict";
const head = document.getElementById("head");
const tail = document.getElementById("tail");
const flipBtn = document.getElementById("flip");

const flipSound = new Audio("/img/sound/788074__mediasaur__coin_flip.wav");
//Generate random flip result
function flipCoin() {
  return Math.random() < 0.5 ? "head" : "tail";
}
function handleFlip() {
  flipSound.currentTime = 0;
  flipSound.play();
  head.classList.add("spin");
  setTimeout(function () {
    const result = flipCoin();
    const image = result === "head" ? "/img/heads.svg" : "/img/tails.svg";
    head.src = image;
    document.querySelector(".result").innerText =
      result === "head" ? "Heads!" : "Tails!";
    head.classList.remove("spin");
  }, 1000);
}
flipBtn.addEventListener("click", handleFlip);
head.addEventListener("click", handleFlip);
