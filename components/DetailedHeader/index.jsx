import React from "react";
import "./DetailedHeader.css";

function DetailedHeader(props) {
  const { time, score, cellularConnection, wifi, cap, logout, text1 } = props;

  return (
    <div className="detailed-header border-1px-my-pink">
      <div className="overlap-group1-1">
        <div className="x6">
          <div className="time-light">
            <div className="time-light-1">
              <div className="time">{time}</div>
            </div>
          </div>
          <div className="score sfpro-bold-black-20px">{score}</div>
          <img className="cellular-connection" src={cellularConnection} />
          <img className="wifi" src={wifi} />
          <div className="battery">
            <div className="overlap-group-1">
              <div className="capacity"></div>
            </div>
            <img className="cap" src={cap} />
          </div>
        </div>
        <div className="logout">{logout}</div>
        <div className="text-1">{text1}</div>
      </div>
    </div>
  );
}

export default DetailedHeader;
