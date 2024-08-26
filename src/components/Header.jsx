import React from "react";
import "../App.css";
import { Tooltip } from "react-tooltip";

const Header = () => {
  const ruppy = "/ruppy.png";
  const jojoInfo =
    "An illustration of me by my friend Jojo. Click to know more.";
  const jojoLink = "https://www.instagram.com/jo.joart";

  const handleImageClick = () => {
    window.open(jojoLink, '_blank');
  }

  return (
    <header className="flex flex-row items-center justify-center">
      <img
        data-tooltip-id="1"
        data-tooltip-content={jojoInfo}
        src={ruppy}
        alt="ruppy"
        className="w-[8%] cursor-pointer"
        onClick={handleImageClick}
      />
      <Tooltip className="skill-tt text-xs text-white" id="1" />
      <h1 className="header-name text-4xl md:text-7xl">RUPESH</h1>
    </header>
  );
};

export default Header;
