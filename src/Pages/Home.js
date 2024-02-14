import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Experiences from "../components/experiences/Experiences";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";
import ScrollProgress from "../components/progressScroll/ScrollProgress";
const Home = () => {
  return (
    <div>
      <Navbar />
      <ScrollProgress></ScrollProgress>
      <div className="container">
        <Header />
        <About />
        <Experiences />
        <Skills />
        <Projects />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
