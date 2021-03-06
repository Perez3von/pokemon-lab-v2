
import { pokemon_data } from '../pokemon data/pokemondata.js';

export const BAG = 'Bag';

export function getBag(){

    let bag_data = localStorage.getItem(BAG) || '[]';
    const data = JSON.parse(bag_data);
    return data;

}

export function searchBag(bag, id){
    
    for (let i = 0; i < bag.length; i++){

        if (bag[i].id === id){
            
            return bag[i];
        }
    }
}

export function searchPokeDex(data, id){

    let pokedex = data;
    let my_id = id;
    for (let i = 0; i < pokedex.length; i++){

        if (pokedex[i].species_id === my_id){
            let pokemon = {
                'pokemon': pokedex[i]['pokemon'],
                'species_id':pokedex[i]['species_id'], 
                'url_image': pokedex[i]['url_image'],
                seen: 1
            };
           
            return pokemon;
        }
    }
}

export function addToBag(id){

    let bag = getBag();
    let pokemon = searchBag(bag, id);
    let poke_from_dex = searchPokeDex(pokemon_data, id);
    
    if (pokemon){
        
        pokemon.caught += 1;
    }
    else { 

        let newPokemon = {
            pokemon:poke_from_dex.pokemon, 
            id:id, 
            caught: 1, 
            image: poke_from_dex['url_image'], 
        };

        bag.push(newPokemon);
    }
    
    localStorage.setItem(BAG, JSON.stringify(bag)); 
}