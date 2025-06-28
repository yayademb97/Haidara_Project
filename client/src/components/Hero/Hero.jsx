import Aos from "aos";
import SliderImg from "../../assets/assets/images/mali_1.png";
import WhatsappImg from "../../assets/assets/images/communication-whatsapp.png"
import AssistanceImg from "../../assets/assets/images/assistance-bagages.png"
import EnregistrementImg from "../../assets/assets/images/enregistrement-bagage.png"
import SiegeImg from "../../assets/assets/images/choix-de-siège.png"
import AccueilImg from "../../assets/assets/images/acceuil-aeroport.png"
import congresImg from "../../assets/assets/images/congrès-seminaire.png"
import SupervisionImg from "../../assets/assets/images/supervision-enregistrement.png"
import SituationCritiqueImg from "../../assets/assets/images/situation-critique.png"
import CoordinationituationCritiqueImg from "../../assets/assets/images/coordination-compagnie.png"
import ConfirmationImg from "../../assets/assets/images/confirmation.png"
import carteImg from "../../assets/assets/images/carte-embarquement.png"


import {
  MdFamilyRestroom,
  MdOutlineParagliding,
  MdSearch,
} from "react-icons/md";
import {
  FaBiking,
  FaPeopleCarry,
  FaPlaneArrival,
  FaPlaneDeparture,
  FaPlaneSlash,
  FaUser,
} from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdOptions, IoMdPlanet } from "react-icons/io";
import ArrowImg from "../../assets/assets/images/line-arrow.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { RiPlaneLine } from "react-icons/ri";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { PiStudent } from "react-icons/pi";
import { TbVip } from "react-icons/tb";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

