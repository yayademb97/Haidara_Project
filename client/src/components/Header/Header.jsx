import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import logoImg from "../../assets/assets/images/logo.png";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
      <div className="container mx-auto lg:px-3 w-full">
        <div className="lg:w-full w-1/12 mx-auto h-full flex lg:justify-center items-center gap-15">
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center gap-x-2">
              <img src={logoImg} alt="" className="w-36" />
            </div>
          </div>

          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#home"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Acceuil
            </a>
            <a
              href="#destination"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Destinations
            </a>
            <a
              href="#services"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Nos Sevices
            </a>
            <a
              href="#expertise"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Expertise
            </a>
            <a
              href="#abous-us"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              À Propos de nous
            </a>
            <a
              href="#contacts"
              className="leading-normal no-underline text-white text-lg hover:text-green"
            >
              Contact
            </a>
          </ul>

          <div className="flex gap-4 max-lg:hidden w-40 justify-center ">
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
              <CiSearch size={32} />
            </button>
            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-green hover:text-white">
              <BsPersonCircle size={24} />
            </button>
          </div>

          {dropDown ? (
            <div
              className="lg:hidden text-2xl cursor-pointer text-black"
              onClick={showDropDown}
            >
              <MdClose />
            </div>
          ) : (
            <div
              className="lg:hidden text-2xl cursor-pointer text-black"
              onClick={showDropDown}
            >
              <HiMenuAlt3 />
            </div>
          )}
        </div>
        {dropDown && (
          <div className="lg:hidden w-full fixed top-24 bg-white transition-all ">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="w-full flex flex-col justify-center ">
                <a
                  href="#home"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Acceuil
                </a>
                <a
                  href="#destination"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Destinations
                </a>
                <a
                  href="#services"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Nos Sevices
                </a>
                <a
                  href="#expertise"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Expertise
                </a>
                <a
                  href="#abous-us"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  À Propos de nous
                </a>
                <a
                  href="#contacts"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  Contact
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
