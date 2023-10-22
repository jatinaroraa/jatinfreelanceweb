import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import "./contactus.css";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "#fff",
  backgroundColor: "white",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
export default function Contactus() {
  return (
    <Element id="contact">
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "white",
            // fontSize: "26px",
            // fontWeight: "600",
          }}
        >
          Contactus
        </h1>

        <div className="contactMainDiv">
          <div className="followDiv">
            <p className="followtitle">Follow us on:</p>
            <div className="iconDiv">
              <li>
                <FaSquareInstagram size={30} />
              </li>

              <li>
                <FaFacebookSquare size={30} />
              </li>
              <li>
                <FaTwitter size={30} />
              </li>
            </div>
          </div>

          <div className="contactForm">
            <label>Enter your name</label>
            <input placeholder="name" type="text" />
            <label>Enter your email</label>

            <input placeholder="email" type="email" />
            <label>Enter your whatsapp number</label>

            <input placeholder="Whatsapp Number" type="number" />
            <label>What service do you need ?</label>

            <input placeholder=" service you need" type="text" />
            <label>Where did you hear about me ?</label>

            <input placeholder="Where did you hear about me ?" type="text" />
            <input
              placeholder="submit"
              type="button"
              className="buttonSubmit"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
