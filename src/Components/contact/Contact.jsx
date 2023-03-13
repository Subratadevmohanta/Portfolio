import React from 'react'
import './contact.css'
import { SiGmail } from 'react-icons/si'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kth3t4o', 'template_1k90yef', form.current, 'wlV6vCEXJzw6RqqMG')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiGmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>shuvomohanta1234@gmail.com</h5>
            <a href="mailto:shuvomohanta1234@gmail.com" target="_blank">Sent a Email</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Subrata Dev Mohanta</h5>
            <a href="https://m.me/subratadevmohanta" target="_blank">Sent a Message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon' />
            <h4>What's App</h4>
            <h5>+8801796001589</h5>
            <a href="https://wa.link/301r0l" target="_blank">Sent a Message</a>
          </article>
        </div>
        {/* End of contact option */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Sent Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact