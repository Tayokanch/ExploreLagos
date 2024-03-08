import React from "react";
import { useState, useEffect } from "react";
import MainCSS from "../MainComponent/Main.module.css";
import Locations from "./Locations";
function Main() {
  return (
    <main className={MainCSS.main} id="places">
      <Locations />
    </main>
  );
}

export default Main;
