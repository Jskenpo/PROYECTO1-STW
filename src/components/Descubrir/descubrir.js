import  React  from "react";
import './descubrir.scss';

import d1 from '../../imas/descubrir1.png';
import d2 from '../../imas/descubrir2.png';
import d3 from '../../imas/descubrir3.png';
import eye from '../../imas/eye.png';


function Descubrir() {
  return (
    <div id='lista'>
        <div id='tituloDescubrir'><h4>Más por descubrir</h4></div>
      <ul id='lista-descubrir'>
        <li>
            <img src={d1}></img>
            <div id='Li1B1'><button type="button" class="btn btn-light" id='buttonD'>Mujer</button></div>
            <div id='Li1B2'><button type="button" class="btn btn-light" id='buttonD'><img class='imagenDescubrir' src={eye}></img>Comprar el look</button></div>
            
            
        </li>
        <li>
            <img src={d2}></img>
            <div class='commonB1'><button type="button" class="btn btn-light" id='buttonD'>Hombre</button></div>
            <div class='commonB2'><button type="button" class="btn btn-light" id='buttonD'><img class='imagenDescubrir' src={eye}></img>Comprar el look</button></div>
        </li>
        <li>
            <img src={d3}></img>
            <div class='commonB1'><button type="button" class="btn btn-light" id='buttonD'>Adolescente</button></div>
            <div class='commonB2'><button type="button" class="btn btn-light" id='buttonD'><img class='imagenDescubrir' src={eye}></img>Comprar el look</button></div>
        </li>
      </ul>
    </div>
  );
}

export default Descubrir;