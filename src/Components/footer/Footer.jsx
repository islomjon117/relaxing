import React from 'react'
import '../footer/footer.css'

import footer_logo from '../../assets/navbar_logo/nav_logo.png'

import { PiInstagramLogoFill } from "react-icons/pi";
import { FaTelegram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { AiFillTwitterCircle } from "react-icons/ai";


const Footer = () => {
  return (

    <div className='footer'>
      <div className='container_main'>
        <div className='footer_main max-md:text-center'>

          <div className="footer_logo">
            <img src={footer_logo} alt="" />
          </div>

          <div className='footer_links max-md:flex-col'>
            <a href='/'>Home</a>
            <a href='/'>About Us</a>
            <a href='/'>Contact</a>
            <a href='tel:+998906457045'>+998906457045</a>
          </div>

          <div className="footer_social_media">
            <div><FaTelegram /></div>
            <div><PiInstagramLogoFill /></div>
            <div><IoLogoFacebook /></div>
            <div><AiFillTwitterCircle /></div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer