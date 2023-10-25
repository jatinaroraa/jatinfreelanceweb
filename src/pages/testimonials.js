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
    {
      customerPosition: "CEO",
      customerName: "Ethan Johnson",
      link: require("../assets/clients/ethanJohnson.png"),
      message:
        "I can't thank Mr Developer enough for their exceptional work. Their web development skills transformed our online presence, and the results have been nothing short of amazing",
    },
    {
      customerPosition: "Founder",
      customerName: "Isabella Martinez",
      link: require("../assets/clients/isabell.png"),
      message:
        "Working with Jatin Arora was a game-changer for our business. Their app development expertise took our project to the next level, and the quality of their work is truly outstanding.",
    },
    {
      customerPosition: "Founder",
      customerName: "Sophia Wilson",
      link: require("../assets/clients/sophia.png"),
      message:
        "We feel incredibly fortunate to have found Mr Freelance Developer. Their dedication to detail, punctuality, and exceptional design sense have made our website stand out among the competition",
    },
    {
      customerPosition: "Markiting expert",
      customerName: "Arjun Sharma",
      link: require("../assets/clients/arjun.png"),
      message:
        "Simply put, Mr Developer is the best choice for your project. Their web design skills and commitment to user experience are unmatched. Our website is a true testament to their talents",
    },
    {
      customerPosition: "Founder",
      customerName: "Vikram Singh",
      link: require("../assets/clients/vikramsingh.png"),
      message:
        "We couldn't be happier with our decision to hire Jatin Arora for our mobile app. Their coding prowess, reliability, and the impact our app has had on our users is simply remarkable",
    },
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
          {/* <p className="pTag">Some of my client reviews</p> */}
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
                message={x.message}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Element>
  );
}
