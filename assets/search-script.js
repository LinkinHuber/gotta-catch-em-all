var pokemonName;
var pokemon;
var pokemonSearch = document.URL.split('=')[1];
var urlArtwork;
var RestrictSpaceSpecial;
var initialSearch = document.URL.split('=')[1];

//add event listener for so when enter button is pressed pokemon data is retrieved
var input = document.getElementById("search-bar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

  // add event listener so when button is pressed with mouse pokemon data is retrieved
document.getElementById("search-btn").addEventListener("click", function(event) {
  event.preventDefault();
  pokemonSearch = document.querySelector("input").value.toLowerCase();
  var element = document.getElementById('search-bar');
  element.value="";
  if (!pokemonSearch){
    pokemonSearch = Math.floor(Math.random() * (1010 - 1 + 1) + 1)
  }
  aud_play_pause()  // play audio on button press
  fetchPokemon();
});
  // add function to play audio
function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
    myAudio.play();

}
  // add function to retrieve data from api
async function fetchPokemon() {
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch;
  var response = await fetch(api);
  var data = await response.json();
  urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  pokemon = data;
  displayPokemon();

}
  // add function for pokemon type data
function parseTypes(types) {
  var response = "Type: " + types[0].type.name;
  if (types.length > 1) {
    response += ", " + types[1].type.name;
  }
  return response;
} 
  //add function to read the first two pokemon abilities
function parseAbilities(abilities) {
  var response = "Abilities: " + abilities[0].ability.name;
  if (abilities.length > 1) {
    response += ", " + abilities[1].ability.name;
  }
  return response;
}
  // display results of pokemon search, i.e. name, height, weight, abilities, type, and image
function displayPokemon() {
  var pic = document.getElementById("result-img");
  pic.src = urlArtwork;
  document.getElementById("result-name").innerHTML = ("Name:" + " " + pokemon.name);
  document.getElementById("result-height").innerHTML = ("Height:" + " " + pokemon.height);
  document.getElementById("result-weight").innerHTML = ("Weight:" + " " + pokemon.weight);
  document.getElementById("result-abilities").innerHTML = (parseAbilities(pokemon.abilities));
  document.getElementById("result-type").innerHTML = (parseTypes(pokemon.types));
}

localStorage.setItem('pokemon', JSON.stringify(pokemon)); 

fetchPokemon();
