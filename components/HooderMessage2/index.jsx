import React from "react";
import { Link } from "react-router-dom";
import HeartMark3 from "../HeartMark3";
import X702 from "../X702";
import "./HooderMessage2.css";

function HooderMessage2(props) {
  const { heartRate, x6, x7 } = props;

  return (
    <div className="hooder-message-1">
      <div className="hooder-10 border-2px-mist-gray">
        <Link to="/eventactivity2">
          <div className="x68-15">
            <div className="overlap-group-46">
              <div className="event-mark-15">
                <div className="heart-rate-15 sfcompact-bold-dove-gray-13px">{heartRate}</div>
              </div>
              <img className="x6-14" src={x6} />
            </div>
          </div>
        </Link>
        <Link to="/main">
          <div className="x69-4">
            <div className="overlap-group1-20">
              <HeartMark3 />
              <img className="x7-15" src={x7} />
            </div>
          </div>
        </Link>
        <X702 />
      </div>
    </div>
  );
}

export default HooderMessage2;
