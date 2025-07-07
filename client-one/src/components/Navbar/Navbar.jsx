import { useState } from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
  const [dropDown, setDropDown] = useState(false);
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
