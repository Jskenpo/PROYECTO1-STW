import React from 'react';
import './deportes.scss';
import dp1 from '../../imas/deportes1.png';
import dp2 from '../../imas/deportes2.png';
import dp3 from '../../imas/deportes3.png';
import dp4 from '../../imas/deportes4.png';
import dp5 from '../../imas/deportes5.png';
import dp6 from '../../imas/deportes6.png';
import dp7 from '../../imas/deportes7.png';
import dp8 from '../../imas/deportes8.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';


function Deportes() {
    return(
        <div id='carrouselDeportes'>
            <div id='tituloDeportes'>
                <h3>Filtrar por deporte</h3>
            </div>

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
                    <img class='imagenDeporte'src={dp1}></img>
                    <div class='slide-text'><p>Skateboard</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp2}></img>
                    <div class='slide-text'><p>Fútbol</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp3}></img>
                    <div class='slide-text'><p>Danza</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp4}></img>
                    <div class='slide-text'><p>Running</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp5}></img>
                    <div class='slide-text'><p>Training</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp6}></img>
                    <div class='slide-text'><p>Tenis</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp7}></img>
                    <div class='slide-text'><p>Baloncesto</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenDeporte' src={dp8}></img>
                    <div class='slide-text'><p>Yoga</p></div>
                </SwiperSlide>

            </Swiper>

            <div id='LB1' class='barrita'></div>
            <div id='LB2' class='barrita'></div>


        </div>

    )
}

export default Deportes;