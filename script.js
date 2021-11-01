
// Set variable to be planet name entered in to form
 let planet = document.getElementById("planet").value

// Get data according to form input
function getPlanet() {
  fetch('https://api.le-systeme-solaire.net/rest/bodies/')
  .then(response => response.json())
  .then(bodies => (bodies.find(element => element.englishName === planet)

// Select DOM element and add event listener
document.getElementById('getPlanet').addEventListener('click', getPlanet)

// Manipulate DOM


