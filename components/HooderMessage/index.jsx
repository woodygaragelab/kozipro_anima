import React from "react";
import { Link } from "react-router-dom";
import X702 from "../X702";
import "./HooderMessage.css";

function HooderMessage(props) {
  const { heartRate, x6, score, x7 } = props;

  return (
    <div className="hooder-message">
      <div className="hooder-1 border-2px-mist-gray">
        <Link to="/eventactivity2">
          <div className="x68-12">
            <div className="overlap-group-24">
              <div className="event-mark-12">
                <div className="heart-rate-12 sfcompact-bold-dove-gray-13px">{heartRate}</div>
              </div>
              <img className="x6-11" src={x6} />
            </div>
          </div>
        </Link>
        <Link to="/main">
          <div className="x69-7">
            <div className="overlap-group1-11">
              <div className="heart-mark-7">
                <div className="score-8 sfcompact-bold-dove-gray-13px">{score}</div>
              </div>
              <img className="x7-7" src={x7} />
            </div>
          </div>
        </Link>
        <X702 />
      </div>
    </div>
  );
}

export default HooderMessage;
