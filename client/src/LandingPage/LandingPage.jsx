import React from "react";
import Header from "../components/Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import Banner from "./Banner/Brand";

const LandingPage = () => {
  return (
    <div className="w-full max-w-screen h-screen px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8  bg-primary">
      <Header />
      <HeroSection />
      <Banner />
    </div>
  );
};

export default LandingPage;
