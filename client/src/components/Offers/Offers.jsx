import React, { useState } from 'react'
import { BsTrainLightrailFront } from 'react-icons/bs'
import { FaBiking, FaBusAlt } from 'react-icons/fa'
import { GiWoodenPier } from 'react-icons/gi'
import { LiaWarehouseSolid } from 'react-icons/lia'
import { IoArrowForward } from 'react-icons/io5'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Offers = () => {

    const [hoveredIndex, setHoveredIndex] = useState(null)



    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    const offers = [
        {
            icon: <LiaWarehouseSolid />,
            image: "../../assets/assets/images/offer-1.png",
            text: "Assistance 24h/24 et 7j/7, pour un accompagnement sans interruption.",
        },
        {
            icon: <BsTrainLightrailFront />,
            image: "../../assets/assets/images/offer-2.png",
            text: "Coordination efficace entre votre arrivée à l'aéroport et votre enregistrement.",
        },
        {
            icon: <FaBusAlt />,
            image: "../../assets/assets/images/offer-3.png",
            text: "Navettes et transferts aéroport organisés selon vos horaires.",
        },
        {
            icon: <GiWoodenPier />,
            image: "../../assets/assets/images/offer-4.png",
            text: "Gestion fluide des situations d’embarquement ou de correspondance.",
        },
        {
            icon: <FaBiking />,
            image: "../../assets/assets/images/offer-5.png",
            text: "Accompagnement personnalisé pour une mobilité douce à destination.",
        },
    ]
  return (
    <div className="bg-[url('../../assets/assets/images/offers-img.png')] pb-24">
      <div className="max-w-[1320px] mx-auto py-24">
          <div className="flex flex-col items-center">
              <div className="relative w-fit px-8 py-2 flex items-center justify-center">
                  <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10">
                    <h6 className="text-orange relative font-semibold">Ce que nous proposons</h6>
                  </span>
              </div>
                <h3 className="lg:text-5xl text-3xl font-bold pb-8 text-white lg:w-4/5 text-center py-4">
                    Vivez une expérience de voyage authentique, accompagnée avec attention du départ à l’arrivée.
                </h3>
          </div>

          <div className="py-8">
                <Carousel responsive={responsive} autoPlay={true} itemClass="pb-6 px-2">
                        {
                            offers.map((offer, index) => (
                                <div key={offer.image} className="relative group rounded-lg p-8" 
                                style={{
                                    backgroundImage: hoveredIndex === index ? `url(${offer.image})` : 'none',
                                    backgroundColor: hoveredIndex === index ? "transparent" : "black",
                                    backgroundSize: 'cover',
                                  }}
                                >

                                </div>
                            ))
                        }
                </Carousel>
          </div>
      </div>
    </div>
  )
}

export default Offers
