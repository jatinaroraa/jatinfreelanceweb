import React from "react";
import "./servicecard.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export default function ServiceCard() {
  return (
    <div className="cardMain">
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <h2 className="heading">heading</h2>
      </div>
      <div className="descriptionDiv">
        <p className="subHead"> what does it include?</p>

        <li>
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          custom designs
        </li>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          helpfull inbuild tools
        </li>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          premium software for growth{" "}
        </li>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          accurate updates
        </li>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          can modify according to you
        </li>
        {/* <p className="subHead">+</p> */}

        <p className="subHead">free</p>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          free modifications till 3 months
        </li>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          will teach you website strategies
        </li>
        <li>
          {" "}
          <CheckCircleRoundedIcon
            fontSize="small"
            style={{
              color: "#bc93cf",
            }}
          />{" "}
          free consultation
        </li>
      </div>
    </div>
  );
}
