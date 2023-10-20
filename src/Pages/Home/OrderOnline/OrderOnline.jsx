import React from 'react'
import HeadingTitle from '../../../Components/HeadingTitle/HeadingTitle';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/images/home/slide1.jpg'
import slide2 from '../../../assets/images/home/slide2.jpg'
import slide3 from '../../../assets/images/home/slide3.jpg'
import slide4 from '../../../assets/images/home/slide4.jpg'
import slide5 from '../../../assets/images/home/slide5.jpg'
export default function OrderOnline() {
  return (
    <div className='my-10'>
    <HeadingTitle heading='Order Online' subHeading='from 11.00 am to 10.00 pm'></HeadingTitle>
    <div className='mt-16'>
    <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" srcset="" />
          <h2 className='text-3xl uppercase text-white relative bottom-16  '>Salads</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" srcset="" />
          <h2 className='text-3xl uppercase text-white relative bottom-16  '>pizza</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" srcset="" />
          <h2 className='text-3xl uppercase text-white relative bottom-16  '>Soup</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" srcset="" />
          <h2 className='text-3xl uppercase text-white relative bottom-16  '>Desert</h2>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" srcset="" />
          <h2 className='text-3xl uppercase text-white relative bottom-16  '>Salads</h2>
        </SwiperSlide>
        
      </Swiper>

    </div>
    </div>
  )
}
