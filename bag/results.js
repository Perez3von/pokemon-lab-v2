
import { renderPokemonTable } from './utils.js';
import { getBag } from '../utils/bagUtils.js';


const table = document.getElementById('myTable');
const btn = document.getElementById('reset-bag');

renderPokemonTable(table, getBag());

btn.addEventListener('click', ()=>{

    localStorage.clear();
    table.innerHTML = '';
});


