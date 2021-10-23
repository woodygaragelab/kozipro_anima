import React from "react";
import { Link } from "react-router-dom";
import X6932 from "../X6932";
import "./HooderScore2.css";

function HooderScore2(props) {
  const { heartRate, x6, message, x8 } = props;

  return (
    <div className="hooder-score-4">
      <div className="hooder-9 border-2px-mist-gray">
        <Link to="/eventactivity2">
          <div className="x68-14">
            <div className="overlap-group-39">
              <div className="event-mark-14">
                <div className="heart-rate-14 sfcompact-bold-dove-gray-13px">{heartRate}</div>
              </div>
              <img className="x6-13" src={x6} />
            </div>
          </div>
        </Link>
        <X6932 />
        <Link to="/textinputactivity1">
          <div className="x70-14">
            <div className="overlap-group2-25">
              <div className="message-mark-15">
                <div className="message-15 sfcompact-bold-dove-gray-13px">{message}</div>
              </div>
              <img className="x8-15" src={x8} />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HooderScore2;
