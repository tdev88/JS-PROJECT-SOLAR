// Set variable to be planet name entered in to form
let planet = document.getElementById("planet")

// Get data according to form input
function getPlanet() {
 return fetch('https://api.le-systeme-solaire.net/rest/bodies/') 
  .then(Response => Response.json())
  .then(data => data)
}

// Get Planets
const mapPlanets = () => {
  getPlanet()
    .then(data => {
      bodiesArray = data.bodies
    const result = bodiesArray.find(element => element.englishName === planet.value)
    console.log(result)
    renderPlanet(result)
  })
}


// Select DOM element and add event listener
document.getElementById('getPlanet').addEventListener('click', mapPlanets)

// Manipulate DOM

function renderPlanet(result) {
  document.querySelector("h5.modal-title").innerText = result.englishName
  document.querySelector("h5#isPlanet").innerText = "Is Planet? " + result.isPlanet
}