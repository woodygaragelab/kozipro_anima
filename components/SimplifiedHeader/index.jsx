import React from "react";
import DetailedHeader from "../DetailedHeader";
import "./SimplifiedHeader.css";

function SimplifiedHeader(props) {
  const { className } = props;

  return (
    <div className={`simplified-header-1 ${className || ""}`}>
      <div className="overlap-group-3">
        <DetailedHeader />
        <img className="x20-1" src="/img/file----20@1x.png" />
        <img className="x19-1" src="/img/file----19@1x.png" />
      </div>
    </div>
  );
}

export default SimplifiedHeader;
