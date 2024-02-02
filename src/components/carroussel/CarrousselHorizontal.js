import CardCategoryFood from "../../components/card/CardCategoryFood";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CarrousselHorizontal() {

    const slides = ['red', 'black', 'blue', 'yellow', 'orange', 'green', 'purple', 'pink', 'gray'];
  return (
    <div className="  flex w-full h-1/4 justify-center ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        slidesPerView={8.5}
        spaceBetween={60}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <CardCategoryFood color={slide} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
