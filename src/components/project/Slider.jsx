import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useParams } from 'react-router-dom';
import { projects } from '../../helpers/projectsList';

export default function Slider() {
  const { id } = useParams();
  const project = projects[id];

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper">
        {project.img.map((item, key) => (
          <SwiperSlide>
            <img key={key} src={item} alt="Project img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
