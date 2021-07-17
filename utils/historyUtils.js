export const LAST = 'Last Caught';
export const ALL_HISTORY = 'History';
export const TRACKER = 'Plays';
export const CHARACTER = 'Character';


export function getLastCaught(){

    let last_caught = localStorage.getItem(LAST) || '[]';
    const data = JSON.parse(last_caught);
    return data;
}
export function getTracker(){

    let plays = localStorage.getItem(TRACKER) || '[]';
    const data = JSON.parse(plays);
    return data;
}
export function getHistory(){

    let history = localStorage.getItem(ALL_HISTORY) || '[]';
    const data = JSON.parse(history);
    return data;
}

export function setLastCaught(a){
 
    localStorage.setItem(LAST, JSON.stringify(a));
}

export function setTracker(){

    let plays = getTracker();
    let start = 1;
    if (plays === undefined || plays.length === 0){
        plays.push[start];
    }
    else {
        start = plays[0] + 1;
    }
    localStorage.setItem(TRACKER, JSON.stringify([start]));
}

export function searchHistory(history, id){


    for (let i = 0; i < history.length; i++){

        if (history[i].id === id){
            return history[i];
        }
    }

}

export function addToHistory(arr){
    let past = getHistory();
    let history = [];
    let current = [];
    
    for (let i of arr){
        current.push(i);
    }


    if (past.length === 0){

        history.push(current);
        localStorage.setItem(ALL_HISTORY, JSON.stringify(history));

    }
    else {
        
        past.push(current);
        localStorage.setItem(ALL_HISTORY, JSON.stringify(past));
    }
    
}


export function getCharacter(){

    let character = localStorage.getItem(CHARACTER) || ' ';
    
    return character;

}

export function setCharacter(name){

    localStorage.setItem(CHARACTER, name);
}







