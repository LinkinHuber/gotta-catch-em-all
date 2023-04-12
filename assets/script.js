fetchPokemon();

async function fetchPokemon(){
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  const data = await response.json()
  console.log(data)
}

selectPokemon ();




