import React from "react";
import "./Avatar2.css";

function Avatar2(props) {
  const { src, className } = props;

  return (
    <div className={`avatar-14 ${className || ""}`}>
      <img className="x3-25" src={src} />
    </div>
  );
}

export default Avatar2;
