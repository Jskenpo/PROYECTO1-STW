import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Info.scss';

// import required modules
import { Autoplay } from "swiper";

function Info() {
    return (
        <div id='ejemplo'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <p id='sub'>Descuento para estudiantes</p>
                    <p id='text'>20% de descuento para estudiantes. <a hfre='#'>Descúbrelo</a></p>
                </SwiperSlide>
                <SwiperSlide>
                    <p id='sub'>Devoluciones y entregas gratuitas</p>
                    <p id='text'>Como member tienes envíos gratuitos y devoluciones gratuitas en un plazo de 30 días. <a hfre='#'>Obtén más información y únete</a></p>
                </SwiperSlide>
            </Swiper>

        </div >
    )

}


export default Info;

