import React from "react";
import "./testimonials.css";
import AVI1 from "../../assets/lib_beautiful.jpeg";
import AVI2 from "../../assets/arizona.jpeg";
import AVI3 from "../../assets/wooden_movie.jpeg";
import AVI4 from "../../assets/mount_charleston.jpeg";
// import Swiper core and required modules
import { Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonialData = [
  {
    avatar: AVI1,
    name: "John Smith",
    review: "Lorem ipsum dolor sit amet consectetur" +
    "adipisicing elit. In officiis magni debitis" +
    "accusamus expedita facilis exercitationem, dolores" +
    "temporibus possimus ipsam odio aperiam quas fugiat" +
    "maxime corrupti soluta nihil amet? Quo!",
  },
  {
    avatar: AVI2,
    name: "Gary Bishop",
    review:
      "Lorem ipsum dolor sit amet consectetur" +
      "adipisicing elit. In officiis magni debitis" +
      "accusamus expedita facilis exercitationem, dolores" +
      "temporibus possimus ipsam odio aperiam quas fugiat" +
      "maxime corrupti soluta nihil amet? Quo!",
  },
  {
    avatar: AVI3,
    name: "Michael Dyson",
    review: "Lorem ipsum dolor sit amet consectetur" +
      "adipisicing elit. In officiis magni debitis" +
      "accusamus expedita facilis exercitationem, dolores" +
      "temporibus possimus ipsam odio aperiam quas fugiat" +
      "maxime corrupti soluta nihil amet? Quo!",
  },
  {
    avatar: AVI4,
    name: "Anne Taylor",
    review:
      "Lorem ipsum dolor sit amet consectetur" +
      "adipisicing elit. In officiis magni debitis" +
      "accusamus expedita facilis exercitationem, dolores" +
      "temporibus possimus ipsam odio aperiam quas fugiat" +
      "maxime corrupti soluta nihil amet? Quo!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true, dynamicBullets: true }}
      >
        {testimonialData.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
