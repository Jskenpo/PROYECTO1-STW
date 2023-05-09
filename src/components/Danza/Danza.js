import React from "react";
import './Danza.scss';
import danza from '../../imas/danza.png';

function Danza() {
    return(
        <div id='danza'>
            <div id='danza1'>

            <h1 id='titulo'>OWN THE FLOOR</h1>
            <p id='subtitulo'>En danza, tu forma de moverte expresa quien eres. Muestra tu talento</p>
            <button type="button" id='button' class="btn btn-dark">Comprar danza</button>
            <button type="button" id='button' class="btn btn-dark">Descubrir</button>
            <img id='imgDanza' src={danza}></img>

            </div>
        </div>


    )
}

export default Danza;