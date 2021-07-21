import { searchPokeDex } from './bagUtils.js';

export function randomNum(arr){

    let data_size = arr.length - 1;

    return Math.floor(Math.random() * data_size) + 1;
}

export function getPokemon(arr){

    let array_of_obj_pokemon = [];
    let num1 = randomNum(arr);
    let num2 = randomNum(arr);
    let num3 = randomNum(arr);

    while (num1 === num2 || num1 === num3 || num2 === num3){

        num2 = randomNum(arr);
        num3 = randomNum(arr);
    }

    array_of_obj_pokemon.push(searchPokeDex(arr, num1));
    array_of_obj_pokemon.push(searchPokeDex(arr, num2));
    array_of_obj_pokemon.push(searchPokeDex(arr, num3));    
    return array_of_obj_pokemon; 
}

export function renderPokemonToElements(ele_A, ele_B, ele_c, arr_obj_poke){

    let pokemon_image_one = document.createElement('img');
    let pokemon_image_two = document.createElement('img');
    let pokemon_image_three = document.createElement('img');

    let pokemon_name_one = document.createElement('span');
    let pokemon_name_two = document.createElement('span');
    let pokemon_name_three = document.createElement('span');
    
    let pokemon_input_one = document.createElement('input');
    let pokemon_input_two = document.createElement('input');
    let pokemon_input_three = document.createElement('input');


    pokemon_input_one.setAttribute('type', 'radio');
    pokemon_input_one.setAttribute('name', 'pokemon');
    pokemon_input_one.setAttribute('value', arr_obj_poke[0]['species_id']);

    pokemon_input_two.setAttribute('type', 'radio');
    pokemon_input_two.setAttribute('name', 'pokemon');
    pokemon_input_two.setAttribute('value', arr_obj_poke[1]['species_id']);

    pokemon_input_three.setAttribute('type', 'radio');
    pokemon_input_three.setAttribute('name', 'pokemon');
    pokemon_input_three.setAttribute('value', arr_obj_poke[2]['species_id']);


    pokemon_image_one.src = arr_obj_poke[0]['url_image'];
    pokemon_image_one.style.height = '150px';
    pokemon_image_one.style.width = '150px';

    pokemon_image_two.src = arr_obj_poke[1]['url_image'];
    pokemon_image_two.style.height = '150px';
    pokemon_image_two.style.width = '150px';

    pokemon_image_three.src = arr_obj_poke[2]['url_image'];
    pokemon_image_three.style.height = '150px';
    pokemon_image_three.style.width = '150px';

    pokemon_name_one.textContent = arr_obj_poke[0]['pokemon'].toUpperCase();
    pokemon_name_two.textContent = arr_obj_poke[1]['pokemon'].toUpperCase();
    pokemon_name_three.textContent = arr_obj_poke[2]['pokemon'].toUpperCase();
    
    ele_A.appendChild(pokemon_input_one);
    ele_A.appendChild(pokemon_image_one);
    ele_A.appendChild(pokemon_name_one);
    
    ele_B.appendChild(pokemon_input_two);
    ele_B.appendChild(pokemon_image_two);
    ele_B.appendChild(pokemon_name_two);

    ele_c.appendChild(pokemon_input_three);
    ele_c.appendChild(pokemon_image_three);
    ele_c.appendChild(pokemon_name_three);
}

export function renderPokemonToElement(ele, poke_obj){
    
    let pokemon_image = document.createElement('img');
    let pokemon_name = document.createElement('span');
    let obj = poke_obj;

    pokemon_image.src = obj['url_image'];
    pokemon_image.style.height = '80px';
    pokemon_image.style.width = '80px';
    pokemon_name.textContent = obj['pokemon'].toUpperCase();

    ele.appendChild(pokemon_image);
    ele.appendChild(pokemon_name);
    ele.classList.add('contains-item');
}
