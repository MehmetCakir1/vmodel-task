import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaBars} from "react-icons/fa";

const Navbar = () => {

  const [isOpen,setIsOpen]=useState(false)


  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center px-3 py-2 w-[97%] rounded-xl fixed top-4 left-[50%] translate-x-[-50%] bg-white z-10">
      <div className="flex justify-between items-center gap-6 xl:gap-12 md:min-w-[695px] ">
        <img
          src="images/logo.jpg"
          alt="logo"
          className="w-[201px] h-[45.64px]"
        />
        <FaBars className="lg:hidden text-3xl"
        onClick={()=>setIsOpen(!isOpen)}
        />
        <div className="justify-between items-center gap-4 xl:gap-8 text-[14px] text-[#1B1B1A] opacity-60 hidden lg:flex">
          <div className="flex justify-between items-center gap-3 cursor-pointer">
            {" "}
            <span>Models</span>
            <span>
              <RiArrowDownSFill />
            </span>
          </div>
          <div className="flex justify-between items-center gap-3 cursor-pointer">
            {" "}
            <span>Influencers</span>
            <span>
              <RiArrowDownSFill />
            </span>
          </div>
          <a href="#">Photographers</a>
          <a href="#">Pets</a>
          <a href="#">VMagazine</a>
          <a href="#">About</a>
        </div>
      </div>
      <div className="hidden lg:flex justify-between items-center gap-2 lg:gap-3 xl:gap-6 text-[12px]  text-[#1B1B1A] ">
        <a href="#" className="opacity-60">Apply as a Creative</a>
        <a href="#">
          <button className="w-[103px] h-[40px] bg-[#423130] text-white rounded-md opacity-100">Hire Top Model</button>
        </a>
        <a href="#" className="opacity-60">Log in</a>
      </div>
      {
        isOpen && <ul className="lg:hidden text-center font-semibold">
            <li>Log In</li>
            <li>Hire Top Model</li>
            <li>Apply as a Creative</li>
            <li>Models</li>
            <li>Influencers</li>
            <li>Photographers</li>
            <li>Pets</li>
            <li>VMagazine</li>
            <li>About</li>
          </ul>
      }
         
    </nav>
  );
};

export default Navbar;
