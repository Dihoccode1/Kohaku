import React from "react";
import BrandBanner from "./BrandBanner/BrandBanner";

const BranBd = () => {
  return (
    <div className="mx-auto max-w-7xl py-8 flex items-center justify-between px-2">
      {[1, 2, 3, 4, 5].map((brandBanner) => (
        <BrandBanner />
      ))}
    </div>
  );
};

export default BranBd;
