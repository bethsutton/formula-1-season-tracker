import React from 'react';
// SWIPER
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/css/bundle';
// SWIPER STYLES
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
// IMAGES
import ferrari from './assets/Ferrari-slider.jpg';
import mercedes from './assets/Mercedes-slider.jpg';
import mclaren from './assets/McLaren-slider.jpg';
import redbull from './assets/Redbull-slider.jpg';

function Slider() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="swiper-container"
      >
        <SwiperSlide>
          <div
            style={{
              background: `url(${redbull}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="swiperSlideDiv"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url(${mercedes}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="swiperSlideDiv"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url(${mclaren}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="swiperSlideDiv"
          ></div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              background: `url(${ferrari}) center no-repeat`,
              backgroundSize: 'cover',
            }}
            className="swiperSlideDiv"
          ></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
