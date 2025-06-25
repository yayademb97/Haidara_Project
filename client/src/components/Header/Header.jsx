

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
        <nav>
            <div>
                <div>
                    <div>
                        <div>
                            <img src={logoImg} alt="" />
                        </div>
                    </div>

                    <ul>
                        <a href="#home">Acceuil</a>
                        <a href="#destination">Destinations</a>
                        <a href="#services">Nos Sevices</a>
                        <a href="#expertise">Expertise</a>
                        <a href="#abous-us">À Propos de nous</a>
                        <a href="#contacts">Contact</a>
                    </ul>

                    <div>
                        <button>
                            <CiSearch size={32} />
                        </button>
                        <button>
                            <BsPersonCircle size={24} />
                        </button>
                    </div>

                    {
                        dropDown ? (
                            <div>
                                <MdClose />
                            </div>
                        ) : (
                        <div>
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                { dropDown && (
                    <div>
                        <div>
                            <ul>
                                <a href="#home">Acceuil</a>
                                <a href="#destination">Destinations</a>
                                <a href="#services">Nos Sevices</a>
                                <a href="#expertise">Expertise</a>
                                <a href="#abous-us">À Propos de nous</a>
                                <a href="#contacts">Contact</a>
                            </ul>
                        </div>
                    </div>
                ) }
            </div>
        </nav>
        
    )
}

export default Header
