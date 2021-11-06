import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader2 from "../DetailedHeader2";
import "./SimplifiedHeader.css";

function SimplifiedHeader(props) {
  const { className, detailedHeader2Props } = props;

  return (
    <div className={`simplified-header ${className || ""}`}>
      <div className="overlap-group-15">
        <DetailedHeader2 className={detailedHeader2Props.className}>{detailedHeader2Props.children}</DetailedHeader2>
        <img className="x20" src="/img/file----20@1x.png" />
        <Link to="/login1">
          <img className="x19" src="/img/file----19@1x.png" />
        </Link>
      </div>
    </div>
  );
}

export default SimplifiedHeader;
