import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className=' top-0  z-50 bg-orange-700 p-6 w-full flex flex-wrap shadow-lg overflow-hidden'>
      <a href='/' className='w-28 m-auto md:m-0'>
        <img src={logo} alt='Purrpix' className='object-contain' />
      </a>
      <div className='md:flex hidden ml-auto'>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
