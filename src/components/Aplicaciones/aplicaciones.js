import React from 'react';

import app1 from '../../imas/aplicaciones1.png';
import app2 from '../../imas/aplicaciones2.png';


import './aplicaciones.css';

function Aplicaciones() {

    return (
        <div id='aplicaciones'>
            <div id='tituloAplicaciones'>
                <h3>Descubre nuestras aplicaciones</h3>
            </div>
            <ul id='ListaApp'>
                <li>
                    <img class='imagenApp' src={app1}></img>
                    <div id='textoImagen-app'><h5>Registro de las sesiones,retos y guías de running por audio</h5></div>
                    <div id='buttonAplicaciones'><button type="button" class="btn btn-light" id='buttonApp'> Nike Run Club App</button></div>
                </li>
                <li>
                    <img class='imagenApp'src={app2}></img>
                    <div id='textoImagen-app'><h5>Cientos de entrenamientos , trabajos de respiración y mucho más</h5></div>
                    <div id='buttonAplicaciones'><button type="button" class="btn btn-light" id='buttonApp'> Nike Training Club App</button></div>
                </li>


            </ul>


        </div>
    )

}

export default Aplicaciones;