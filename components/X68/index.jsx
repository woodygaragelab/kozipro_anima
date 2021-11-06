import React from "react";
import "./X68.css";

function X68(props) {
  const { x6, className } = props;

  return (
    <div className={`x68 ${className || ""}`}>
      <div className="overlap-group-9">
        <div className="event-mark">
          <div className="heart-rate sfcompact-bold-dove-gray-13px">Heart rate</div>
        </div>
        <img className="x6-1" src={x6} />
      </div>
    </div>
  );
}

export default X68;
