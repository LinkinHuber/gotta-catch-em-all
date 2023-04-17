// var pokemonName;
// var pokemon;
// var urlArtwork;

// async function fetchPokemon(pokemonSearch){
//   var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch;
//   var response = await fetch(api);
//   var data = await response.json();
//   urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
//   pokemon = data;
//   console.log(data);
//   return pokemon
// }

document.getElementById("search-btn").addEventListener("click", function(event) {
  event.preventDefault();
  pokemonSearch = document.querySelector("input").value;
  // Validation and formatting (how are we interacting with weird cases, i.e., Mr. Mime)
  localStorage.setItem('pokemonSearch', JSON.stringify(pokemonSearch));
  var queryString = `./secondpageindex.html?pokemon=${pokemonSearch}`; 
  console.log(queryString)
  location.assign(queryString);

  // fetchPokemon(pokemonSearch).then(pokemon => {
  //   console.log(pokemon)
  // })
});
