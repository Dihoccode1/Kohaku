import React from "react";
import MainContent from "./MainContent/MainContent";
import HeroImage from "./HeroImage/HeroImage";

const HeroSection = () => {
  return (
    <div className=" max-w-7xl w-full flex gap-10  h-154  justify-center mx-auto">
      <div className="pt-10 py-10 pb-20 gap-4 flex w-full ">
        <MainContent />
        <HeroImage />
      </div>
    </div>
  );
};

export default HeroSection;
