var pokemonName;
var pokemon;
var pokemonSearch = document.URL.split('=')[1];
var urlArtwork;
var RestrictSpaceSpecial
var initialSearch = document.URL.split('=')[1]
console.log(initialSearch)



document.getElementById("search-btn").addEventListener("click", function(event) {
  event.preventDefault();
  pokemonSearch = document.querySelector("input").value.toLowerCase();
  aud_play_pause()
  fetchPokemon();
});
function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  console.log(myAudio)
    myAudio.play();

}

async function fetchPokemon(){
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch;
  var response = await fetch(api);
  var data = await response.json();
  urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  pokemon = data;
  console.log(data);
  displayPokemon();

}

function RestrictSpaceSpecial(e) {
  var k;
  document.all ? k = e.keyCode : k = e.which;
  return ((k > 64 && k < 91) || (k > 96 && k < 123) || k == 8 || k == 32 || (k >= 48 && k <= 57));
  }

function parseTypes(types) {
  var response = "Type: " + types[0].type.name;
  if (types.length > 1) {
    response += ", " + types[1].type.name;
  }
  return response
}
function parseAbilities(abilities) {
  var response = "Abilities: " + abilities[0].ability.name;
  if (abilities.length > 1) {
    response += ", " + abilities[1].ability.name;
  }
  return response;
}

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

fetchPokemon()
