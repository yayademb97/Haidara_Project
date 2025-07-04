import React from 'react'
import { BsSend, BsSendCheck, BsTwitter } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineLocationOn, MdOutlineMailOutline, MdPhone } from 'react-icons/md'
import { GoArrowUpRight } from 'react-icons/go'

const Footer = () => {
  return (
    <footer className="bg-[#1D231F] pt-44">
      <div className="max-w-[1320px] mx-auto px-3">
        <div className="lg:flex gap-16 pb-20">
          <div className="flex justify-between items-center lg:pb-0 pb-8">
            <span className="flex gap-4 items-center lg:w-3/4">
              <img src="/icon-headphones.png" alt="" height={80} width={80} />
              <p>Bésoin de support ou d'accompagnement pour votre voyage ?</p>
            </span>
            <div className="lg:w-1/4 lg:flex hidden justify-end">
              <button className="bg-green rounded-full text-white w-16 h-16 flex items-center justify-center">
                  <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center lg:pb-0 pb-8">
            <span className="flex gap-4 items-center lg:w-3/4">
              <img src="/icon-headphones.png" alt="" height={80} width={80} />
              <p>rêt à démarrer votre voyage en toute sérénité !</p>
            </span>
            <div className="lg:w-1/4 lg:flex hidden justify-end">
              <button className="bg-orange rounded-full text-white w-16 h-16 flex items-center justify-center">
                  <GoArrowUpRight size={24} />
              </button>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <img src="" alt="" width={130} />
              <p className="my-5">
                Contacter-nous pour toute assistance ou information sur nos services. 
                Notre équipe est là pour vous aider à chaque étape de votre voyage.
              </p>
              <div className="flex items-center gap-2">
                <button className="rounded-full p-3 hover:bg-white hover:text-black bg-[#262028]">
                  <BsTwitter size={14} />
                </button>
                <button className="rounded-full p-3 hover:bg-white hover:text-black bg-[#262028]">
                  <FaFacebook size={14} />
                </button>
                <button className="rounded-full p-3 hover:bg-white hover:text-black bg-[#262028]">
                  <FaInstagram size={14} />
                </button>
                <button className="rounded-full p-3 hover:bg-white hover:text-black bg-[#262028]">
                  <FaWhatsapp size={14} />
                </button>
              </div>
            </div>
            <div className="lg:w-1/5 text-white">
                <h6 className="text-xl font-bold my-5 lg:mt-0">Pages</h6>
                  <ul className="flex flex-col gap-4">
                    <a href="#" className="hover:text-green">Nos Sevices</a>
                    <a href="#" className="hover:text-green">Expertise</a>
                    <a href="#" className="hover:text-green">Travaillez avec Nous</a>
                    <a href="#" className="hover:text-green">Politiques de Confidentialités</a>
                    <a href="#" className="hover:text-green">Contact</a>
                  </ul>
            </div>

            <div className="flex flex-col lg:w-1/3 text-white">
                <h6 className="text-white text-xl font-bold my-5 lg:mt-0">Newsletter</h6>
                <p className="my-5">Souscrire à notre Newsletter pour avoir nos nouveautés et mises à jours.</p>
                <div className="relative h-14 flex items-center">
                  <input type="email" placeholder="Adresse Email" className="bg-white rounded-l-lg px-3 h-full w-full outline-none" />
                  <button className="bg-green text-white w-12 h-full flex items-center justify-center text-2xl rounded-r-lg">
                    <BsSendCheck />
                  </button>
                </div>
                <label className="pt-2">
                  <input type="checkbox"  />  Je valide les conditions et règlements encadrant mon utilisation.
                </label>
            </div>

            <div className="pt-[15px]">
              <ul >
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-[#262D28] rounded-full w-fit justify-center p-4 hover:text-green">
                    <MdPhone className="text-green" />  
                  </button>
                  <span>
                    <p>Contactez notre équipe</p>
                    <p>+223 63 97 97 97</p>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-[#262D28] rounded-full w-fit justify-center p-4 hover:text-green">
                    <MdOutlineMailOutline className="text-green" /> 
                  </button>
                  <span>
                    <p>Adrresse Mail</p>
                    <p>custom-assistance@gmail.com</p>
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 bg-[#262D28] rounded-full w-fit justify-center p-4 hover:text-green">
                    <MdOutlineLocationOn className="text-green" />
                  </button>
                  <span>
                    <p>Visiter nos Locaux</p>
                    <p>Hamdallaye Aci 2000, Rue 511, Immeuble Dakolo</p>
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-2 flex justify-center">
          © Copyright par Yaya DEMBELE — Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
