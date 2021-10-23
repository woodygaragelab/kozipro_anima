import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import "./SimplifiedHeader2.css";

function SimplifiedHeader2(props) {
  const { className, detailedHeaderProps } = props;

  return (
    <div className={`simplified-header-10 ${className || ""}`}>
      <div className="overlap-group6-4">
        <div className="overlap-group6-item"></div>
        <div className="overlap-group6-item"></div>
        <DetailedHeader className={detailedHeaderProps.className}>{detailedHeaderProps.children}</DetailedHeader>
        <img className="x20-11" src="/img/file----20@1x.png" />
        <img className="x19-10" src="/img/file----19@1x.png" />
      </div>
    </div>
  );
}

export default SimplifiedHeader2;
