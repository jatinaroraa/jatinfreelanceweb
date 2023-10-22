import React from "react";
import Heading from "../components/heading/Heading";
import ProjectCard from "../components/cards/projectCard/ProjectCard";
import Iframe from "react-iframe";
import "./Project.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import ProjectListIframe from "../components/iframe/ProjectListIframe";
import { webList } from "../utils/weblists";
import { images } from "../utils/importimages";
export default function Projects() {
  return (
    <Element name="portfolio">
      <div
        style={
          {
            // paddingTop: "10px",
          }
        }
      >
        <Heading title="Portfolio" />

        <div className="projectListFrameDiv">
          {webList.map((list) => {
            return <ProjectListIframe url={list.url} />;
          })}
        </div>
        <div
          style={{
            alignContent: "center",
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            //   backgroundColor: "red",
          }}
        >
          {images.map((link) => {
            return <ProjectCard link={link} title="first proj" />;
          })}
        </div>
      </div>
    </Element>
  );
}
