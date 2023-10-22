import React, { useState } from "react";
import "./navBar.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
export default function NavBar({ handleScroll }) {
  console.log(window.innerWidth, "widht ");
  const [width, setWidth] = useState(window.innerWidth);
  const [toggle, setToggle] = useState(false);
  // AiOutlineMenu
  return (
    <div
      id="project"
      style={{
        padding: "20px 5px",
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",

        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "transparent",
        // height: "8vh",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="navBarContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            width: "20%",
          }}
        >
          <h2 className="logoText">Jatin</h2>
        </div>
        {width < 700 ? (
          <div
            onClick={() => {
              setToggle(!toggle);
            }}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <AiOutlineMenu size={30} color="white" />
          </div>
        ) : (
          <div className="navBarLinkList">
            <Link
              to="services"
              className="navLi"
              smooth={true}
              spy={true}
              duration={500}
            >
              Services{" "}
            </Link>
            <Link
              to="portfolio"
              className="navLi"
              spy={true}
              smooth={true}
              duration={1000}
            >
              portfolio{" "}
            </Link>
            <Link
              to="testimonials"
              className="navLi"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Testimonials{" "}
            </Link>
            <Link
              to="contact"
              className="navLi"
              spy={true}
              smooth={true}
              duration={1000}
            >
              Contact{" "}
            </Link>
          </div>
        )}
        {width < 700 ? "" : <div></div>}
      </div>
      <div className="navBarLinkListInner">
        <Link
          to="services"
          className="navLi"
          smooth={true}
          spy={true}
          duration={500}
        >
          Services{" "}
        </Link>
        <Link
          to="portfolio"
          className="navLi"
          spy={true}
          smooth={true}
          duration={1000}
        >
          portfolio{" "}
        </Link>
        <Link
          to="testimonials"
          className="navLi"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Testimonials{" "}
        </Link>
        <Link
          to="contact"
          className="navLi"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}
