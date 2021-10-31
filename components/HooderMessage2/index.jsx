import React from "react";
import { Link } from "react-router-dom";
import X702 from "../X702";
import "./HooderMessage2.css";

function HooderMessage2(props) {
  const { heartRate, x6, score, x7 } = props;

  return (
    <div className="hooder-message-1">
      <div className="hooder-4 border-2px-mist-gray">
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
        <Link to="/main">
          <div className="x69-2">
            <div className="overlap-group1-12">
              <div className="heart-mark-8">
                <div className="score-8 sfcompact-bold-dove-gray-13px">{score}</div>
              </div>
              <img className="x7-8" src={x7} />
            </div>
          </div>
        </Link>
        <X702 />
      </div>
    </div>
  );
}

export default HooderMessage2;
