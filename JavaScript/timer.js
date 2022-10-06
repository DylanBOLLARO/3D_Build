const departMinutes = 0;
let temps = departMinutes * 60;
const timerElement = document.getElementById("timer");

import { ms } from "./index.js";
import { dataJSON } from "./index.js";

let intervalID, //Variable global qui recevra l'id de l'interval
  isStart = false, //Variable global qui indique l'état du chronomètre (en marche ou non)
  secondBis = 0,
  minutes,
  secondes,
  nbSpeak = 0,
  second = 1;

var audio = new Audio("JavaScript/5.mp3");
const action_ival = function () {
  // console.log(dataJSON[ms].BO[nbSpeak][1]);

  console.log(dataJSON[ms].BO[nbSpeak][1] - secondBis);

  timerAnnonce.innerHTML = `${dataJSON[ms].BO[nbSpeak][1] - secondBis} s`;
  if (dataJSON[ms].BO[nbSpeak][1] == secondBis) {
    console.log("play song ");
    nbSpeak++;

    audio.play();
  }

  minutes = parseInt(second / 60, 10);
  secondes = parseInt(second % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;
  temps++;
  second++;
  secondBis++;
};

const chrono = function (act) {
  if (act === "start") {
    intervalID = window.setInterval(action_ival, 1000);
    timer.style.color = "#3FA";
  } else {
    timer.style.color = "#c2c2c2";
    window.clearInterval(intervalID);
    console.log(`pause`);
  }
};

btnPlay.addEventListener("click", function () {
  // console.log(dataJSON);
  if (ms == null) {
    document.querySelector(".popupMaster").style.visibility = "visible";
    document.querySelector(
      ".popupMaster h1"
    ).innerHTML = `Vous devez choisir un build order avant de pouvoir l'écouter`;
  } else {
    if (isStart === false) {
      isStart = true;
      chrono("start");
    }
  }
});

btnPause.addEventListener("click", function () {
  if (isStart === true) {
    isStart = false;
    chrono("end");
  }
});

btnReset.addEventListener("click", function () {
  minutes = "00";
  secondes = "00";
  second = 1;
  timerElement.innerText = `${minutes}:${secondes}`;
});
