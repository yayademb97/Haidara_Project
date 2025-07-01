import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TourImg from "../../assets/assets/images/tour-03.png";
import { BsPlay } from "react-icons/bs";
import Accordion from "../Accordion/Accordion";
import { CiCamera, CiHeart } from "react-icons/ci";
import { MdArrowRightAlt, MdLocationPin, MdPeopleOutline, MdStar } from "react-icons/md";
import { IoVideocamOutline } from "react-icons/io5";
import { LiaDollarSignSolid } from "react-icons/lia";
import { WiTime3 } from "react-icons/wi";
import TourImg from "../../assets/assets/images/tour-05.jpg"
import TourImg01 from "../../assets/assets/images/tour-06.jpg"
import TourImg02 from "../../assets/assets/images/tour-07.jpg"
import TourImg03 from "../../assets/assets/images/tour-08.jpg"
import TourImg04 from "../../assets/assets/images/tour-09.jpg"
import TourImg05 from "../../assets/assets/images/tour-10.jpg"

const Tours = () => {
  //* responsive side
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
  };

  const Tour = ({ image, name }) => {
    return (
        <div>
            <div className="relative overflow-hidden rounded-t-lg">
                <img src={image} alt="" className="rounded-t-lg hoverImg" />
                <div className="absolute flex justify-between top-4 left-4 right-4 ">
                    <p className="bg-[#14B0C3] rounded-md px-4 py-1 text-white text-sm">À LA UNE</p>
                    <button className="bg-[#00000066] pl-1 rounded-md">
                        <CiHeart className="text-white text-xl" />
                    </button>
                </div>
            </div>

            <div className="border border-[#ebe6de] rounded-b-lg relative">
                <div className="absolute w-full h-5 -top-5 bg-white rounded-t-[20px]"></div>
                <div className="px-6">
                    <div className="flex items-center gap-4 justify-between relative">
                        <span className="flex justify-center">
                            {[...Array] .map((_, index) => (
                                <MdStar key={index} className="text-[#ffa801] text-xl" />
                            ))}
                        </span>
                        <span className="flex gap-2 shadow px-4 py-1 absolute -top-8 right-0 z-10 bg-white rounded-lg">
                            <div className="relative ">
                                <CiCamera size={24} />
                                <button className="bg-green text-xs rounded-full text-white w-4 h-4 flex items-center justify-center absolute top-0 right-0 ">5</button>
                            </div>
                            <IoVideocamOutline size={24} />
                        </span>
                    </div>

                    <h4 className="text-xl font-semibold py-2 hover:text-green">{name}</h4>
                    <span className="flex items-center gap-2">
                        <MdLocationPin className="text-green text-xl" />
                        <p className="text-[#757783] text-sm">Main Street, Thailan, Bankog</p>
                    </span>

                    <span className="text-[#757783] flex py-4">
                        <LiaDollarSignSolid className="text-green text-xl" /> À
                        <p className="text-green">385 000 FCFA</p>
                    </span>
                    <div className="flex justify-between border-t py-2">
                        <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1">
                                <WiTime3 className="text-green" /> 10 jours
                            </span>
                            <span className="flex items-center gap-1">
                                <MdPeopleOutline className="text-green" /> 1 personnes
                            </span>
                        </div>

                        <a href="#" className="flex items-center gap-2 text-sm mt-2">Explorer <MdArrowRightAlt /></a>
                    </div>
                </div>
            </div>
        </div>
    )
  }

  return (
    <div>
      <section>
        <div className="max-w-[1320px] mx-auto lg:-mt-20 mb-10 flex flex-col lg:flex-row bg-gray-100 rounded-lg shadow-lg">
          <div className="w-full relative lg:w-1/2 lg:mt-0 -mt-24 z-10 lg:px-0 px-3 ">
            <img
              src={TourImg}
              alt=""
              className="w-full h-64 lg:h-full rounded-md object-cover "
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-green animate-pulse text-white rounded-full p-8">
                <BsPlay size={30} />
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 py-24 lg:px-12 px-3">
            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
              <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
              <h6 className="text-green relative font-semibold">Disponibilités</h6>
            </div>
            <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">Profitez d'un accompagnement sans compromis</h3>
            <Accordion />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-12" data-aos="fade-down">
      <div className="relative w-fit px-8 py-2 flex items-center justify-center">
              <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
              <h6 className="text-green relative font-semibold">Solutions de voyage sur-mesure</h6>
            </div>
            <h3 className="lg:text-5xl text-3xl font-bold pb-8 py-4">Vivez un accompagnement fluide, humain et sans stress.</h3>
            <div>
                <Carousel responsive={responsive} infinite autoPlay={true} itemClass="px-2 pb-4">
                    {/* <Tour image={TourImg} name="Decouvrez Ile Gouland à Bankog"  /> */}
                    {/* <Tour image={TourImg01} name="Decouvrez Ile Gouland à Bankog"  /> */}
                    {/* <Tour image={TourImg02} name="Decouvrez Ile Gouland à Bankog"  /> */}
                    {/* <Tour image={TourImg03} name="Decouvrez Ile Gouland à Bankog"  /> */}
                </Carousel>
            </div>
      </section>
    </div>
  );
};

export default Tours;
