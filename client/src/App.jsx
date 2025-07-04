import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import Services from "./components/Services/Services";
import Offers from "./components/Offers/Offers";
import Tours from "./components/Tours/Tours";
import Explore from "./components/Explore/Explore";
import Blog from "./components/Blog/Blog";


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1500
    })
  }, [])
    
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Offers />
      <Tours />
      <Explore />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
