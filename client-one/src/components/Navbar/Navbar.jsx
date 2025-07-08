import { useState } from "react";
import { NavLink } from "react-router-dom"
import { CiSearch } from "react-icons/ci";
import { BsPersonCircle } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown)
  }
  return (
    <nav className="flex flex-col w-full h-24 justify-center items-center sticky top-0 bg-[#1D231F]">
      <div className="w-full max-w-[1320px] mx-auto lg:px-3">
        <div className="lg:w-full w-11/12 mx-auto h-full flex justify-between items-center gap-16">
            <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-x-2">
                    <img src="/logo.png" alt="" className="w-36" />
                </div>
            </div>
            <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                <NavLink to="/" className="leading-normal no-underline text-white text-lg hover:text-green">Acceuil</NavLink>
                <NavLink to="/destination" className="leading-normal no-underline text-white text-lg hover:text-green">Destinations</NavLink>
                <NavLink to="/services" className="leading-normal no-underline text-white text-lg hover:text-green">Nos Sevices</NavLink>
                <NavLink to="/expertise" className="leading-normal no-underline text-white text-lg hover:text-green">Expertise</NavLink>
                <NavLink to="/abous-us" className="leading-normal no-underline text-white text-lg hover:text-green">À Propos de nous</NavLink>
                <NavLink to="/contacts" className="leading-normal no-underline text-white text-lg hover:text-green">Contact</NavLink>
            </ul>
            <div className="flex gap-4 max-lg:hidden w-40 justify-center">
              <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
                <CiSearch size={32} />
              </button>
              <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-green hover:text-white">
                <BsPersonCircle size={24} />
              </button>
            </div>
            { dropDown ?  (
              <div onClick={showDropDown} className="lg:hidden text-2xl cursor-pointer text-white">
                  <MdClose />
              </div>
            ) : (
              <div onClick={showDropDown} className="lg:hidden text-2xl cursor-pointer text-white">
                  <HiMenuAlt3 />
              </div>
            )}
        </div>
        { dropDown && (
          <div className="lg:hidden w-full fixed top-24 bg-white transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="w-full flex flex-col justify-center">
                <NavLink to="/" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Acceuil</NavLink>
                <NavLink to="/destination" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Destinations</NavLink>
                <NavLink to="/services" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Nos Sevices</NavLink>
                <NavLink to="/expertise" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Expertise</NavLink>
                <NavLink to="/abous-us" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid">À Propos de nous</NavLink>
                <NavLink to="/contacts" className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid">Contact</NavLink>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
