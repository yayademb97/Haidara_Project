import Aos from "aos";
import SliderImg from "../../assets/assets/images/mali_1.png"
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { FaPeopleCarry, FaUser } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoMdOptions } from "react-icons/io";

const Hero = () => {
  return (
    <div>
      <section className="relative bg-black lg:h-[80vh]" data-aos="fade-down" data-aos-delay="300" data-aos-duration="3000">
        <img src={SliderImg} alt="" className="absolute h-full w-full object-cover" />
        <div className="flex flex-col justify-center items-center relative z-10 lg:h-full h-screen max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto">
          <span className="lg:text-5xl text-3xl text-white text-center font-bold relative ">
            Quelle est votre prochaine destination ?
            <div className="bg-orange text-white text-lg -left-8 px-8 py-1 w-fit absolute -top-8 z-10 -rotate-[10deg]">
              Explorez le monde avec nous
            </div>
          </span>
          <p className="text-white text-center text-2xl my-8">Inspirez votre prochain voyage avec des destinations inoubliables</p>

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
                <input type="number" min="0" className="focus:outline-none w-16" />
              </div>
            </div>

            <div>
              <IoMdOptions />
              <button>
                <MdSearch size={20} /> Rechercher
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
