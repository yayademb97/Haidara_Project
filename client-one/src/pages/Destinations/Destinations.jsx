import CardSlider from "../../components/CardSlider/CardSlider"


const Destinations = () => {
  return (
    <div>
      <section className="relative bg-black lg:h-[380px]">
        <img src="/mali_1.png" alt="" className="absolute h-full w-full object-cover" />
        <div className="flex flex-col items-center justify-center relative z-10 lg:h-full h-[380px] max-w-[1380px] px-6 lg:pt-0 pt-16 mx-auto">
            <span className="lg:text-6xl text-3xl text-white text-center font-bold relative">Explorer le Monde</span>
            <p className="text-white text-center text-2xl my-2">Avec Customer Assistance77, Voyagez sans angoisse</p>
        </div>
      </section>
      <CardSlider />
    </div>
  )
}

export default Destinations
