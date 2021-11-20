import React from "react";
import { Link } from "react-router-dom";
import EventMark from "../EventMark";
import MessageMark from "../MessageMark";
import "./HooderScore.css";

function HooderScore(props) {
  const { x6, x7, score, x8 } = props;

  return (
    <div className="hooder-score">
      <div className="hooder border-2px-mist-gray">
        <Link to="/eventactivity2">
          <div className="x68">
            <img className="x6-1" src={x6} />
            <EventMark />
          </div>
        </Link>
        <div className="x69">
          <img className="x7" src={x7} />
          <div className="heart-mark">
            <div className="score">{score}</div>
          </div>
        </div>
        <Link to="/textinputactivity1">
          <div className="x70">
            <img className="x8" src={x8} />
            <MessageMark />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default HooderScore;
