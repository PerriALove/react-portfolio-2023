import React from "react";
import "./about.css";
import ME from "../../assets/poppa_stx.jpeg";
import { FaAward } from 'react-icons/fa';
import { HiOutlineUsers } from 'react-icons/hi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About PerriLove" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>4+ Years</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon"/>
              <h5>Clients</h5>
              <small>20+ worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>50+ completed projects</small>
            </article>
          </div>
          <p>Hey! I'm Perri. I'm currently a software engineer in the cloud space and a mom to a future engineer
            (fingers crossed). I'm a US Navy and US Army veteran with over 7 years of honorable service
            as an intelligence analyst. I've travelled all over the world, from as far away as 
            Misawa, Japan, to as close as San Diego, CA. I'm a big foodie, a fan of random facts,
            and a tattoo fanatic! Stick around to learn more about me!
          </p>

          {/* <p>Hey, I'm Perri. I'm a US Navy and Army veteran with over 8 years of service as an intelligence analyst and people manager.
            I'm currently a fullstack engineer with over 4 years experience in multiple sectors, including but not
            limited to transportation, education, healthcare, government (DoD), and logistics. I've worked with Java 
            and Node for backend languages and frameworks, and Javascript/Typescript with React and Angular for frontend.
            I also have over 6 months experience in low-code/no-code solutions using Microsoft Power Platform, AI and RPA,
            business process automation, and security modeling. I hold current certifications for Microsoft Power Platform Fundamentals,
            Microsoft Azure Fundamentals, Microsoft Azure Administrator, and hold an active Secret security clearance
            (with clearance for TS/SCI pending further investigation).
          </p> */}
          <a href="#contact" className="btn btn-primary">Let's talk</a>

        </div>
      </div>
    </section>
  );
};

export default About;
