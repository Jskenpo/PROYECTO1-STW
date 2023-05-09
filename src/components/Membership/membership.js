import React, { useRef, useState } from "react";

import  M1 from "../../imas/member1.png";
import  M2 from "../../imas/member2.png";
import  M3 from "../../imas/member3.png";
import  M4 from "../../imas/member4.png";
import  M5 from "../../imas/member5.png";

import "./membership.scss";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';



function Member() {
    return (
        <div id='slider'>

            <div id='tituloMember'>
                <h3>Descubre Nike Membership</h3>
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
                    <img class='imagenMember' src={M1}></img>
                    <div class='slide-text'><p>Saca más partido a tu Membership</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenMember' src={M2}></img>
                    <div class='slide-text'><p>Accede a productos para Members</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenMember' src={M3}></img>
                    <div class='slide-text'><p>Consigue recompensas para Members</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenMember' src={M4}></img>
                    <div class='slide-text'><p>Disfruta el deporte y el bienestar</p></div>
                </SwiperSlide>
                <SwiperSlide>
                    <img class='imagenMember' src={M5}></img>
                    <div class='slide-text'><p>Únete a Member Experiences</p></div>
                </SwiperSlide>


            </Swiper>

            <div id='LB1' class='barrita'></div>
            <div id='LB2' class='barrita'></div>
            

        </div>

        

    );
}

export default Member;
