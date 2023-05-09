import React from "react";
import nikeLogo from "../../imas/nike.jpg";
import search from "../../imas/search.png";
import like from "../../imas/heart.png";
import bag from "../../imas/bag.png";


import "./buscador.scss";

function Buscador() {
    return (
        <nav id='navbarUno' class="navbar sticky-top navbar-expand-lg ">
            <div class="container-fluid">
                <img id='logo' src={nikeLogo} class='navbar-brand'></img>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" >
                    <ul class="navbar-nav mb-2 mb-lg-0 " id='contenidos'>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Novedades y Destacados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" >Hombre</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link active" aria-current="page" href="#" >Mujer</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Niño/a</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Ofertas</a>
                        </li>
                    </ul>

                    <form id='Form' class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                        <button class="btn btn-outline-secondary" type="submit"><img id='searchlogo' src={search}></img></button>
                    </form>

                    <button id='heart' type="button" class="btn btn-light"><img id='logosCompra'src={like}/></button>
                    <button id='bag' type="button" class="btn btn-light"><img id='logosCompra'src={bag}/></button>
                </div>
            </div>
        </nav>


    );
}

export default Buscador;