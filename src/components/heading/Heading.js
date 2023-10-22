import React from "react";
import "./heading.css";
export default function Heading({ title }) {
  return (
    <div className="headingMainDiv">
      <img src={require("../../assets/Ellipse 1.png")} className="eclipse" />
      <h2 className="serviceH2">{title}</h2>
    </div>
  );
}
