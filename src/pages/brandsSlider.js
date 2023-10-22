import React from "react";
import Marquee from "react-fast-marquee";
import "./slider.css";
export default function BrandsSlider() {
  return (
    <Marquee className="sliderClass">
      <img
        src={require("../assets/brands/Dunzo.png")}
        style={{
          height: "100px",
          width: "200px",
        }}
      />

      <img
        src={require("../assets/brands/gendomilanologo.avif")}
        style={{
          height: "70px",
          width: "200px",
        }}
      />

      <img
        src={require("../assets/brands/subway-3-logo-png-transparent.png")}
        style={{
          height: "100px",
          width: "200px",
        }}
      />

      <img
        src={require("../assets/brands/huppmelogo.png")}
        style={{
          height: "70px",
          width: "200px",
        }}
      />

      <img
        src={require("../assets/brands/sudo24logo.png")}
        style={{
          height: "70px",
          width: "150px",
        }}
      />
    </Marquee>
  );
}
