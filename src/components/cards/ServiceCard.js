import React from "react";
import "./servicecard.css";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
export default function ServiceCard({ data }) {
  return (
    <div className="cardMain">
      <div
        style={{
          backgroundColor: "black",
        }}
      >
        <h2 className="heading">{data.heading}</h2>
      </div>
      <div className="descriptionDiv">
        <p className="subHead"> what does it include?</p>
        {data?.lists.map((x) => {
          return (
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                style={{
                  color: "#bc93cf",
                }}
              />{" "}
              {x.name}
            </li>
          );
        })}

        <p className="subHead">Benefits (free) </p>
        {data.benifits.map((x) => {
          return (
            <li>
              <CheckCircleRoundedIcon
                fontSize="small"
                style={{
                  color: "#bc93cf",
                }}
              />
              {x.name}
            </li>
          );
        })}
      </div>
    </div>
  );
}
