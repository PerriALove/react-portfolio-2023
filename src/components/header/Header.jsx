import React from 'react'
import './header.css';
import CTA from './CTA';
import ME from '../../assets/poet_crop-nobg.png'
import Socials from './Socials';
import Chatbot from './Chatbot';

const Header = () => {
  return (
    <header id="#home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Perri Love</h1>
        <h5 className="text-light">Software Engineer</h5>
        <h6>Power Platform, Java, React</h6>
        <CTA/>
        <Socials/>
        <Chatbot/>
        <div className="me">
          <img src={ME} alt="Perri Love Rutgers Library" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header