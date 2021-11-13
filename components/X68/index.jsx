import React from "react";
import EventMark from "../EventMark";
import "./X68.css";

function X68(props) {
  const { x6 } = props;

  return (
    <div className="x68-1">
      <img className="x6-9" src={x6} />
      <EventMark />
    </div>
  );
}

export default X68;
