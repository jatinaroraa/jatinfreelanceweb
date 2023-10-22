import React from "react";
import "./services.css";
import ServiceCard from "../components/cards/ServiceCard";
import Heading from "../components/heading/Heading";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
export default function Services() {
  return (
    <Element id="services">
      <div
        style={{
          backgroundColor: "black",
          margin: " 0px",
          padding: "40px 0px",
        }}
      >
        {/* <div
        style={{
          margin: "0px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img src={require("../assets/Ellipse 1.png")} className="eclipse" />
        <h2 className="serviceH2">services i offer</h2>
      </div> */}
        <Heading title="services i offer" />
        <div
          data-aos="zoom-in-down"
          data-aos-duration="30000"
          className="serviceCardDiv"
        >
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </Element>
  );
}
