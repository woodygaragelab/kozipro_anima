import React from "react";
import "./X6822.css";

function X6822(props) {
  const { className } = props;

  return (
    <div className={`x68 ${className || ""}`}>
      <div className="overlap-group-12">
        <div className="event-mark">
          <div className="heart-rate sfcompact-bold-dove-gray-13px">Heart rate</div>
        </div>
        <img className="x6-10" src="/img/file---6@1x.png" />
      </div>
    </div>
  );
}

export default X6822;
