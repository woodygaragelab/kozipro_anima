import React from "react";
import Avatar from "../Avatar";
import "./X268.css";

function X268(props) {
  const { className, avatarProps } = props;

  return (
    <div className={`x268 ${className || ""}`}>
      <div className="place-1 meiryo-bold-alto-21px">Name</div>
      <Avatar className={avatarProps.className} />
    </div>
  );
}

export default X268;
