
// import Swiper from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// const swiper = new Swiper(...);

function Something ({index}) {
    return <div className="w-40 h-96 bdr">{index}</div>
}

export default function Slider() {
  return (
    <div>Slider
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      modules={[Navigation,Pagination,Scrollbar]}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        {" "}
        <Something index={1}/>{" "}  
        </SwiperSlide>
        <SwiperSlide>
        {" "}
        <Something index={2}/>{" "}
        </SwiperSlide>
      <SwiperSlide>{" "}
        <Something index={3}/>{" "}
        </SwiperSlide>
      <SwiperSlide>{" "}
        <Something index={4}/>{" "}
        </SwiperSlide>
      <SwiperSlide>{" "}
        <Something index={5}/>{" "}
        </SwiperSlide>

    </Swiper>

    </div>
  )
}
