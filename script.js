// Assign planet name entered in to form to a variable
let planet = document.getElementById("planet")


// Fetch API to get planet data
function getPlanet() {
 return fetch('https://api.le-systeme-solaire.net/rest/bodies/') 
  .then(Response => Response.json())
  .then(data => data)
}

// Get information for chosen planet
const findPlanets = () => {
  getPlanet()
    .then(data => {
      bodiesArray = data.bodies
    const result = bodiesArray.find(element => element.englishName === planet.value)
    console.log(result)
    renderPlanet(result)
  })
}

// Select DOM element and add event listener for Get Planet Info button
document.getElementById('getPlanet').addEventListener('click', findPlanets)

//Select DOM lement and add event listener for Change Theme button
document.getElementById('changeTheme').addEventListener('click', toggleTheme)

//Select DOM element and add event listener for Change Theme
function toggleTheme() {
  let theme = document.body
  theme.classList.toggle("bg-dark")
  theme.classList.toggle("text-white")
}

// Manipulate DOM > Insert planetInfo in to modal
function renderPlanet(result) {
  document.querySelector("h5.modal-title").innerText = result.englishName
  document.querySelector("h5#isPlanet").innerText = "Is Planet? " + result.isPlanet
}

