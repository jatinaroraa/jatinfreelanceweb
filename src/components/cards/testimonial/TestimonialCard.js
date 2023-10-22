import React from "react";
import "./testimonial.css";
export default function TestimonialCard({
  customerPosition,
  customerName,
  link,
  message,
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
        <p className="description">{message}</p>
      </div>
    </div>
  );
}
