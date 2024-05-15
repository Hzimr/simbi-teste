'use client'
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import './styles.css'

// import required modules
import {
  Pagination,
  Navigation,
  HashNavigation,
  Keyboard,
} from 'swiper/modules'

export function Slide() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        keyboard={{
          enabled: true,
        }}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation, HashNavigation, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide data-hash="slide1">Slide 1</SwiperSlide>
        <SwiperSlide data-hash="slide2">Slide 2</SwiperSlide>
        <SwiperSlide data-hash="slide3">Slide 3</SwiperSlide>
        <SwiperSlide data-hash="slide4">Slide 4</SwiperSlide>
        <SwiperSlide data-hash="slide5">Slide 5</SwiperSlide>
      </Swiper>
    </>
  )
}
