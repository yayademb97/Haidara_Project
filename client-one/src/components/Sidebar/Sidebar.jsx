import {
  FaBiking,
  FaPeopleCarry,
  FaPlaneDeparture,
  FaUser,
} from "react-icons/fa";
import { MdOutlineParagliding, MdSearch } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { AiOutlineCalendar } from "react-icons/ai";
import { useState } from "react";
import ReactSlider from "react-slider";
import img01 from "../../assets/assets/images/company-logo/Tunisair-Logo.png"
import img02 from "../../assets/assets/images/company-logo/air-france-logo.png"
import img03 from "../../assets/assets/images/company-logo/lufthansa-logo.png"
import img04 from "../../assets/assets/images/company-logo/ethiopian-airlines-logo.png"
import img05 from "../../assets/assets/images/company-logo/Qatar-Airways-Logo.png"
import Rating from "../Rating/Rating";

const Sidebar = () => {
  const [values, setValues] = useState([75000, 1000000]);

  const cardData = [
    {
      id: 1,
      vol: "TU724",
      imageVol: img01,
      compagnie: "Tunisair",
      destination: "Paris Orly",
      typeVoyage: "Aller-retour",
      dateRecherche: "2025-07-09T17:20:00Z",
      dateDepart: "2025-07-30T09:00:00Z",
      dateArrivee: "2025-08-06T18:00:00Z",
      lieuDepart: "Tunis Carthage (Tunisie)",
      lieuArrivee: "Aéroport Paris Orly (France)",
      statutVol: "À l'heure",
      aeroportDepart: "Tunis Carthage",
      icon: <FaPlaneDeparture />,
      recommendation: true,
    },
    {
      id: 2,
      vol: "AF101",
      imageVol: img02,
      compagnie: "Air France",
      destination: "Bamako",
      typeVoyage: "Humanitaire / étudiant",
      dateRecherche: "2025-07-09T17:22:00Z",
      dateDepart: "2025-07-30T06:30:00Z",
      dateArrivee: "2025-08-30T08:00:00Z",
      lieuDepart: "Nice Côte d’Azur (France)",
      lieuArrivee: "Aéroport International Modibo Keïta (Mali)",
      statutVol: "Retardé",
      aeroportDepart: "Nice Côte d’Azur",
      icon: <PiStudent />,
      recommendation: false,
    },
    {
      id: 3,
      vol: "LH303",
      imageVol: img03,
      compagnie: "Lufthansa",
      destination: "Berlin",
      typeVoyage: "Voyage touristique",
      dateRecherche: "2025-07-09T17:25:00Z",
      dateDepart: "2025-07-30T12:00:00Z",
      dateArrivee: "2025-08-04T14:30:00Z",
      lieuDepart: "Tunis Carthage (Tunisie)",
      lieuArrivee: "Berlin Brandenburg Airport (Allemagne)",
      statutVol: "Enregistrement en cours",
      aeroportDepart: "Tunis Carthage",
      icon: <FaBiking />,
      recommendation: true,
    },
    {
      id: 4,
      vol: "ET901",
      imageVol: img04,
      compagnie: "Ethiopian Airlines",
      destination: "Addis-Abeba",
      typeVoyage: "Voyage touristique",
      dateRecherche: "2025-07-09T17:28:00Z",
      dateDepart: "2025-07-30T07:45:00Z",
      dateArrivee: "2025-08-07T11:00:00Z",
      lieuDepart: "Tunis Carthage (Tunisie)",
      lieuArrivee: "Bole International Airport (Éthiopie)",
      statutVol: "À l’heure",
      aeroportDepart: "Tunis Carthage",
      icon: <FaBiking />,
      recommendation: true,
    },
    {
      id: 5,
      vol: "QR445",
      imageVol: img05,
      compagnie: "Qatar Airways",
      destination: "Doha",
      typeVoyage: "Voyage VIP / Premium",
      dateRecherche: "2025-07-09T17:31:00Z",
      dateDepart: "2025-07-30T20:00:00Z",
      dateArrivee: "2025-07-30T23:45:00Z",
      lieuDepart: "Tunis Carthage (Tunisie)",
      lieuArrivee: "Hamad International Airport (Qatar)",
      statutVol: "Confirmé",
      aeroportDepart: "Tunis Carthage",
      icon: <FaPlaneDeparture />,
      recommendation: true,
    }
  ];
  
  

  const Card = () => {
    return (
      <>
        {cardData.map((item) => (
          <div key={item.id}>
            <img src={item.imageVol} alt="" />
            <span>
              <Rating />
              <h4>Compagnie Aérienne: {item.compagnie}</h4>
              <span>Vol: <p>{item.vol}</p></span>
            </span>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="flex flex-col gap-8 lg:w-1/3">
      <div className="p-4 w-full bg-white shadow-lg rounded-lg">
        <div className="mb-4 flex border-b items-start py-4">
          <MdOutlineParagliding className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2">
              Sélection de la destination:{" "}
            </h3>
            <select className="w-full rounded outline-none">
              <option value="">Sélectionner une destination</option>
              <option value="">Paris Orly</option>
              <option value="">Bamako</option>
              <option value="">Casablanca</option>
              <option value="">Abidjan</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex border-b items-start py-4">
          <FaPeopleCarry className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2">Type de Voyage: </h3>
            <select className="w-full rounded outline-none">
              <option value="">Sélectionner une catégorie</option>
              <option value="aller-simple">Aller Simple</option>
              <option value="aller-retour">Aller-retour</option>
              <option value="multi-destinations">Multi-destinations</option>
              <option value="affaires">Voyage d'affaires</option>
              <option value="tourisme">Voyage touristique</option>
              <option value="familial">Voyage familial</option>
              <option value="humanitaire">Humanitaire / étudiant</option>
              <option value="vip">Voyage VIP / Premium</option>
            </select>
          </div>
        </div>

        <div className="mb-4 flex border-b items-start py-4">
          <AiOutlineCalendar className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2">Date From</h3>
            <input type="date" className="w-full rounded" />
          </div>
        </div>
        <div className="mb-4 flex border-b items-start py-4">
          <FaUser className="text-green text-5xl mr-2" />
          <div className="w-full">
            <h3 className="font-semibold mb-2">Passagers</h3>
            <input type="number" className="w-full rounded" defaultValue="0" />
          </div>
        </div>
        <div className="mb-4 flex border-b items-start pb-4">
          <div className="w-full">
            <h3 className="font-semibold mb-2">Prix</h3>
            <div className="flex justify-between mb-3">
              <div className="bg-blue-500 text-white px-2 rounded">
                {values[0]} FCFA
              </div>
              <div className="bg-blue-500 text-white px-2 rounded">
                {values[1]} FCFA
              </div>
            </div>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="thumb"
              trackClassName="track"
              min={75000}
              max={1000000}
              value={values}
              onChange={(value) => setValues(value)}
              ariaLabel={["Lower thumb", "Upper thumb"]}
              ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
              renderTrack={(props, state) => {
                const { index } = state;
                const trackStyle =
                  index === 1 ? { backgroundColor: "#007bff" } : {};
                return (
                  <div {...props} style={{ ...props.style, ...trackStyle }} />
                );
              }}
            />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-semibold mb-2 text-lg">Langues</h3>
          <div className="flex flex-col">
            {[
              "Anglais",
              "Français",
              "Allemand",
              "Japonnais",
              "Bambara",
              "Espagnol",
            ].map((langue) => (
              <label key={langue} className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green"
                />
                <span className="ml-2">{langue}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h3 className="font-semibold mb-2 text-lg">Services disponibles</h3>
          <div className="flex flex-col">
            {[
              "Choix de siège",
              "Assistance bagages",
              "Enregistrement prioritaire",
              "Accueil à l’aéroport",
              "Confirmation du retour",
              "Carte d’embarquement numérique",
              "Supervision enregistrement",
              "Coordination avec les compagnies",
              "Gestion des situations critiques",
              "Location de Voitures",
              "Location de Maisons",
            ].map((service) => (
              <label key={service} className="inline-flex items-center mt-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-green"
                />
                <span className="ml-2">{service}</span>
              </label>
            ))}
          </div>
        </div>
        <button className="w-full bg-green text-white rounded-lg h-16 my-4 flex justify-center items-center font-bold gap-2 text-white">
          <MdSearch /> Rechercher
        </button>
      </div>

      <div>
        <h3>Vols détectés selon votre recherche</h3>
        <Card />
      </div>
    </div>
  );
};

export default Sidebar;
