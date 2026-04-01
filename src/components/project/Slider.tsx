import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.css';
import { Pagination, Navigation } from 'swiper/modules';
import type { Project } from '../../types';

interface SliderProps {
  project: Project;
}

export default function Slider({ project }: SliderProps) {
  return (
    <>
      <Swiper
        pagination={{ type: 'fraction' }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {project.img.map((item, key) => (
          <SwiperSlide key={key}>
            <img src={item} alt="Project img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
