import React from "react";
import { useSwiper } from "swiper/react";

function botonesSwiper() {
    const swiper = useSwiper();


    return(
        <div className='swiper-nav-btns'>
            <button onClick={() => swiper.slidePrev()}>Prev</button>
            <button onClick={() => swiper.slideNext()}>Prev</button>
        </div>

    )
}

export default botonesSwiper;