import Navbar from "./Navbar";
import React from "react";
import Hero from "./Hero";
import Skills from "./Skills";
import Project from "./Project";
import InternshipsCertificates from "./InternshipsCertificates";
import Footer from "./Footer";
import Education from "./Education";
const Main = () => {
  return (
    <>
      <div className="bg-indigo-600">
        <Navbar />
        <Hero/>
        <Education/>
        <Skills/>
        <Project/>
        <InternshipsCertificates/>
        
        <Footer/>
        
      </div>
    </>
  );
};

export default Main;
