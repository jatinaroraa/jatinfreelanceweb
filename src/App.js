import logo from "./logo.svg";
import "./App.css";
import NavBar from "./pages/navBar";
import Home from "./pages/home";
import Services from "./pages/Services";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import Contactus from "./pages/contactus";
import { useEffect, useRef } from "react";
import Aos from "aos";
import { NavBar2 } from "./pages/Navbar2";
import BrandsSlider from "./pages/brandsSlider";

function App() {
  const ref = useRef(null);
  useEffect(() => {
    Aos.init();
  }, []);
  const handleScroll = (id) => {
    console.log("hititi");
    // ref.current?.scrollIntoView({ behavior: "smooth" });
    let section = document.getElementById(id);
    section.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      style={{
        backgroundColor: "black",
        height: "100%",
        paddingBottom: "50px",
      }}
    >
      {/* <NavBar handleScroll={handleScroll} /> */}
      <NavBar2 />
      <Home />
      <BrandsSlider />
      <Services />
      <Projects />
      <Testimonials />
      <Contactus />
    </div>
  );
}

export default App;
