
let noTickets = 0
let  cuentaTickets = 4
let place

let tickets = {
  "Las Vegas": 100,
  "Tokyo":100,
  "Brisbane":1,
  "Inglewood":0,
  "Auckland":100,
  "Dunedin":2
}

function getTickets(place, noTickets) {
    if (noTickets) {
      swal(
        "Oh no! " + nombre," You are outta luck!, there are no more tickets for " + 
        place + ". noTickets = " + cuentaTickets, "info",
      );
    } else {
      swal("Sold! " + nombre," You have tickets to the " + place + 
      " concert" + ". noTickets = " + cuentaTickets, "success");
      cuentaTickets--;
    }
   }

   function  mifuncion(place){
      if (cuentaTickets == 0){
        noTickets = 1;
      }
      getTickets(place, noTickets)
   }

let nombre = prompt("Cuál es tu nombre?").toUpperCase();
while (nombre.length < 3) {
    nombre = prompt(
        "Mmmm, tu nombre no puede ser tan corto, ingresa al menos 3 letras",
    ).toUpperCase();
}

let edad = prompt("Cuál es tu edad?");
if (edad < 21){
  const span = document.getElementById("welcome");
  span.textContent = `Lo lamentamos!, ${nombre} de ${edad} años, usted es menor de edad!, no podemos venderle tickets`;
  swal("Lo lamentamos! " + nombre," usted es menor de edad!, no podemos venderle tickets", "info");
  // const button = document.querySelector("button");
  // // button.setAttribute("class", "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50");
  // button.disabled = false;
  // const buttons = document.getElementById("");
  let botones = document.querySelectorAll("button");
  for (let i = 0; i < botones.length; i++) {
    if(botones.getElementById("$")){
    botones[i].setAttribute("disabled", "true")
    botones[i].setAttribute("class", "bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50");
    }
  }
  // botones.forEach(boton => {
  //   if (boton.id == '$') {
  //       boton.disabled = true;
  //       boton.classList.add('disabled');
  //       boton.class
  //   }
  // });
}

if(edad > 20){
  const span = document.getElementById("welcome");
  span.textContent = `Hola, ${nombre} de ${edad} años, quieres comprar tickets?`;
  const i = document.querySelector("i");
  // i.setAttribute("class", "fa-solid fa-ticket fa-bounce");
  i.setAttribute("class", "fa fa-ticket");
}

//<i class="fa-duotone fa-solid fa-ticket fa-beat"></i>
//<i class="fa-thin fa-ticket fa-beat"></i>
// <i class="fa-solid fa-ticket fa-bounce"></i>

const favoriteRecords = ["disco1", "disco2", "disco3"];
function addFavorites(favorites) {
  const imgs = document.querySelectorAll("img");

  imgs.forEach((img) => {
    if (favorites.includes(img.name)) {
      const icon = document.createElement("i");
      icon.classList.add("fa-solid");
      icon.classList.add("fa-star");
      img.parentNode.appendChild(icon);
      img.parentElement.classList.add("favorite");
    }
  });
}

addFavorites(favoriteRecords)