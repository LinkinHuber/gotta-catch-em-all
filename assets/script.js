var pokemonName;
var pokemonSearch = "";
async function fetchPokemon(){
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch
  var response = await fetch(api);
  var data = await response.json();
  var urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  var pokemon = data;
  console.log(pokemon.name);
  console.log(pokemon.weight);
  console.log(pokemon.height);
  console.log(urlArtwork);
  console.log(data);
  var pic =  document.getElementById("result-img")
  pic.src = urlArtwork;
}


var queryString = "./secondpageindex.html";


document.getElementById("search-btn").addEventListener("click", function(event) {
  event.preventDefault()
  pokemonSearch = document.querySelector("input").value
  fetchPokemon()
  location.assign(queryString);
});

localStorage.setItem('pokemonSearch', JSON.stringify(pokemonSearch)); 