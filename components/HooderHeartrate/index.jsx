import React from "react";
import X692 from "../X692";
import X70 from "../X70";
import "./HooderHeartrate.css";

function HooderHeartrate(props) {
  const { className, x70Props, x70Props2 } = props;

  return (
    <div className={`hooder-heartrate ${className || ""}`}>
      <div className="hooder-4 border-2px-mist-gray">
        <div className="x68-13">
          <div className="overlap-group-34">
            <div className="event-mark-13">
              <div className="heart-rate-13 sfcompact-bold-brick-red-13px">Heart rate</div>
            </div>
            <img className="x6-12" src="/img/file---6@1x.png" />
          </div>
        </div>
        <X692 className={x70Props.className} />
        <X70 className={x70Props2.className} />
      </div>
    </div>
  );
}

export default HooderHeartrate;
