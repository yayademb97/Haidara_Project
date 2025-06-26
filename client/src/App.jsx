import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";


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
      <Footer />
    </>
  );
}

export default App;
