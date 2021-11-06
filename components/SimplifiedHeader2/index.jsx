import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader2 from "../DetailedHeader2";
import "./SimplifiedHeader2.css";

function SimplifiedHeader2(props) {
  const { className, detailedHeader2Props } = props;

  return (
    <div className={`simplified-header-10 ${className || ""}`}>
      <div className="overlap-group6-5">
        <div className="overlap-group6-item"></div>
        <div className="overlap-group6-item"></div>
        <DetailedHeader2 className={detailedHeader2Props.className}>{detailedHeader2Props.children}</DetailedHeader2>
        <img className="x20-10" src="/img/file----20@1x.png" />
        <img className="x19-2" src="/img/file----19@1x.png" />
      </div>
    </div>
  );
}

export default SimplifiedHeader2;
