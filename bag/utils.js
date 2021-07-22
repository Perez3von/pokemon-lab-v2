import { getSeen } from '../utils/historyUtils.js';

export function renderPokemonTable(ele, arrObj){


    for (let i = 0; i < arrObj.length; i++){
        let seenArr = getSeen();
        let seenn;
        let img = document.createElement('img');
        let pokemon_name = document.createElement('span');
        let caught_seen = document.createElement('span');
    
        img.src = arrObj[i].image;
        img.style.height = '80px';
        img.style.width = '80px';
        
        pokemon_name.textContent = arrObj[i]['pokemon'].toUpperCase();
        

        for (let j = 0; j < seenArr.length; j++){
            if (arrObj[i].id === seenArr[j]['species_id']){
                seenn = seenArr[j].seen;
            }
        }
        caught_seen.textContent = ` Caught: ${arrObj[i]['caught']} and Seen: ${seenn}`;
    
        ele.appendChild(img);
        ele.appendChild(pokemon_name);
        ele.appendChild(caught_seen);
    
    }
    
}
