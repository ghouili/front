import React, { useRef, useState } from "react";

import { Link } from "react-router-dom";
// import { Link } from "react-scroll";

import Logo from "../assets/images/logo.png";
import UserIcon from "../assets/icons/user.png";
import Dots from "../assets/icons/4dots.png";


const Header = () => {

  return (
    <div className=" z-20 h-20 w-full border-b flex flex-row items-center py-2 bg-transparent">
      <div className="h-full w-1/4  lg:w-1/12  flex flex-row justify-center ">
        <Link to="/" className="h-full w-fit">
          <img src={Logo} alt="logo" className="h-full w-auto" />
        </Link>
      </div>
      <div className="h-full ml-12 border-l my-6 " />
      <div className=" w-full flex gap-6 ml-10  font-semibold text-lg">
        <Link
          to="/"
          className="trasition duration-300 ease-in-out hover:text-blue-600 cursor-pointer"
        >
          Home
        </Link>
        <Link
          to="/"
          className="trasition duration-300 ease-in-out hover:text-blue-600 cursor-pointer"
        >
          About us
        </Link>
        <Link
          to="/"
          className="trasition duration-300 ease-in-out hover:text-blue-600 cursor-pointer"
        >
          Contact us
        </Link>
      </div>
      <div className=" w-1/4 lg:1/6 xl:w-1/12 flex items-center justify-end gap-6 ">
      <Link
      to='/login'
      >
        <img src={UserIcon} alt="" className="w-5 h-5 cursor-pointer" />
        </Link>
        <img src={Dots} alt="" className="w-5 h-5 cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
