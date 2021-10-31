import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import "./SimplifiedHeader.css";

function SimplifiedHeader(props) {
  const { className, detailedHeaderProps } = props;

  return (
    <div className={`simplified-header ${className || ""}`}>
      <div className="overlap-group3">
        <DetailedHeader className={detailedHeaderProps.className}>{detailedHeaderProps.children}</DetailedHeader>
        <img className="x20-1" src="/img/file----20@1x.png" />
        <img className="x19" src="/img/file----19@1x.png" />
      </div>
    </div>
  );
}

export default SimplifiedHeader;
