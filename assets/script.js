var pokemon = ["bulbasaur", "ivysaur", "venusaur", "charmander", "charmeleon", "charizard", "squirtle", "wartortle", "blastoise"];
var pokemonName;
var num;
var pokemonSearch = "squirtle"

console.log(pokemon.length);

for(var i=0; i < pokemon.length; i++) {
  console.log("Great to see you, " + pokemon[i] + "!")
  if (pokemon[i] === pokemonSearch){
    var num = i+1
    fetchPokemon();
  };
}
async function fetchPokemon(){
  // num++;
  var api = "https://pokeapi.co/api/v2/pokemon/" + num.toString();
  var response = await fetch(api);
  var data = await response.json();
  pokemonName = data.name;
  console.log(pokemonName);
  console.log(data)
}
