import React from "react";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import About from "../components/about/About";
import Services from "../components/services/Services";
import Skills from "../components/skills/Skills";
import Blogs from "../components/blog/Blogs";
import Contacts from "../components/contacts/Contacts";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container">
        <Header />
        <About />
        <Services />
        <Skills />
        <Blogs />
        <Contacts />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
