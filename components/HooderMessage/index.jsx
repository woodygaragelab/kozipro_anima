import React from "react";
import { Link } from "react-router-dom";
import EventMark from "../EventMark";
import HeartMark from "../HeartMark";
import "./HooderMessage.css";

function HooderMessage(props) {
  const { x6, x7, x8, message } = props;

  return (
    <div className="hooder-message">
      <div className="hooder-6 border-2px-mist-gray">
        <Link to="/eventactivity2">
          <div className="x68-6">
            <img className="x6-14" src={x6} />
            <EventMark />
          </div>
        </Link>
        <Link to="/main">
          <div className="x69-4">
            <img className="x7-5" src={x7} />
            <HeartMark />
          </div>
        </Link>
        <div className="x70-4">
          <img className="x8-3" src={x8} />
          <div className="message-mark-6">
            <div className="message-6 sfcompact-bold-brick-red-13px">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HooderMessage;
