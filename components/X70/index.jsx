import React from "react";
import MessageMark from "../MessageMark";
import "./X70.css";

function X70(props) {
  const { className } = props;

  return (
    <div className={`x70-1 ${className || ""}`}>
      <img className="x8-1" src="/img/file---8@1x.png" />
      <MessageMark />
    </div>
  );
}

export default X70;
