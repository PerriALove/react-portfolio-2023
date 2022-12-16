import React from "react";
import "./portfolio.css";
// ==== ASSETS TEMPORARILY REMOVED FOR UNDER CONSTRUCTION TIME ==== 
// import IMG1 from "../../assets/proposal.jpeg";
// import IMG2 from "../../assets/proposal_rocks.jpeg";
// import IMG3 from "../../assets/proposal_ring.jpeg";
// import IMG4 from "../../assets/proposal_laugh.jpeg";
// import IMG5 from "../../assets/proposal_hug.png";
// import IMG6 from "../../assets/proposal_boardwalk_ring.png";
// import Swiper core and required modules
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import IMG1 from "../../assets/under_construction.jpeg"

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "Under Construction",
    github: "Under Construction",
    demo: "Under Construction",
  },
  {
    id: 2,
    image: IMG1,
    title: "Under Construction",
    github: "Under Construction",
    demo: "Under Construction",
  },
  // {
  //   id: 3,
  //   image: IMG3,
  //   title: "Portfolio project # 3",
  //   github: "Github link for Portfolio Project # 3",
  //   demo: "Demo link for Portfolio Project # 3",
  // },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Portfolio project # 4",
  //   github: "Github link for Portfolio Project # 4",
  //   demo: "Demo link for Portfolio Project # 4",
  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Portfolio project # 5",
  //   github: "Github link for Portfolio Project # 5",
  //   demo: "Demo link for Portfolio Project # 5",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Portfolio project # 6",
  //   github: "Github link for Portfolio Project # 6",
  //   demo: "Demo link for Portfolio Project # 6",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
    
      <Swiper className="container portfolio__container"
       modules={[ Pagination]}
       spaceBetween={50}
       slidesPerView={1}
       pagination={{ clickable: true, dynamicBullets: true }}
       breakpoints={{ 
        600: { slidesPerView: 1, pagination:{clickable: true, dynamicBullets: true}},
        1024: { slidesPerView: 2, pagination:{clickable: true, dynamicBullets: true}}
       }}
      >

        {portfolioData.map(({ id, image, title, github, demo }) => {
          return (
            <SwiperSlide key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Portfolio;
