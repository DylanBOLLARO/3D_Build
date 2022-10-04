// header bouton
// const btnHome = document.
// fin header bouton

const buildList = document.querySelector(".buildList");
const mainView = document.querySelector(".mainView");

let cardSelect = [];
let dataJSON = [];
let volumeMuted = true;

async function getBuildOrderJSON() {
  //Fetch du JSON => dataJSON[] (1 obj = 1 BO)
  await fetch("buildOrder.json")
    .then((res) => res.json())
    .then((data) => {
      dataJSON = data;
      //Pour chaque obj on crée une carte, avec le nom du BO
      for (let i = 0; i < dataJSON.length; i++) {
        buildList.innerHTML += `
                                <div id="${dataJSON[i].Name}" class="card">
                                <div><p>${dataJSON[i].Name}</p></div>                            
                                </div>
                              `;
      }
      //cardSelect contient toutes les cartes
      cardSelect = document.querySelectorAll(".card");
    });

  cardSelect.forEach((element) => {
    element.addEventListener("click", () => {
      for (let i = 0; i < dataJSON.length; i++) {
        if (element.id === dataJSON[i].Name) {
          console.log(dataJSON[i].Name);
          mainView.innerHTML = `<div class="card-name-bo">
                                  <h1 style="margin-bottom:20px">${element.id}</h1>
                                  </div>
                                `;
          mainView.innerHTML += `
            <h2 style="margin-bottom:20px">Description:<p style="font-size:1rem;color:grey">${dataJSON[i].Description}</p></h2>
          `;

          mainView.innerHTML += `
          <h2 style="margin-bottom:20px">Build order:</h2>
        `;

          mainView.innerHTML += `
            <table>
              <thead id="test">
                <tr style="font-size:1.5rem">
                  <th scope="col">Population</th>
                  <th scope="col">Temps</th>
                  <th scope="col">Description</th>
                  <th scope="col">Indication</th>
                </tr>
              </thead>
            </table>
            `;
          const inject = document.getElementById("test");

          for (let j = 0; j < dataJSON[i].BO.length; j++) {
            inject.innerHTML += `<tr  style="color:grey">
                                    <th style="padding: 5px 20px" scope="col">${dataJSON[i].BO[j][0]}</th>
                                    <th style="padding: 5px 20px" scope="col">${dataJSON[i].BO[j][1]}</th>
                                    <th style="padding: 5px 20px;text-align:left" scope="col">${dataJSON[i].BO[j][2]}</th>
                                    <th style="padding: 5px 20px"scope="col">${dataJSON[i].BO[j][3]}</th>
                                  </tr>`;
          }

          mainView.innerHTML += `
          <h2 style="margin:20px 0">Suite:<p style="font-size:1rem;color:grey">${dataJSON[i].Suite}</p></h2>
        `;
        }
      }
    });
  });
}

getBuildOrderJSON();

home.addEventListener("click", () => {
  mainView.innerHTML = ``;
});

const aze = document.getElementById("btnDeVolumeCouleur");

console.log(aze);

btnVolume.addEventListener("click", () => {
  if (volumeMuted == true) {
    btnVolume.innerHTML = `<div id"btnDeVolumeCouleur">
                            <i class="fa-solid fa-volume-xmark"></i>    
                          </div>`;

    btnVolume.style.color = "green";
    volumeMuted = false;
  } else {
    btnVolume.innerHTML = `<div id"btnDeVolumeCouleur">
                            <i class="fa-solid fa-volume-off"></i>
                          </div>`;
    aze.style.color = "yellow";
    volumeMuted = true;
  }
});
