import React from "react";
import X69 from "../X69";
import X70 from "../X70";
import "./HooderHeartrate.css";

function HooderHeartrate(props) {
  const { x6, heartRate, x69Props, x70Props } = props;

  return (
    <div className="hooder-heartrate">
      <div className="hooder-5 border-2px-mist-gray">
        <div className="x68-5">
          <img className="x6-6" src={x6} />
          <div className="event-mark-6">
            <div className="heart-rate-6 sfcompact-bold-brick-red-13px">{heartRate}</div>
          </div>
        </div>
        <X69 className={x69Props.className} />
        <X70 className={x70Props.className} />
      </div>
    </div>
  );
}

export default HooderHeartrate;
