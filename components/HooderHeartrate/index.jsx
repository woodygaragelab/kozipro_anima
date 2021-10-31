import React from "react";
import X69 from "../X69";
import X70 from "../X70";
import "./HooderHeartrate.css";

function HooderHeartrate(props) {
  const { className } = props;

  return (
    <div className={`hooder-heartrate ${className || ""}`}>
      <div className="hooder-1 border-2px-mist-gray">
        <div className="x68-12">
          <div className="overlap-group-30">
            <div className="event-mark-12">
              <div className="heart-rate-12 sfcompact-bold-brick-red-13px">Heart rate</div>
            </div>
            <img className="x6-5" src="/img/file---6@1x.png" />
          </div>
        </div>
        <X69 />
        <X70 />
      </div>
    </div>
  );
}

export default HooderHeartrate;
