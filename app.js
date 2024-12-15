const URL = 'https://pokeapi.co/api/v2/pokemon';
const POKEMONS = [];
const POKEMON = {};
let points = 0;

const playAgain = async () => {
    POKEMONS.length = 0;
    for (let key in POKEMON) {
        if (POKEMON.hasOwnProperty(key)) {
            delete POKEMON[key];
        }
    }

    const message = document.getElementById('message');
    const pokemonInfoDiv = document.getElementById('pokemon');
    const btnGroup = document.querySelector('.btn-group');
    const playAgain = document.getElementById('playAgain');

    message.innerHTML = '';
    message.classList.remove('error');
    message.classList.remove('success');
    pokemonInfoDiv.innerHTML = '';
    btnGroup.innerHTML = '';
    playAgain.classList.add('btn-hide');

    await initGame();
}

const uptadePoints = () => {
    const pointsTxt = document.getElementById('points');
    if (points < 0) {
        points = 0;
    }
    pointsTxt.innerHTML = points;
}

const showMessage = (success = true) => {
    const message = document.getElementById('message');

    if (success) {
        message.innerHTML = 'Congratulations, you are correct 🎉';
        message.classList.add('success');
        points += 10;
    } else {
        message.innerHTML = 'Sorry, it\'s wrong 😭';
        message.classList.add('error');
        points -= 5;
    }

    uptadePoints();
}

const verifyPokemon = (id) => {
    if (id === POKEMON.id) {
        showMessage(true);
    } else {
        showMessage(false);
    }
    const img = document.querySelector('img');
    img.classList.remove('hide');
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.disabled = true;
    });

    const playAgain = document.getElementById('playAgain');
    playAgain.classList.remove('btn-hide');
    playAgain.classList.add('btn-play');
}

const showOptions = () => {
    const btnGroup = document.querySelector('.btn-group');
    let html = '';
    POKEMONS.forEach(pokemon => {
        html += `<button class="btn" onclick="verifyPokemon(${pokemon.id})">${pokemon.name}</button>`;
    });
    btnGroup.innerHTML = html;
}

const showPokemon = () => {
    const pokemonInfoDiv = document.getElementById('pokemon');
    let html = `<img class ="hide" src= ${"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/" + POKEMON.id + ".png"}>`;
    pokemonInfoDiv.innerHTML = html;

    showOptions();
}

const getRamdomPokemon = async () => {
    const randomPokemon = Math.floor(Math.random() * 850) + 1;
    const response = await fetch(`${URL}/${randomPokemon}`);
    const { id, name } = await response.json();
    return { id, name };
}

const getPokemons = async () => {
    for (let i = 0; i < 3; i++) {
        const pokemon = await getRamdomPokemon();
        POKEMONS.push(pokemon);
    }

    const randomIndexPokemon = Math.floor(Math.random() * POKEMONS.length);
    POKEMON.id = POKEMONS[randomIndexPokemon].id;
    POKEMON.name = POKEMONS[randomIndexPokemon].name;
}

const initGame = async () => {
    await getPokemons();
    showPokemon();
}

document.addEventListener('DOMContentLoaded', async () => {
    await initGame();
});