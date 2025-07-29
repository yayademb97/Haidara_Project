import { useState } from "react";
import CardSlider from "../../components/CardSlider/CardSlider";
import Sidebar from "../../components/Sidebar/Sidebar";
import { BsSortAlphaDown } from "react-icons/bs";

const Destinations = () => {
  const [sortAsc, setSortAsc] = useState(true)
  const [sortCriterion, setSortCriterion] = useState("name")
  const [currentPage, setCurrentPage] = useState(0)

  const handleSortChange = (e) => {
    setSortCriterion(e.target.value);
    setSortAsc(true)
  }
  return (
    <div>
      <section className="relative bg-black lg:h-[380px]">
        <img
          src="/mali_1.png"
          alt=""
          className="absolute h-full w-full object-cover"
        />
        <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1320px] px-6 lg:pt-0 pt-16 mx-auto">
          <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">
            Explorer le Monde
          </span>
          <p className="text-white text-center text-2xl my-2">
            Avec Customer Assistance77, Voyagez sans angoisse
          </p>
        </div>
      </section>
      <CardSlider />
      <section className="lg:flex gap-8 max-w-[1320px] mx-auto my-24 px-3">
        <Sidebar />
        <div className="lg:2/3">
          <div className="flex lg:flex-row flex-col justify-between py-4 pb-2 text-[#82828A]">
            <span className="flex gap-2">
              {/* <strong>{volData.length}</strong> Vols */}
            </span>
            <span className="flex gap-2">
              <span className="flex gap-2 items-center">
                Filtré Par: <BsSortAlphaDown className="cursor-pointer" onClick={() => setSortAsc(!sortAsc)} />
              </span>
              <select value={sortCriterion} onChange={handleSortChange} className="w-32 cursor-pointer outline-none border rounded-sm">
                <option value="">Compagnie Aérienne</option>
                <option value="">Destination</option>
                <option value="">Lieu - Départ</option>
                <option value="">Lieu - Arrivé</option>
                <option value="">Aéroport</option>
              </select>
            </span>
          </div>
        </div>

        <div>
          {currentPage.map((item, index) => (
            <VolsCard key={index} image={item.image} name={item.name} rating={item.rating} price={item.price} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
