import React from "react";
import image from "../assets/Trollface.png";

function Header() {
  return (
    <header>
      <img src={image} alt="troll" />
      <p>Meme Generator</p>
    </header>
  );
}

export default Header;
