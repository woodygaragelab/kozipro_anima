import React from "react";
import Avatar from "../Avatar";
import "./X271.css";

function X271(props) {
  const { className } = props;

  return (
    <div className={`x271 ${className || ""}`}>
      <div className="place meiryo-bold-alto-21px">Name</div>
      <Avatar />
    </div>
  );
}

export default X271;
