var pokemonName;
var pokemonSearch = "";

document.getElementById('search-btn1').addEventListener('click', function(event) {
  event.preventDefault()
  pokemonSearch = document.querySelector("input").value
  fetchPokemon()
});
  
async function fetchPokemon(){
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch
  var response = await fetch(api);
  var data = await response.json();
  var urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  var pokemonName = data.name;
  var pokemonWeight = data.weight;
  var pokemonHeight = data.height;
  console.log(pokemonName);
  console.log(pokemonWeight);
  console.log(pokemonHeight);
  console.log(urlArtwork);
  console.log(data)
}
