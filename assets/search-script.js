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

function parseTypes(types) {
  var response = "Type: " + types[0].type.name
  if (types.length > 1) {
    response += ", " + types[1].type.name
  }
  return response
}
function parseAbilities(abilities) {
  var response = "Abilities: " + abilities[0].ability.name
  if (abilities.length > 1) {
    response += ", " + abilities[1].ability.name
  }
  return response
}

function displayPokemon(){
  var pic =  document.getElementById("result-img1")
  pic.src = urlArtwork;
  document.getElementById("result-name").innerHTML = ("Name:" + " " + pokemon.name);
  document.getElementById("result-height").innerHTML = ("Height:" + " " + pokemon.height);
  document.getElementById("result-weight").innerHTML = ("Weight:" + " " + pokemon.weight);
  //document.getElementById("result-abilities").innerHTML = ("Abilities:" + " " + pokemon.abilities[0].ability.name + ", " + pokemon.abilities[1].ability.name);
  //if (pokemon.types[0].type.name && pokemon.types[0].type.name)
  // document.getElementById("result-type").innerHTML = ("Type:" + " " + pokemon.types[0].type.name + ", " + pokemon.types[1]?.type.name);
  document.getElementById("result-abilities").innerHTML = (parseAbilities(pokemon.abilities));
  document.getElementById("result-type").innerHTML = (parseTypes(pokemon.types));
}
localStorage.setItem('pokemon', JSON.stringify(pokemon)); 
