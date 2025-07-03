import React from "react";
import { FaComment, FaUser } from "react-icons/fa";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Blog = () => {
  const Blogs = ({ title, text, image }) => {
    return (
      <div className="max-w-sm rounded-lg overflow-hidden shadow-xl p-4">
        {image && (
          <div className="relative h-64 mb-12">
            <div className="overflow-hidden rounded-lg relative h-full">
              <img
                src={image}
                alt=""
                className="w-full rounded-lg absolute h-full hoverImg"
              />
            </div>
            <div className="bg-orange text-white px-8 py-1 w-fit absolute -bottom-4 left-4 z-10 -rotate-[10deg]">
              {title}
            </div>
          </div>
        )}
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <span className="mr-2 flex items-center gap-2">
            <FaUser className="text-green" /> Client
          </span>
          <span className="flex items-center gap-2">
            <FaComment /> 0 Avis
          </span>
        </div>
        <div className="font-bold text-2xl mb-2 hover:text-green">{text}</div>
      </div>
    );
  };

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
  return (
    <div>
      <section className="max-w-[1320px] mx-auto py-24 px-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="relative w-fit px-8 py-2 flex items-center justify-center">
              <span className="bg-green rounded-md opacity-15 absolute w-full h-full z-10"></span>
              <h6 className="text-green relative font-semibold">
                Expériences Clients ou Témoignages Inspirants
              </h6>
              <h3 className="lg:text-5xl text-3xl font-bold pb-8 lg:w-2/3 py-4">
                Accompagnement lors de votre voyage
              </h3>
            </div>
            <button className="lg:block hidden bg-green text-white rounded-lg text-lg shadow py-4 px-8 font-bold">
              Voir Plus
            </button>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
            <Blogs
              text="Informations essentielles avant et pendant le voyage"
              title="Accompagnement"
              image="/blog-img.png"
            />
            <Blogs
              text="Nos conseils clés pour un départ sans stress"
              title="Indispensables"
              image="/blog-img-01.png"
            />
            <div className="flex flex-col gap-2">
              <Blogs
                text="Voyagez l’esprit léger grâce à nos recommandations"
              />
              <Blogs
                text="J’ai voyagé l’esprit tranquille, ils ont pris soin de chaque détail."
              />
              <Blogs
                text="De l’enregistrement jusqu’à l’arrivée, j’ai été accompagné avec attention."
              />
            </div>
          </div>
        </div>
      </section>

      <div>
        <Carousel 
        responsive={responsive} 
        infinite autoPlay={true} 
        itemClass="px-4"
        >
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-img-09.png" alt="" className="rounded-lg h-full object-cover hoverImg" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-img-08.png" alt="" className="rounded-lg h-full object-cover hoverImg" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-img-10.png" alt="" className="rounded-lg h-full object-cover hoverImg" />
          </div>
          <div className="h-[298px] relative overflow-hidden">
            <img src="/blog-img-11.png" alt="" className="rounded-lg h-full object-cover hoverImg" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Blog;