const Hero = () => {
  const responsives = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

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
      title: "Voyage Humanitaire / étudiant",
      icon: <PiStudent />,
      detail: "Mobilité éducative ou solidaire (sanitaire).",
    },
    {
      title: "Voyage VIP / Premium",
      icon: <TbVip />,
      detail: "Confort et services haut de gamme.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const handleAfterChange = (_, state) => {
    setCurrentSlide(state.currentSlide)
  }

  const Explore = ({ image, service,  }) => {
    return (
      <div className="relative group overflow-hidden rounded-[10px] shadow-lg">
          <img src={image} alt={service} className="w-full h-[350px] object-cover rounded-[10px] transition-transform duration-700 ease-in-out group-hover:scale-125" />
          <span className="bg-orange rounded-lg px-5 text-white text-xs absolute top-5 right-5 uppercase font-bold leading-8 whitespace-pre">Premium</span>
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-5 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:bg-opacity-100">
              <p className="text-green text-xl font-bold flex flex-col">Service dédié : <span className="text-white text-2xl group-hover:text-gray-800">{service}</span></p>
              <div className="absolute -top-5 right-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button className="bg-orange text-white p-2 rounded-full">
                  <IoArrowForward className="text-xl" />
                </button>
              </div>
          </div>
      </div>
    )
  }


  return (
    <div>
      <section
        className="relative bg-black lg:h-[80vh]"
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-duration="3000"
      >
        <img
          src={SliderImg}
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto">
          <span className="lg:text-5xl text-3xl text-white text-center font-bold relative ">
            Quelle est votre prochaine destination ?
            <div className="bg-orange text-white text-lg -left-8 px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]">
              Explorez le monde avec nous
            </div>
          </span>
          <p className="text-white text-center text-2xl my-8">
            Inspirez votre prochain voyage avec des destinations inoubliables
          </p>

          <div className="bg-white p-6 rounded-lg shadow-lg lg:flex items-center justify-between w-full">
            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <MdOutlineParagliding className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full ">
                <p className="text-gray-500 text-sm">Destination</p>
                <select className="focus:outline-none">
                  <option value="">Destinations</option>
                </select>
              </div>
            </div>

            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaPeopleCarry className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full ">
                <p className="text-gray-500 text-sm">Catégorie</p>
                <select className="focus:outline-none">
                  <option value="">Mode de réservation</option>
                </select>
              </div>
            </div>

            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <AiOutlineCalendar className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full ">
                <p className="text-gray-500 text-sm">À partir de</p>
                <input type="date" className="focus:outline-none" />
              </div>
            </div>

            <div className="flex items-center w-full lg:border-r border-b py-2 pr-4 mr-4">
              <FaUser className="text-green text-3xl mr-2" />
              <div className="flex flex-col w-full ">
                <p className="text-gray-500 text-sm">Passagers</p>
                <input
                  type="number"
                  min="0"
                  className="focus:outline-none w-16"
                />
              </div>
            </div>

            <div className="flex items-center mr-4 lg:mt-0 mt-4">
              <IoMdOptions className="lg:block hidden text-green text-3xl mr-2" />
              <button className="bg-green text-white flex items-center justify-center gap-4 px-6 py-3 outline-none border-none rounded-lg font-semibold text-sm w-full">
                <MdSearch size={20} /> Rechercher
              </button>
            </div>
          </div>
          <img
            src={ArrowImg}
            alt=""
            className="w-[250px] lg:block hidden my-4 -ml-96"
          />
          <p className="text-white font-semibold lg:text-3xl text-xl lg:py-8 py-8">
            Ou explorez la catégorie sélectionnée
          </p>
        </div>
      </section>

      <section className="bg-[#F3F8F6] bg-[url('bg-shape-01.jpg')]">
        <div className="relative z-10 max-w-[1320px] px-6 mx-auto -mt-24">
          <Carousel
            responsive={responsives}
            infinite
            afterChange={handleAfterChange}
            autoPlay={true}
            itemClass="px-2"
          >
            {type.map((item, index) => (
              <div key={index} className="group">
                <div
                  className={`cursor-pointer rounded-lg flex flex-col justify-center items-start gap-4 ${
                    currentSlide % type.length === index
                      ? `bg-green text-white`
                      : `bg-white text-green group-hover:bg-green group-hover:text-white`
                  }`}
                >
                  <p
                    className={`font-bold text-lg ${
                      currentSlide % type.length === index
                        ? `text-white`
                        : `text-green group-hover:text-white`
                    }`}
                  >
                    {item.title}
                  </p>
                  <span className={`text-7xl ${
                    currentSlide % type.length === index
                      ? `text-white`
                      : `text-green group-hover:text-white`
                  }`}>{item.icon}</span>
                  <p className={`${
                    currentSlide % type.length === index
                      ? `text-white`
                      : `text-green group-hover:text-white`
                  }`}>{item.detail}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        <div className="max-w-[1320px] mx-auto pt-24">
          <div className="py-16">
              <div className="flex flex-col items-center">
                  <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                      <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                      <h6 className="text-green relative font-semibold">Services personnalisés pour voyageurs</h6>
                  </div>
                  <h3 className="lg:text-5xl text-3xl font-bold pb-8 text-center py-4">Explorez nos services</h3>
              </div>

              <div className="py-8">
                <Carousel
                  responsive={responsive}
                  infinite
                  autoPlay={true}
                  itemClass="px-2 pb-6"
                >
                  <Explore service="Communication via WhatsApp" image={WhatsappImg} />
                  <Explore service="Gestion claire des bagages" image={AssistanceImg} />
                  <Explore service="Enregistrement et embarquement" image={EnregistrementImg} />
                  <Explore service="Choix de siège et surclassement" image={SiegeImg} />
                  <Explore service="Accueil personnalisé dès l’atterrissage" image={AccueilImg} />
                  <Explore service="Informations congrès et séminaires" image={congresImg} />
                  <Explore service="Supervision de l'enregistrement" image={SupervisionImg} />
                  <Explore service="Gestion des situations critique" image={SituationCritiqueImg} />
                  <Explore service="Coordination avec les compagnies" image={CoordinationituationCritiqueImg} />
                  <Explore service="Confirmation retour / arrivée estimée" image={ConfirmationImg} />
                  <Explore service="Carte d’embarquement numérique" image={carteImg} />
                </Carousel>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
