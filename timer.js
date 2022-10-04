const departMinutes = 0;
let temps = departMinutes * 60;
const timerElement = document.getElementById("timer");

let intervalID, //Variable global qui recevra l'id de l'interval
  isStart = false, //Variable global qui indique l'état du chronomètre (en marche ou non)
  secondBis = 0,
  second = 1; //Le nombre de seconde écoulé (enfin pour être exacte, le nombre d’exécution de l'interval) *voir en fin de message

const action_ival = function () {
  //ici les actions que tu souhaite effectuer dans ton interval
  let minutes = parseInt(second / 60, 10);
  let secondes = parseInt(second % 60, 10);

  console.log(second % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  secondes = secondes < 10 ? "0" + secondes : secondes;

  timerElement.innerText = `${minutes}:${secondes}`;
  temps++;
  second++;
  secondBis++;
  console.log(`${secondBis}`);
};

const chrono = function (act) {
  if (act === "start") {
    intervalID = window.setInterval(action_ival, 1000);
    timer.style.color = "#09c";
  } else {
    timer.style.color = "#f44";
    window.clearInterval(intervalID);
    console.log(`pause`);
  }
};

btnPlay.addEventListener("click", function () {
  //on vérifie si le chrono n'est pas lancé (isStart)
  if (isStart === false) {
    isStart = true;
    chrono("start");
  }
});

btnPause.addEventListener("click", function () {
  //on vérifie si le chrono est lancé (isStart)
  if (isStart === true) {
    isStart = false;
    chrono("end"); //NB: comme je suis feignant j'utilise un else dans
    //la fonction chrono donc je pourrais mettre n'importe quoi du
    //moment que ce n'est pas "start"
  }
});

btnReset.addEventListener("click", function () {
  minutes = "00";
  secondes = "00";
  second = 1;
  timerElement.innerText = `${minutes}:${secondes}`;
});
