import React from "react";
import "./footer.css";
import { BsDiscord, BsFacebook, BsInstagram } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer>
      {/* eslint-disable-next-line */}
      <a href="#" className="footer__logo">
        PERRI LOVE
      </a>

      <ul className="permalinks">
        {/* eslint-disable-next-line */}
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/perri.alexis/"><BsFacebook/></a>
        <a href="https://www.instagram.com/perrialove/"><BsInstagram/></a>
        <a href="https://discord.com/channels/perri2860"><BsDiscord/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Perri Love. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
