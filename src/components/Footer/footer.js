import React from 'react';
import face from '../../imas/facebook.png';
import insta from '../../imas/instagram.png';
import twit from '../../imas/twitter.png';
import you from '../../imas/youtube.png';
import loc from '../../imas/location.jpg';

import './footer.scss';

function Footer() {

    return (

        <div id='footer'>

            <div id='contenedor'>
                <ul id='footer-megalist'>
                    <li>
                        <ul id='Titulos' class='ul-common'>
                            <li><p id='tituloFooter'>Tarjetas de regalo</p></li>
                            <li><p id='tituloFooter'>Buscar una tienda </p></li>
                            <li><p id='tituloFooter'>Nike Journal</p></li>
                            <li><p id='tituloFooter'>Hazte Member</p></li>
                            <li><p id='tituloFooter'>Descuento para estudiantes</p></li>
                            <li><p id='tituloFooter'>Comentarios</p></li>
                            <li><p id='tituloFooter'>Códigos promocionales</p></li>

                        </ul>
                    </li>
                    <li>
                        <ul id='Ayuda' class='ul-common2'>
                            <li><p id='tituloFooter'>Ayuda</p></li>
                            <li><p id='textoFooter'>Estado de pedidos</p></li>
                            <li><p id='textoFooter'>Envíos y entregas</p></li>
                            <li><p id='textoFooter'>Devoluciones</p></li>
                            <li><p id='textoFooter'>Opciones de pago</p></li>
                            <li><p id='textoFooter'>Contacto</p></li>
                            <li><p id='textoFooter'>Ayuda con los códigos promocionales de nike</p></li>
                        </ul>

                    </li>
                    <li>
                        <ul id='Nike' class='ul-common1'>
                            <li><p id='tituloFooter'>Acerca de Nike</p></li>
                            <li><p id='textoFooter'>Novedades</p></li>
                            <li><p id='textoFooter'>Trabajo con nosotros</p></li>
                            <li><p id='textoFooter'>Inversores</p></li>
                            <li><p id='textoFooter'>Sostenibilidad</p></li>
                        </ul>
                    </li>
                    <li>
                        <ul id='miembro' class='ul-common1'>
                            <li><p id='tituloFooter'>Únete a nosotros</p></li>
                            <li><p id='textoFooter'>Nike App</p></li>
                            <li><p id='textoFooter'>Nike Run Club App</p></li>
                            <li><p id='textoFooter'>Nike Training Club App</p></li>
                            <li><p id='textoFooter'>SNKRS</p></li>
                        </ul>
                    </li>
                    <li>
                        <ul id='Redes' class='ul-common1'>
                            <li><img class='redes' src={face}></img></li>
                            <li><img class='redes' src={insta}></img></li>
                            <li><img class='redes' src={twit}></img></li>
                            <li><img class='redes' src={you}></img></li>
                        </ul>

                    </li>
                </ul>
            </div>

            <div id='navFooter'>

                <ul class="nav justify-content-end">
                    <li class="nav-item">
                        <p id='textoFooter' class='navitem'>Guías</p>
                    </li>
                    <li class="nav-item">
                        <p id='textoFooter' class='navitem'>Términos de uso</p>
                    </li>
                    <li class="nav-item">
                        <p id='textoFooter' class='navitem'>Términos y condiciones de venta</p>
                    </li>
                    <li class="nav-item">
                        <p id='textoFooter' class='navitem'>Aviso legal</p>
                    </li>
                    <li class="nav-item">
                        <p id='textoFooter' class='navitem'>Política de privacidad</p>
                    </li>
                </ul>

            </div>

            <div id='DR'>
                <ul class="nav">
                    <li class="nav-item">
                        <img id='imgLocation' src={loc}></img>
                    </li>
                    <li class="nav-item">
                        <p id='textoFooterLoc' class='navitem'>Spain</p>
                    </li>
                    <li class="nav-item">
                        <p id='textoFooter' class='navitem'>© 2023 Nike, Inc. Todos los derechos reservados</p>
                    </li>
                    <li class="nav-item">
                        <p id='Cookies' class='navitem'>Configuracion de Cookies</p>
                    </li>

                </ul>
            </div>

        </div>

    )

}

export default Footer;