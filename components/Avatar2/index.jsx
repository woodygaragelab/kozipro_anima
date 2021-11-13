import React from "react";
import "./Avatar2.css";

function Avatar2(props) {
  const { src } = props;

  return (
    <div className="avatar-8">
      <img className="x3-9" src={src} />
    </div>
  );
}

export default Avatar2;
