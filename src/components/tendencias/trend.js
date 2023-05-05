import React, { useRef, useState } from "react";
// Import Swiper React components
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

// import required modules
import { Scrollbar } from "swiper";
import './trend.css';

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




function Trend(){
    return(
        <div id='trend'>
            <div id='TituloTrend'><h3>Tendencias de la semana</h3></div>

            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                navigation={true}
                scrollbar={{ hide: true }}
                modules={[ Navigation, Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={n1}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n2}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n3}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n4}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n5}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n6}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n7}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n8}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n9}></img>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={n10}></img>
                </SwiperSlide>
            </Swiper>
            

        </div>
    )
}

export default Trend;