import React, { useRef, useState } from "react";
// Import Swiper React components
import {  Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import './trend.scss';


//images 
import n1 from '../../imas/nike1.png';
import n2 from '../../imas/nike2.png';
import n3 from '../../imas/nike3.png';
import n4 from '../../imas/nike4.png';
import n5 from '../../imas/nike5.png';
import n6 from '../../imas/nike6.png';
import n7 from '../../imas/nike7.png';
import n8 from '../../imas/nike8.png';
import n9 from '../../imas/nike9.png';
import n10 from '../../imas/nike10.png';




function Trend() {


    return (
        <div id='trend'>
            <div id='TituloTrend'><h3>Tendencias de la semana</h3></div>
            
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                navigation={true}
                scrollbar={{ draggable: true }}
                modules={[Navigation, Scrollbar, A11y]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <img class='imagenTrend' src={n1}></img>
                    <div class='slide-text-trend'><p> Nike Air Force 1'07</p> <p>119,99$</p></div>
                    <div class='undertext'>Zapatillas - Mujer</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n2}></img>
                    <div class='slide-text-trend'><p> Nike Air Force 1'07</p> <p>119,99$</p></div>
                    <div class='undertext'>Zapatillas - Hombre</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n3}></img>
                    <div class='slide-text-trend'><p> Nike Air Force 1 LE</p> <p>94,99$</p></div>
                    <div class='undertext'>Zapatillas - Niño/a</div>

                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n4}></img>
                    <div class='slide-text-trend'><p> Nike Air Force 1 Shadow</p> <p>129,99$</p></div>
                    <div class='undertext'>Zapatillas - Mujer</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n5}></img>
                    <div class='slide-text-trend'><p> Jordan Dri-FIT Sport</p> <p>49,99$</p></div>
                    <div class='undertext'>Diamond Pantalón corto - Hombre</div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class='div-imagen'>
                        <div>
                            <h3 class = 'members'>Consigue este producto con tu perfil gratuito de Nike Membership</h3>
                        </div>
                        <img class='desvanecer' src={n6}></img>
                    </div>
                    <div class='slide-text-trend'><p class='members'>Acceso para members</p> <p>119,99$</p></div>
                    <div class='textNorm'>Nike Dunk Low</div>
                    <div class='undertext'>Zapatillas - Hombre</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n7}></img>
                    <div class='slide-text-trend'><p> Nike Dunk Low</p> <p>109,99$</p></div>
                    <div class='undertext'>Zapatillas - Mujer</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n8}></img>
                    <div class='slide-text-trend'><p> Nike Air Force 1 Mid LE</p> <p>109,99$</p></div>
                    <div class='undertext'>Zapatillas - Niño/a</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n9}></img>
                    <div class='slide-text-trend'><p> Nike Air Force 1'07</p> <p>119,99$</p></div>
                    <div class='undertext'>Zapatillas - Mujer</div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenTrend' src={n10}></img>
                    <div class='slide-text-trend'><p> Nike Sportswear CLub</p> <p>34,99$</p></div>
                    <div class='undertext'>Pantalón corto - Hombre</div>
                </SwiperSlide>
            </Swiper>



        </div>
    )
}

export default Trend;