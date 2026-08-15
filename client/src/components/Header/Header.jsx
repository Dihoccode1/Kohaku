import React from "react";
import Logo from "./Logo/Logo";
import NavBar from "./NavBar/NavBar";

const Header = () => {
  return (
    <div className="w-full max-w-7xl  mx-auto my-5 flex justify-between items-center">
      <Logo />
      <NavBar />
    </div>
  );
};

export default Header;
