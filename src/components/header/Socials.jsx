import React from 'react';
import { BsLinkedin, BsFacebook, BsInstagram } from 'react-icons/bs';

const Socials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/perrialove" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://www.facebook.com/perri.alexis/" target="_blank" rel="noreferrer"><BsFacebook/></a>
        <a href="https://www.instagram.com/perrialove/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}

export default Socials