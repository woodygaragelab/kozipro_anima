import React from "react";
import HeartMark3 from "../HeartMark3";
import "./X6942.css";

function X6942(props) {
  const { className } = props;

  return (
    <div className={`x69 ${className || ""}`}>
      <div className="overlap-group1-1">
        <HeartMark3 />
        <img className="x7" src="/img/file---7@1x.png" />
      </div>
    </div>
  );
}

export default X6942;
