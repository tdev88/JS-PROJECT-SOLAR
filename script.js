//-------------------------------FETCH API ---------------------------------------------------------------------
function getPlanet() {
 return fetch('https://api.le-systeme-solaire.net/rest/bodies/') 
  .then(Response => Response.json())
  .then(data => data)
}

//-------------------------------GET PLANET INFO----------------------------------------------------------------

// Assign body name entered in to form to a variable
let body = document.getElementById("planet")

// FETCH information for only for chosen body
const findPlanets = () => {
  getPlanet()
    .then(data => {
    bodiesArray = data.bodies
    const result = bodiesArray.find(element => element.englishName === body.value)
    console.log(result)
    renderPlanet(result)
  })
}

// Select DOM element and add event listener for Get Planet Info button
document.getElementById('getPlanetInfo').addEventListener('click', findPlanets)

// Manipulate DOM > Insert planetInfo in to modal
function renderPlanet(result) {
  document.querySelector("h5.modal-title").innerText = result.englishName
  document.querySelector("h5#isPlanet").innerText = "Is Planet? " + result.isPlanet
}

//-------------------------------DISPLAY LIST OF BODIES CLASSED AS PLANETS--------------------------------------

// FETCH only bodies classed as planets
const findPlanetsOnly = () => {
  getPlanet()
    .then(data => {
    bodiesArray = data.bodies
    const planetsOnly = bodiesArray.filter(element => element.isPlanet === true)
    console.log(planetsOnly)
    renderPlanetsOnly(planetsOnly)
  })
}

// Select DOM element and add event listener for List of Planets button
document.getElementById('isPlanetTrue').addEventListener('click', findPlanetsOnly)

// Manipulate DOM > Insert List of Planets only
function renderPlanetsOnly(planetsOnly) {
  let output = `<h2>Planets</h2>`
  planetsOnly.forEach(function(planet) {
    output += `<ul>${planet.englishName}</ul>`
  })

  document.getElementById('planetsOnly').innerHTML = output
}

//-------------------------------CHANGE THEME-------------------------------------------------------------------

// Select DOM lement and add event listener for Change Theme button
document.getElementById('changeTheme').addEventListener('click', toggleTheme)

// Manipulate DOM to toggle theme
function toggleTheme() {
  let theme = document.body
  theme.classList.toggle("bg-dark")
  theme.classList.toggle("text-white")
}

//-------------------------------END OF CODE--------------------------------------------------------------------

