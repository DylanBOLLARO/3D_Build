const buildList = document.querySelector(".buildList");
const mainView = document.querySelector(".mainView");

let dataJSON = [];
let tempo = "";

async function getBuildOrderJSON() {
  await fetch("buildOrder.json")
    .then((res) => res.json())
    .then((data) => {
      dataJSON = data;
    });
  // console.log(dataJSON);

  for (let i = 0; i < dataJSON.length; i++) {
    // console.log(dataJSON[i].Name);
    buildList.innerHTML += `
                            <div id="${dataJSON[i].Name}" class="card">
                            <p>${dataJSON[i].Name}</p>
                            </div>
                          `;
  }

  const cardSelect = document.querySelectorAll(".card");
  cardSelect.forEach((element) => {
    element.addEventListener("click", () => {
      // console.log("clic");
      // console.log(element.id);
      // console.log(dataJSON[0].Name);
      for (let i = 0; i < dataJSON.length; i++) {
        if (element.id === dataJSON[i].Name) {
          console.log(dataJSON[i].Name);
          mainView.innerHTML = `
                                <h1 style="margin-bottom:20px">${element.id}</h1>
                              `;
          // console.log(dataJSON[i].BO.length);
          mainView.innerHTML += `
          <p style="margin-bottom:20px">${[
            ["Population"],
            ["Temps"],
            ["Description"],
          ].join(" ")}</p>
        `;
          for (let j = 0; j < dataJSON[i].BO.length; j++) {
            mainView.innerHTML += `
            <p>${dataJSON[i].BO[j].join(" ... ")}</p>
          `;
          }
        }
        // <div>${dataJSON[i].BO}</div>
      }

      // console.log(dataJSON.includes(element.id));
    });
  });
}

getBuildOrderJSON();
