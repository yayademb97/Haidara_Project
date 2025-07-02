import React from "react";
import { FaVest } from "react-icons/fa";
import {
  MdOutlineAccessTime,
  MdOutlineChecklist,
  MdOutlineFlightTakeoff,
  MdOutlineSecurity,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { RiPlanetLine } from "react-icons/ri";
import ExploreImg from "../../assets/assets/images/tour-02.png"

const Explore = () => {
  const why_Us = [
    // {
    //     text: "Un accueil personnalisé dès l’arrivée à l’aéroport, avec un accompagnement humain et bienveillant.",
    //     icon: <FaVest size={60} />
    // },
    // {
    //     text: "Assistance 24/7 via WhatsApp pour ne jamais être seul, même en situation imprévue.",
    //     icon: <MdOutlineSupportAgent size={60} />
    // },
    // {
    //     text: "Sécurité et surveillance des bagages à chaque étape de votre voyage.",
    //     icon: <MdOutlineSecurity size={60} />
    // },
    {
      text: "Coordination proactive avec les compagnies pour gérer retards ou changements.",
      icon: <MdOutlineFlightTakeoff size={60} />,
    },
    {
      text: "Voyage adapté à chaque profil : VIP, famille, étudiant, mission humanitaire.",
      icon: <MdOutlineChecklist size={60} />,
    },
    {
      text: "Gain de temps avec un embarquement fluide et des procédures accélérées.",
      icon: <MdOutlineAccessTime size={60} />,
    },
  ];

  return (
    <div>
      <div className="px-3">
        <div className="max-w-[1320px] mx-auto bg-[url('/bg-07.png')] bg-green bg-no-repeat bg-cover rounded-[10px] relative z-10 lg:mb-0 -mb-24">
          <div className="lg:p-16 py-8 px-4 lg:flex justify-between items-center">
            <div className="flex items-center gap-4 lg:mb-0 mb-4">
                <RiPlanetLine size={50} color="white" />
                <span className="text-white">
                  <p className="text-sm">
                    BESOIN D’UN ACCOMPAGNEMENT SUR-MESURE POUR VOYAGER L’ESPRIT
                    LÉGER ?
                  </p>
                  <h4 className="lg:text-4xl text-2xl font-bold">
                    Parce que voyager ne devrait jamais être source de stress.
                  </h4>
                </span>
              <button className="bg-white rounded-lg text-lg shadow py-4 px-8 font-bold">En Savoir Plus</button>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:mt-20">
            <img src={ExploreImg} alt="" className="lg:w-1/2 w-full lg:h-auto h-[350px] object-cover" />
            <div className="lg:w-1/2 bg-[url('/bg-07.png')] bg-no-repeat bg-cover lg:p-20 lg:pt-44 pr-4 px-3 bg-[#F3F8F6]">
                <div className="flex-col flex ">
                    <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                        <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
                            <h6 className="text-green relative font-semibold">
                                Pourquoi nous choisir ?
                            </h6>    
                    </div>
                    <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">
                        Des solutions qui transforment vos trajets en expériences sereines
                    </h3>
                </div>
                <div className="flex flex-col gap-4 pt-8">
                    {
                        why_Us.map((item) => (
                            <div key={item.text} className="flex items-center gap-4">
                                <span className="bg-green rounded-md p-4 text-white">
                                    {item.icon}
                                </span>
                                <span className="lg:w-2/3">
                                    <p className="font-bold text-xl pb-2">{item.text}</p>
                                    <p className="text-gray-400">
                                        Aenan placerat ut lacus nex pulvinar. Donec eu, ante at,
                                        commodo diam.
                                    </p>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
