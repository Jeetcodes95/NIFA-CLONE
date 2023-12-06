import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const HomeSwiper = () => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://www.nifafinearts.com/banner-images/1550551577home-banner1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.nifafinearts.com/banner-images/1273170038home-banner2.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.nifafinearts.com/banner-images/1922909411home-banner3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.nifafinearts.com/banner-images/1858311846home-banner4.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.nifafinearts.com/banner-images/1952342548home-banner5.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="Container mx-36 my-3 h-14 flex relative justify-center">
        <div className="font-sans text-lg font-bold">Nifa&nbsp;Updates:: </div>
        <div className="max-md:absolute max-md:w-80 top-8 " id="marqueeq">
          <marquee
            behavior="scroll"
            direction="left"
            scrollamount="3"
            scrolldelay="1"
            onmouseover="this.stop()"
            onmouseout="this.start()"
          >
            <p>
              <strong className="font-['spartan']  font-semibold text-[#b11e6f] ">
                All NIFA courses are now available worldwide through our Live
                and Interactive Online Classes. Please&nbsp;download the NIFA
                app from our online classes page to register for a complimentary
                trial class.
              </strong>
            </p>
          </marquee>
        </div>
      </div>
    </>
  );
}

export default HomeSwiper