import React from "react";
import { Link } from "react-router-dom";
import X692 from "../X692";
import "./HooderScore2.css";

function HooderScore2(props) {
  const { heartRate, x6, message, x8 } = props;

  return (
    <div className="hooder-score-4">
      <div className="hooder-11 border-2px-mist-gray">
        <Link to="/eventactivity2">
          <div className="x68-15">
            <div className="overlap-group-48">
              <div className="event-mark-15">
                <div className="heart-rate-15 sfcompact-bold-dove-gray-13px">{heartRate}</div>
              </div>
              <img className="x6-17" src={x6} />
            </div>
          </div>
        </Link>
        <X692 />
        <Link to="/textinputactivity1">
          <div className="x70-13">
            <div className="overlap-group2-26">
              <div className="message-mark-15">
                <div className="message-15 sfcompact-bold-dove-gray-13px">{message}</div>
              </div>
              <img className="x8-16" src={x8} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HooderScore2;
