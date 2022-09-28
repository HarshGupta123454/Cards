import React from 'react'
import { Card } from "./Card"
import Members from "./member.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css";
import './style.css'


export const Cardsection = () => {
  return (
    <>
      <div className="flex flex-col gap-5 py-10">
        <h2 className="text-4xl text-center">Meet our <span className="text-[#00d1ff]">CEO</span></h2>
      </div>
      <Swiper className='sw'
        spaceBetween={30}
        slidesPerView={3}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{ clickable: true }}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}

        breakpoints={{
          340: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          }, 
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}

      >

        <SwiperSlide className="carr">
          <Card
            name={"Rahul Singh"}
            desc="Lorem ipsum dolor sit amet, lectus magna fringilla urna, porttitor rhoncus dolor"
            role="Work Manager"
            img={Members}
            social={{ fb: "#", insta: "#", tw: "#" }}
          /></SwiperSlide>
        <SwiperSlide>
          <Card
            name={"Rahul Singh"}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor"
            role="Work Manager"
            img={Members}
            social={{ fb: "#", insta: "#", tw: "#" }}
          /></SwiperSlide>
        <SwiperSlide className="carr">
          <Card
            name={"Rahul Singh"}
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor"
            role="Work Manager"
            img={Members}
            social={{ fb: "#", insta: "#", tw: "#" }}
          /></SwiperSlide>
        <SwiperSlide className="carr">     <Card
          name={"Rahul Singh"}
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor"
          role="Work Manager"
          img={Members}
          social={{ fb: "#", insta: "#", tw: "#" }}
        /></SwiperSlide>

      </Swiper>
    </>


  )
}
