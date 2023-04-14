var pokemonName;
var pokemon;
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
  var pokemon = data;
  // console.log(pokemon.name);
  // console.log(pokemon.weight);
  // console.log(pokemon.height);
  // console.log(urlArtwork);
  // console.log(data);
  var pokemonAbilities0 = data.abilities[0].ability.name;
  // var pokemonAbilities1 = data.abilities[1].ability.name;
  
  var pokemonStats = {
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    abilities: [data.abilities[0].ability.name, data.abilities[1].ability.name]
  };
  
  // console.log(urlArtwork);
  console.log(pokemonAbilities0);
  // console.log(pokemonAbilities1);
  console.log(pokemonStats);
  document.getElementById("result-name").innerHTML = ("Name:" + " " + pokemon.name);
  document.getElementById("result-height").innerHTML = ("Height:" + " " + pokemon.height);
  document.getElementById("result-weight").innerHTML = ("Weight:" + " " + pokemon.weight);
  document.getElementById("result-id").innerHTML = ("Id:" + " " + pokemon.id);

  
  var pic =  document.getElementById("result-img1")
  pic.src = urlArtwork;
}
/*
function displayPokemon(data) {
  var pokemonAbilities = data.abilities;
}

displayPokemon();

*/