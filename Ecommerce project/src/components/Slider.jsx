import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Slider() {

  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);

    setProducts(response?.data?.products);
  };

  // useEffect ak bar call hoga (in this case)
  useEffect(() => {
    getProductData();
  }, []);



  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        modules={[Navigation, Pagination, Scrollbar, Autoplay, A11y]}
        autoplay={{ delay: 2000, pauseOnMouseEnter: true }}
        pagination={{ clickable: true }}
        navigation
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        
        {products?.map((item)=>(
        <SwiperSlide>
          <ProductCard 
          key={item.id}
          image={item.thumbnail}
          name={item.title}
          price={item.price}
          discountPercentage={item.discountPercentage}
          rating={item.rating}
        />
      </SwiperSlide>
    
    ))}

    </Swiper>
    </div>
  );
}