import React, { useState } from 'react'
import './nav.css';
import { HiHome } from 'react-icons/hi';
import { FaUserAstronaut } from 'react-icons/fa';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      {/* eslint-disable-next-line */}
      <a href="#" onClick={ () => setActiveNav('#')} className={ activeNav === '#' ? 'active' : ''}><HiHome/></a>
      <a href="#about" onClick={ () => setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : ''}><FaUserAstronaut/></a>
      <a href="#experience" onClick={ () => setActiveNav('#experiences')} className={ activeNav === '#experiences' ? 'active' : ''}><BiBook/></a>
      <a href="#services" onClick={ () => setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#contact" onClick={ () => setActiveNav('#contact')} className={ activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav