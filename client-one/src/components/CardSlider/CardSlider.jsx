import { IoMdPlanet } from "react-icons/io";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaPlaneSlash, FaBiking, FaPlaneDeparture } from "react-icons/fa"
import { TbVip } from "react-icons/tb";
import { PiStudent } from "react-icons/pi";
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import { useState } from "react";

const CardSlider = () => {

    const type = [
        {
          title: "Aller Simple",
          icon: <FaPlaneSlash />,
          detail: "Un aller sans retour, simple et rapide.",
        },
        {
          title: "Aller-retour",
          icon: <FaPlaneDeparture />,
          detail: "Trajet aller + retour planifié à l’avance.",
        },
        {
          title: "Multi-destinations",
          icon: <IoMdPlanet />,
          detail: "Plusieurs escales dans un seul voyage.",
        },
        {
          title: "Voyage d'affaires",
          icon: <BiSolidPlaneTakeOff />,
          detail: "Optimisé pour les déplacements pro.",
        },
        {
          title: "Voyage touristique",
          icon: <FaBiking />,
          detail: "Idéal pour découvrir et explorer avec notre application.",
        },
        {
          title: "Voyage Familial",
          icon: <MdFamilyRestroom />,
          detail: "Pensé pour les familles et enfants(en voyage de groupe)",
        },
        {
          title: "Humanitaire / étudiant",
          icon: <PiStudent />,
          detail: "Mobilité éducative ou solidaire (sanitaire).",
        },
        {
          title: "VIP / Premium",
          icon: <TbVip />,
          detail: "Confort et services haut de gamme.",
        },
      ];

      const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      }
      const [currentSlide, setCurrentSlide] = useState(0)

      const handleAfterChange = (_, state) => {
        setCurrentSlide(state.currentSlide)
      }
    
  return (
    <div className="relative z-10 max-w-[1320px] mx-auto -mt-16">
      <Carousel responsive={responsive} infinite autoPlay arrows itemClass="px-2" afterChange={handleAfterChange}>
        {
          type.map((item, index) => (
            <div key={index} className="group">
                <div 
                  className={`cursor-pointer p-8 rounded-lg flex flex-col justify-center items-start gap-4 ${
                  currentSlide % type.length === index 
                  ? "bg-green text-white" 
                  : "bg-white text-green group-hover:bg-green group-hover:text-white"
                  }`}
                >
                  <p 
                    className={`font-bold text-lg ${
                    currentSlide % type.length === index 
                    ? "text-white" 
                    : "text-green group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </p>
                  <span
                    className={`text-7xl ${
                      currentSlide % type.length === index 
                      ? "text-white" 
                      : "text-green group-hover:text-white"
                      }`}
                  >{item.icon}</span>
                  <p
                    className={`${
                      currentSlide % type.length === index 
                      ? "text-white" 
                      : "text-green group-hover:text-white"
                      }`}
                  >{item.detail}</p>
                </div>
            </div>
          ))
        }
      </Carousel>
    </div>
  )
}

export default CardSlider
