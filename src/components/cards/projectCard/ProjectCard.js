import React from "react";
import "./projectcard.css";
export default function ProjectCard({ link, title }) {
  return (
    <div
      style={{
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "30px",
        // height: "60vh",
      }}
    >
      <img
        src={link}
        style={{
          height: "50%",
          width: "70%",
        }}
      />
      {/* <h2 className="titleProj">{title}</h2> */}
    </div>
  );
}
