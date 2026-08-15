import React from "react";

const NavBar = () => {
  return (
    <nav className="h-full  max-w-[256px] w-full ">
      <ul className="flex items-center justify-between  ">
        <li className=" font-semibold">About</li>
        <li className="font-semibold">Works</li>
        <li className="font-semibold">Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
