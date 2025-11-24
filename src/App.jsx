import React, { useState } from "react";
import bulbOn from "./assets/download (1).jpg";
import bulbOff from "./assets/download.jpg";
import ColorButton from "./buttoncolor";
import './App.css'
import Fibanocci from "./fibonaccii";

const Bulb = () => {
  const [bulb, setBulb] = useState(bulbOff);

  const turnOn = () => setBulb(bulbOn);
  const turnOff = () => setBulb(bulbOff);

  return (
    <>
    <div className="app">
      <div style={{ textAlign: "center" }}>
      <img src={bulb} alt="bulb" width={200} />

      <br /><br />

      <button onClick={turnOn}>Turn ON</button>
      <button onClick={turnOff}>Turn OFF</button>
    </div>
    </div>
    <div>
      <ColorButton/>
    </div>
    <Fibanocci/>

  
    </>
    
    
  );
};

export default Bulb;
