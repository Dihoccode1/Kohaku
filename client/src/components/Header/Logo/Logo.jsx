import React from "react";

const Logo = () => {
  return (
    <div className=" max-w-43 w-full flex items-center gap-2 ">
      <div className="flex items-center -space-x-4">
        <div className="w-6.25 h-6.25 rounded-full border-2 bg-black"></div>
        <div className="w-6.25 h-6.25 rounded-full border-2"></div>
      </div>
      <h2 className="font-semibold">Kohaku</h2>
    </div>
  );
};

export default Logo;
