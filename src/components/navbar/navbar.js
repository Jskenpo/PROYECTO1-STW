import React from "react";
import jordan from "../../imas/jordan.png";
import converse from "../../imas/Converse-logo.png";
import "./navbar.css";

function NavBar() {
    return (
        <div id = 'navDiv'>
            <ul class="nav justify-content-end">
                <li class='nav-item'>
                    <img id='jordan' src={jordan}></img>
                </li>
                <li class='nav-item'>
                    <img id='converse' src={converse}></img>
                </li>
                <li class="nav-item">
                    <a id='textoA' class="nav-link active" aria-current="page" href="#">Buscar tienda</a>
                </li>
                <li id='barrita' class='nav-item'>
                    <p>|</p>
                </li>
                <li class="nav-item">
                    <a id='textoA'class="nav-link" href="#">Ayuda</a>
                </li>
                <li id='barrita' class='nav-item'>
                    <p>|</p>
                </li>
                <li class="nav-item">
                    <a  id='textoA' class="nav-link" href="#">Únete a nosotros</a>
                </li>
                <li id='barrita' class='nav-item'>
                    <p>|</p>
                </li>
                <li class="nav-item">
                    <a id='textoA' class="nav-link active">Iniciar sesión</a>
                </li>
            </ul>

        </div>
    );
}

export default NavBar;