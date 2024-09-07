import React from 'react';
import '../navbar/navbar.css';

import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

import logo from '../../assets/navbar_logo/nav_logo.png';

import { FaLuggageCart } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";

const Navbar = () => {
  const { cart, language, setLanguage, content, setContent } = useCart();

  // Jami elementlarning sonini hisoblash
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="container_main">
        <div className="navbar_main w-11/12">
          <div className="navbar_logo">
            <Link to='/'>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className='hidden lg:block nav_links'>
            <Link to=''>{content.Nav_title1}</Link>
            <Link to=''>{content.Nav_title2}</Link>
            <Link to=''>{content.Nav_title3}</Link>
          </div>
          <div className='flex items-center gap-5'>
            <div className="nav_cart">
              <Link to='/cart'>
                <FaLuggageCart />
                {totalQuantity > 0 && (
                  <span className='cart_count'>{totalQuantity}</span>
                )}
              </Link>
            </div>

            <div className="nav_leng  relative gap-4">
              <TbWorld
                className="absolute hidden lg:block top-1/2 transform -translate-y-1/2 left-1.5 text-white text-3xl" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="font-medium bg-[#15192c] h-11 rounded-lg pl-10 text-white outline-none pt-2.5 pb-2.5" // padding top and bottom changed to 2.5
              >
                <option value="uzbek" className="bg-[#15192c] text-white">Uzbek</option>
                <option value="русский" className="bg-[#15192c]  text-white">Русский</option>
                <option value="english" className="bg-[#15192c] text-white">English</option>
              </select>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
