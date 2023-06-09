var pokemonName;
var pokemonSearch = "";

  // add function to play audio when either "enter" is pressed or "Search" button is clicked
function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
    myAudio.play();
}

  // add function to fetch pokemon info from api
async function fetchPokemon() {
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch;
  var response = await fetch(api);
  var data = await response.json();

  // get picture of pokemon being searched from api
  var urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  var pic =  document.getElementById("result-img");
  pic.src = urlArtwork; 
}

  // navigate to second html page
var queryString = "./secondpageindex.html"; 

  // add event listener so pokemon is searched when "enter" is pressed
var input = document.getElementById("search-bar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

  // add event listener so pokemon is searched when the "Search" button is clicked. Also loads a random pokemon if nothing is inputed and user presses "enter" or clicks the "Search" button
document.getElementById("search-btn").addEventListener("click", function(event) {
  event.preventDefault();
  aud_play_pause();
  pokemonSearch = document.querySelector("input").value;
  var element = document.getElementById('search-bar');
  element.value=""
  if (!pokemonSearch){
    pokemonSearch = Math.floor(Math.random() * (1010 - 1 + 1) + 1)
  }
  
  // saves inputed pokemon to local storage and sets a timout
  localStorage.setItem('pokemonSearch', JSON.stringify(pokemonSearch));
  var queryString = `./secondpageindex.html?pokemon=${pokemonSearch}`; 
  setTimeout(()=> {
    location.assign(queryString.toLowerCase())
  }, 1100)
});