import React, { useRef } from 'react';
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from 'react-icons/bs';
import { RiMessengerLine } from 'react-icons/ri';
import emailjs from 'emailjs-com';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xtjloep', 'template_t1oigys', form.current, '8fFbDo-S_khntYmuV')
    
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          {/* EMAIL */}
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <a href="mailto:perri.love1188@gmail.com">Send a message</a>
          </article>

          {/* MESSENGER */}
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <a href="https://m.me/perri.alexis">Send a message</a>
          </article>

          {/* WHATSAPP */}
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <a href="https://api.whatsapp.com/send?phone=12146213262">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
