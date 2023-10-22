import React from "react";
import "./home.css";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { Button } from "antd";
export default function Home() {
  console.log(window.innerWidth, "widht");
  return (
    <div className="mainHomeDiv">
      {/* <div className="topButtonDiv">
        <Button className="hireMeButtonTop">Hire Me</Button>
      </div> */}

      <div
        className="sectionText"
        data-aos="fade-right"
        data-aos-duration="10000"
      >
        <h2 className="helloH2">Hello,</h2>
        <h2 className="nameH2">I am Jatin Arora </h2>
        <p className="uiuxPTag">WEB AND APP DEVELOPER</p>
        <div className="topButtonDiv">
          <Button className="hireMeButtonTop">Hire Me</Button>
        </div>
        <p className="description"> here is description </p>
        <Button className="hireMeButton">Hire Me</Button>
      </div>

      <div
        className="profileDiv"
        data-aos="fade-left"
        data-aos-duration="10000"
      >
        <div className="profilePic"></div>
      </div>
    </div>
  );
}
