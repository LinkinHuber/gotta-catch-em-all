var pokemonName;
var pokemon;
var pokemonSearch = "";
var urlArtwork;

document.getElementById('search-btn2').addEventListener('click', function(event) {
  event.preventDefault();
  pokemonSearch = document.querySelector("input").value;
  fetchPokemon();
});

async function fetchPokemon(){
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch
  var response = await fetch(api);
  var data = await response.json();
  urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  pokemon = data;
  console.log(data);
  displayPokemon();

}
function displayPokemon(){
  document.getElementById("result-name").innerHTML = ("Name:" + " " + pokemon.name);
  document.getElementById("result-height").innerHTML = ("Height:" + " " + pokemon.height);
  document.getElementById("result-weight").innerHTML = ("Weight:" + " " + pokemon.weight);
  document.getElementById("result-abilities").innerHTML = ("Abilities:" + " " + pokemon.abilities[0].ability.name + ", " + pokemon.abilities[1].ability.name);
  document.getElementById("result-type").innerHTML = ("Type:" + " " + pokemon.types[0].type.name + ", " + pokemon.types[1].type.name);
  var pic =  document.getElementById("result-img1")
  pic.src = urlArtwork;
}
