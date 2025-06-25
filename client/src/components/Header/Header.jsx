

import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { HiMenuAlt3 } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'
import logoImg from "../../assets/assets/images/logo.png"

const Header = () => {

    const [dropDown, setDropDown] = useState(false)

    const showDropDown = () => {
        setDropDown(!dropDown)
    }
    return (
        <nav className="w-full h-24 flex flex-col justify-center items-center sticky top-0 z-50 bg-[#1D231F]">
            <div className="container mx-auto lg:px-3 w-full">
                <div className="lg:w-full w-11/12 mx-auto h-full flex lg:justify-center items-center gap-16">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex items-center gap-y-4">
                            <div className="flex items-center gap-x-2">
                                <img src={logoImg} alt="" className="w-36" />
                            </div>
                        </div>
                        <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
                            <a href="#home" className="leading-normal no-underline text-white text-lg hover:text-green">Accueil</a>
                            <a href="#destination" className="leading-normal no-underline text-white text-lg hover:text-green">Destinations</a>
                            <a href="#services" className="leading-normal no-underline text-white text-lg hover:text-green">Services</a>
                            <a href="#expertise" className="leading-normal no-underline text-white text-lg hover:text-green">Expertise</a>
                            <a href="#abous-us" className="leading-normal no-underline text-white text-lg hover:text-green">Qui sommes nous ?</a>
                            <a href="#contacts" className="leading-normal no-underline text-white text-lg hover:text-green">Contacts</a>
                        </ul>
                        <div className="flex gap-4 max-lg:hidden w-40 justify-center">
                            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:text-green">
                                <CiSearch size={32} />
                            </button>
                            <button className="rounded-full text-white w-10 h-10 flex items-center justify-center hover:bg-green hover:text-white">
                                <BsPersonCircle size={24} />
                            </button>
                        </div>

                        {dropDown ? (
                            <div>
                                <MdClose />
                            </div>
                        ) : (
                            <div>
                                <HiMenuAlt3 />
                            </div>
                        )}
                    </div>
                    {
                        dropDown && (
                            <div>
                                <div>
                                    <ul>
                                        <a href="#home">Accueil</a>
                                        <a href="#destination">Destinations</a>
                                        <a href="#services">Services</a>
                                        <a href="#expertise">Expertise</a>
                                        <a href="#abous-us">Qui sommes nous ?</a>
                                        <a href="#contacts">Contacts</a>
                                    </ul>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </nav>
    )
}

export default Header
