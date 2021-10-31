import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import "./SimplifiedHeader2.css";

function SimplifiedHeader2(props) {
  const { className, detailedHeaderProps } = props;

  return (
    <div className={`simplified-header-10 ${className || ""}`}>
      <div className="overlap-group-32">
        <div className="overlap-group-item"></div>
        <div className="overlap-group-item"></div>
        <DetailedHeader className={detailedHeaderProps.className}>{detailedHeaderProps.children}</DetailedHeader>
        <img className="x20-11" src="/img/file----20@1x.png" />
        <Link to="/login1">
          <img className="x19-4" src="/img/file----19@1x.png" />
        </Link>
      </div>
    </div>
  );
}

export default SimplifiedHeader2;
