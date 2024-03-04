import React from "react";
import { useState } from "react";
import NavCSS from "./Navbar.module.css";
import { Link } from "react-scroll";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const scrolling = () => {
    setScroll(true);
  };

  return (
    <div className={NavCSS.nav_Container}>
      <div className={NavCSS.logo}>
        <h3>ExploreLagos</h3>
      </div>
      <div className={NavCSS.navbar}>
        <li>
          <Link
            to="places"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            onClick={scrolling}
          >
            Places to go
          </Link>
        </li>
        <li>History</li>
        <li>Contact</li>
        <li>Sign up/in</li>
        <li>EN</li>
      </div>
    </div>
  );
}

export default Navbar;
