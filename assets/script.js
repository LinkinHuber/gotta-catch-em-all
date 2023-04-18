var pokemonName;
var pokemonSearch = "";

function aud_play_pause() {
  var myAudio = document.getElementById("myAudio");
  console.log(myAudio)
    myAudio.play();
}
async function fetchPokemon() {
  var api = "https://pokeapi.co/api/v2/pokemon/" + pokemonSearch;
  var response = await fetch(api);
  var data = await response.json();
  var urlArtwork = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/" + data.id + ".png";
  var pokemon = data  
  console.log(pokemon.name);
  console.log(pokemon.weight);
  console.log(pokemon.height);
  console.log(urlArtwork);
  console.log(data);
  var pic =  document.getElementById("result-img");
  pic.src = urlArtwork;
}

var queryString = "./secondpageindex.html"; 

var input = document.getElementById("search-bar");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("search-btn").click();
  }
});

document.getElementById("search-btn").addEventListener("click", function(event) {
  event.preventDefault();
  aud_play_pause();
  pokemonSearch = document.querySelector("input").value;
  // Validation and formatting (how are we interacting with weird cases, i.e., Mr. Mime)
  localStorage.setItem('pokemonSearch', JSON.stringify(pokemonSearch));
  var queryString = `./secondpageindex.html?pokemon=${pokemonSearch}`; 
  console.log(queryString)
  setTimeout(()=> {
    location.assign(queryString.toLowerCase())
  }, 1100)

  // location.assign(queryString);

  // fetchPokemon(pokemonSearch).then(pokemon => {
  //   console.log(pokemon)
  // })
});
