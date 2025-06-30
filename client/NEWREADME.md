import React from "react";
import ServiceImg from "../../assets/assets/images/service_logo.png";
import ServiceImg01 from "../../assets/assets/images/service-img-01.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Services = () => {
  const categories = [
    { text: "Aller Simple", tilt: "-rotate-6" },
    { text: "Aller-retour", tilt: "-rotate-6" },
    { text: "Multi-destinations", tilt: "-rotate-6" },
    { text: "Voyage d'affaires", tilt: "-rotate-6" },
    { text: "Voyage touristique", tilt: "-rotate-6" },
    { text: "Voyage familial", tilt: "-rotate-6" },
    { text: "Voyage Humanitaire/étudiant", tilt: "-rotate-6" },
    { text: "Voyage VIP/Premium", tilt: "-rotate-6" },
  ];

  const Section = ({ title, text, children, image, reverse }) => {
    return (
      <div className="max-w-[1320px] mx-auto mt-16 px-3">
        <div
          className={`lg:flex gap-8 justify-between ${
            reverse && "flex-flow-reverse"
          }`}
        >
          <div className="lg:1/2">
            <h6 className="text-green bg-[#ecf5e8] w-fit rounded-md px-5 py-2 font-bold">
              {title}
            </h6>
            <h3 className="lg:text-5xl text-3xl font-bold pb-8 leading-tight">
              {text}
            </h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit . Quasi,
              doloribus. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quasi, doloribus. Lorem ipsum dolor sit amet consectetur.
            </p>

            {children}
          </div>
          <div className="lg:1/2">
            <div
              className={`lg:flex w-full ${
                reverse ? "justify-start" : "justify-end"
              }`}
            >
              <img src={image} alt="" className="rounded-t-[300px]" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Card = ({ text, tilt }) => {
    return (
      <div
        className={`flex items-center w-fit gap-2 p-4 border rounded-lg cursor-pointer transition-transform transform hover:scale-105 bg-white shadow-xl ${tilt}`}
      >
        <IoCheckmarkCircle className="text-xl text-orange" />
        <span className="font-bold text-gray-800">{text}</span>
      </div>
    );
  };

  const ProgressBar = ({ value, text }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="w-28">
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: "#63Ab45",
              textColor: "#000",
              trailColor: "#d6d6d6",
              backgroundColor: "#f8f8f8",
            })}
          />
        </div>
        <p className="font-bold mt-2">{text}</p>
      </div>
    );
  };
  return (
    <div>
      <Section
        image={ServiceImg}
        text="Le service d’accompagnement le plus vivant et passionné du monde du voyage"
        title="Bienvenue chez Customer Assistance77"
      >
        <div>
          {categories.map((category) => (
            <Card
              key={category.text}
              text={category.text}
              tilt={category.tilt}
            />
          ))}
        </div>
      </Section>

      <Section
        image={ServiceImg01}
        text="L’opportunité idéale pour explorer, voyager, et se faire accompagner."
        title="Explorez nos solutions voyage"
        reverse
      >
        <div className="flex justify-center items-center bg-gray-100 my-12">
          <div className="bg-white p-8 rounded-lg shadow-xl flex lg:flex-row flex-col items-center lg:gap-16 gap-4 w-full justify-center">
            <ProgressBar value={50} text="Clients Satisfaits" />
            <ProgressBar value={50} text="Fiabilité des services" />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Services;
