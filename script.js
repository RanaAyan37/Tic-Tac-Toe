console.log("Welcome to Tic Tac Toe");

let ting = new Audio("ting.mp3");
let box = document.querySelectorAll(".box");

let music = new Audio("music.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let Isgameover = false;

const changeturne = () => {
  return turn === "X" ? "0 " : "X";
};

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxText[e[0]].innerText !== "" &&
      boxText[e[0]].innerText === boxText[e[1]].innerText &&
      boxText[e[1]].innerText === boxText[e[2]].innerText
    ) {
      let info = document.querySelector(".info");
      info.innerText = boxText[e[0]].innerText + " is Won";
      isGameOver = true;
      gameover.play();
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.height = "156px";
    }
  });
};
Array.from(box).forEach((element) => {
  let boxText = element.querySelector(".boxtext");
  element.addEventListener("click", (e) => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeturne();
      if (!Isgameover) {
        const info = document.querySelector(".info");
        info.innerHTML = "Turn for " + turn;
        ting.play();
      }

      checkWin();
    }
  });
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  let boxText = document.querySelectorAll(".boxtext");
  Array.from(boxText).forEach((element) => {
    element.innerText = "";
    document
      .querySelector(".imgbox")
      .getElementsByTagName("img")[0].style.height = "0";
  });
});
