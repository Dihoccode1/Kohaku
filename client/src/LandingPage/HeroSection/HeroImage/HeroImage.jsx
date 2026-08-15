import React from "react";

import { data } from "../../../assets/assets.js";
const HeroImage = () => {
  return (
    <div className="h-112 w-full ">
      <img src={data.hero.src} className="object-contain w-full h-fit" alt="" />
    </div>
  );
};

export default HeroImage;
