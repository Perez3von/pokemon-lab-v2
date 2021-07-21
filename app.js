import { addToBag } from './utils/bagUtils.js';
import { renderPokemonToElements, getPokemon, renderPokemonToElement } from './utils/appUtils.js';
import { pokemon_data } from './pokemon data/pokemondata.js';
import { addSeen, addToHistory, getCharacter, getHistory, getLastCaught, getTracker, setCharacter, setLastCaught, setTracker } from './utils/historyUtils.js';


const btn = document.getElementById('catch');
const dom_pokemon_one = document.getElementById('pokemon-one');
const dom_pokemon_two = document.getElementById('pokemon-two');
const dom_pokemon_three = document.getElementById('pokemon-three');
const last_caught_pokemon = document.getElementById('last-caught-pokemon');
const last_seen_one = document.getElementById('last-seen-pokemon-one');
const last_seen_two = document.getElementById('last-seen-pokemon-two');
const last_seen_three = document.getElementById('last-seen-pokemon-three');
const character_select = document.getElementById('character-select');
const my_character = document.getElementById('my-character');
const pokemon_content = document.getElementById('pokemon-content');
const catch_section = document.getElementById('catch-section');

let plays = getTracker();
let contains_character = false;
let character = getCharacter();
const img = document.createElement('img');
img.style.height = '200px';
img.style.width = '150px';

if (character !== ' '){

    img.src = `./assets/characters/${character}`;
    my_character.appendChild(img);
    character_select.disabled = true;
    contains_character = true;
}
character_select.addEventListener('change', ()=>{

    if (contains_character === false){

        img.src = `./assets/characters/${character_select.value}`;
        setCharacter(character_select.value);
        my_character.appendChild(img);
        character_select.disabled = true;
        contains_character = true;
    }
});

if (plays[0] === 10){

    pokemon_content.textContent = `Game Over, You caught ${plays} pokemon. Go to your BAG and check out your pokemon or reset game`;
    pokemon_content.style.fontSize = '25px';
    catch_section.style.display = 'none';
}
else {

    let pokemon_set = getPokemon(pokemon_data);
    for (let i of pokemon_set){

        addSeen(i['species_id']);
    }
    let user_last_catch = getLastCaught();
    renderPokemonToElements(dom_pokemon_one, dom_pokemon_two, dom_pokemon_three, pokemon_set);

    if (user_last_catch.length !== 0){
  
        renderPokemonToElement(last_caught_pokemon, user_last_catch);
        let history = getHistory();
        renderPokemonToElement(last_seen_one, history[history.length - 1][0]);
        renderPokemonToElement(last_seen_two, history[history.length - 1][1]);
        renderPokemonToElement(last_seen_three, history[history.length - 1][2]); 
    }
    btn.addEventListener('click', ()=>{

        const displayed_pokemon = document.querySelector('input[type=radio]:checked');
        const user_selected = Number(displayed_pokemon.value);
        let index;

        addToHistory(pokemon_set);
        setTracker();

        for (let i = 0; i < pokemon_set.length;i++){
            if (pokemon_set[i]['species_id'] === user_selected){
                index = i;
            }
        }
        setLastCaught(pokemon_set[index]);
        addToBag(user_selected);
        document.location.reload();
  
    });
  
}



