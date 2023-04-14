var pokemonName;
var pokemonSearch = "";

document.getElementById('search-btn2').addEventListener('click', function(event) {
  event.preventDefault();
  pokemonSearch = document.querySelector("input").value;
  fetchPokemon();
});
  
async function fetchPokemon(){
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch
  var response = await fetch(api);
  var data = await response.json();
  var urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  var pokemonName = data.name;
  var pokemonWeight = data.weight;
  var pokemonHeight = data.height;
  var pokemonAbilities0 = data.abilities[0].ability.name;
  var pokemonAbilities1 = data.abilities[1].ability.name;
 
    
  console.log(pokemonName);
  console.log(pokemonWeight);
  console.log(pokemonHeight);
  console.log(urlArtwork);
  console.log(pokemonAbilities0);
  console.log(pokemonAbilities1);
  console.log(data);
}
/*
function displayPokemon(data) {
  var pokemonAbilities = data.abilities;
}

displayPokemon();

*/