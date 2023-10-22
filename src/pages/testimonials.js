import React, { useEffect, useRef, useState } from "react";
import Heading from "../components/heading/Heading";
import "./testimonial.css";
import TestimonialCard from "../components/cards/testimonial/TestimonialCard";
import profile from "../assets/profile.png";
import link from "../assets/link.jpg";
import Carousel from "react-elastic-carousel";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
export default function Testimonials() {
  const testimonialData = [
    { customerPosition: "ceo", customerName: "hello", link: "" },
    { customerPosition: "ceo", customerName: "hello", link: "" },
    { customerPosition: "ceo", customerName: "hello", link: "" },
    { customerPosition: "ceo", customerName: "hello", link: "" },
  ];

  return (
    <Element id="testimonials">
      <div className="testimonialsDiv">
        <Heading title="testimonials" />
        <div
          style={{
            //   alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <p className="pTag">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </p>
        </div>
        <div
          className="testimonialCard"
          data-aos="fade-right"
          data-aos-duration="50000"
        >
          <Carousel
            style={{
              height: "100%",
            }}
          >
            {testimonialData.map((x) => (
              <TestimonialCard
                customerPosition={x.customerPosition}
                customerName={x.customerName}
                link={x.link}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Element>
  );
}
