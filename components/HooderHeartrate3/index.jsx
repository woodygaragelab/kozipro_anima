import React from "react";
import X6942 from "../X6942";
import X704 from "../X704";
import "./HooderHeartrate3.css";

function HooderHeartrate3(props) {
  const { heartRate, x6, className } = props;

  return (
    <div className={`hooder-heartrate ${className || ""}`}>
      <div className="hooder-1 border-2px-mist-gray">
        <div className="x68-12">
          <div className="overlap-group-30">
            <div className="event-mark-12">
              <div className="heart-rate-12 sfcompact-bold-brick-red-13px">{heartRate}</div>
            </div>
            <img className="x6-11" src={x6} />
          </div>
        </div>
        <X6942 />
        <X704 />
      </div>
    </div>
  );
}

export default HooderHeartrate3;
