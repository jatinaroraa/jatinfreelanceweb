import React from "react";
import "./testimonial.css";
export default function TestimonialCard({
  customerPosition,
  customerName,
  link,
}) {
  return (
    <div
      style={{
        marginTop: "150px",
        // paddingBottom: "0px",
      }}
    >
      <div className="mainDiv">
        <img src={link} className="imageTag" />
        <div className="headingsStyle">
          <h2>{customerName}</h2>
          <p>{customerPosition}</p>
        </div>
        <p className="description">
          “ aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
    </div>
  );
}
