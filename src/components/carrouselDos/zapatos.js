import React, { useRef, useState } from "react";
import z1 from "../../imas/zapatos1.png";
import z2 from "../../imas/zapatos2.png";
import z3 from "../../imas/zapatos3.png";
import z4 from "../../imas/zapatos4.png";
import z5 from "../../imas/zapatos5.png";

import "./zapatos.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';



function Zapatos() {
    return (
        <div id='slider'>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                navigation={true}
                pagination={{
                  clickable: true,
                  type: "fraction"
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={z1}></img>
                    <div class='slide-text'><p>Sujetadores deportivos</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={z2}></img>
                    <div class='slide-text'><p>Zapatillas para moverte como quieras</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={z3}></img>
                    <div class='slide-text'><p>Ropa de danza</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={z4}></img>
                    <div class='slide-text'><p>Diseño europeo</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={z5}></img>
                    <div class='slide-text'><p>Fleence</p></div>
                </SwiperSlide>


            </Swiper>

            <div id='LB1' class='barrita'></div>
            <div id='LB2' class='barrita'></div>
            

        </div>

        

    );
}

export default Zapatos;
