var pokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"];
var pokemonName;
var num = 0;
var pokemonSearch = "";

document.getElementById('search-btn1').addEventListener('click', function(event) {
  event.preventDefault()
  pokemonSearch = document.querySelector("input").value
  pokemonSearchArray();
});
  
function pokemonSearchArray(){
  for(var i=0; i < pokemon.length; i++) {
  num = i+1;
  if (pokemon[i] === pokemonSearch){
    fetchPokemon();
    };
  }
}
async function fetchPokemon(){
  var api = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
  var urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + num.toString() + ".png";
  var response = await fetch(api);
  var data = await response.json();
  pokemonName = data.name;
  pokemonWeight = data.weight;
  pokemonHeight = data.height;
  console.log(pokemonName);
  console.log(pokemonWeight);
  console.log(pokemonHeight);
  console.log(urlArtwork);
  console.log(data)
}
