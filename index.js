let pokemon = document.getElementById("content");
let getPhotos = document.querySelector(".button")

const fetchPokemon = async () => {
    for (let i=1; i<=150; i++) {
        await getPokemon(i)
    }
    getPhotos.disabled=true;
}

async function getPokemon(id) {
    const baseURL = `https://pokeapi.co/api/v2/pokemon/${id}`
    const fetchAPI = await fetch(baseURL)
    const response = await fetchAPI.json()
    console.log(response)
    displayPokemon(response);
}

getPhotos.addEventListener("click", fetchPokemon);


function displayPokemon(response) {
    const pokemonName = document.createElement('p')
    const name = response.name
    pokemonName.innerText = name;
    pokemon.appendChild(pokemonName)

    const pokemonFrontImage = document.createElement('img');
    pokemonFrontImage.src = response.sprites?.front_default;
    pokemonName.appendChild(pokemonFrontImage);

    const pokemonBackImage = document.createElement('img');
    pokemonBackImage.src = response.sprites?.back_default;
    pokemonName.appendChild(pokemonBackImage);
}
// fetchPokemon();




