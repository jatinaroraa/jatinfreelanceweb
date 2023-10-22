import React, { useState } from "react";
import Iframe from "react-iframe";
import { Button, Modal } from "antd";
import "./iframe.css";
export default function ProjectListIframe({ url }) {
  return (
    <>
      <div className="iframeClass">
        <Iframe
          url={url}
          width="97%"
          height="280px"
          display="block"
          position="relative"
        />
      </div>
    </>
  );
}
