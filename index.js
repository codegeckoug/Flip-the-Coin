"Use strict";
const head = document.getElementById("head");
const tail = document.getElementById("tail");
const flipBtn = document.getElementById("flip");

//Generate random flip result
function flipCoin() {
  return Math.random() < 0.5 ? "head" : "tail";
}
function handleFlip() {
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
