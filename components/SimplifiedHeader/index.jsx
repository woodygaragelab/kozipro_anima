import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import "./SimplifiedHeader.css";

function SimplifiedHeader(props) {
  const { className, detailedHeaderProps } = props;

  return (
    <div className={`simplified-header ${className || ""}`}>
      <div className="overlap-group1-1">
        <DetailedHeader className={detailedHeaderProps.className} />
        <img className="x20-2" src="/img/file----20@1x.png" />
        <Link to="/login1">
          <img className="x19-1" src="/img/file----19@1x.png" />
        </Link>
      </div>
    </div>
  );
}

export default SimplifiedHeader;
