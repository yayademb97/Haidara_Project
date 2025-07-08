import { RiPlanetLine } from "react-icons/ri"
import { LiaWarehouseSolid } from "react-icons/lia"
import { TbBeach } from "react-icons/tb"
import { FaPlaneSlash, FaBiking } from "react-icons/fa"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

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
          title: "Voyage VIP / Premium",
          icon: <TbVip />,
          detail: "Confort et services haut de gamme.",
        },
      ];
    
  return (
    <div>
      CardSlider
    </div>
  )
}

export default CardSlider
