import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import "./SimplifiedHeader2.css";

function SimplifiedHeader2(props) {
  const { className } = props;

  return (
    <div className={`simplified-header-6 ${className || ""}`}>
      <div className="overlap-group-6">
        <div className="overlap-group-item"></div>
        <div className="overlap-group-item"></div>
        <DetailedHeader />
        <img className="x20-7" src="/img/file----20@1x.png" />
        <Link to="/login1">
          <img className="x19-1" src="/img/file----19@1x.png" />
        </Link>
      </div>
    </div>
  );
}

export default SimplifiedHeader2;
