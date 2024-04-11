import React from "react";
import HeaderCSS from "../HeaderComponent/Header.module.css";
import bg1 from "/assets/background/6f1aee17e7f12bcea7c7f1fa4f5cbf06.jpg";
import bg2 from "/assets/background/917f68b6c0a1ff2631af57895e4be53d.jpg";

import Navbar from "./Navbar";
import HeroPage from "./HeroPage";

const Header = () => {
  const images = [bg1, bg2];
  const randomeIndex = Math.floor(Math.random() * images.length )
  const randomImage = images[randomeIndex]


  return <header className={HeaderCSS.header} style={{backgroundImage: `url(${randomImage})`}}>
    <>
      <Navbar/>
      <HeroPage/>
    </>
  </header>;
};

export default Header;
