import "./Navbar2.css";
import React, { useState } from "react";

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
export function NavBar2() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link className="nav-logo">
            Jatin A.
            {/* <i className="fa fa-code"></i> */}
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="services"
                smooth={true}
                spy={true}
                duration={500}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1000}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                duration={1000}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Testimonials
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
