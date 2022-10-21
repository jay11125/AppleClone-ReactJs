import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./TvPlusCarousel.scss";
import { tvPlusData } from "./TvPlusData";
import { Autoplay } from "swiper";

function TvPlusCarousel() {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 5000,
      }}
      centeredSlides
      slideToClickedSlide
      draggable
      slidesPerView={1.5}
      spaceBetween={20}
      modules={[Autoplay]}
    >
      {tvPlusData.map(({ imgName, streamUrl, description, genre }) => (
        <SwiperSlide key={imgName}>
          {({ isActive, isNext, isPrev }) => (
            <div className="slide-image-container">
              <img
                alt={imgName}
                src={require(`../../assets/${imgName}.jpg`)}
                style={{
                  opacity: `${isActive ? 1 : 0.4}`,
                  cursor: `${isNext || isPrev ? "pointer" : ""}`,
                }}
              />
              {isActive && (
                <div className="slide-links">
                  <a href={streamUrl} className="stream-now">
                    Stream now <i className="fa fa-circle-play"></i>
                  </a>
                  <div className="summary">
                    <span className="genre">{genre} &#x2022; </span>
                    <span className="description">{description}</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TvPlusCarousel;
