import React from "react";
import "./Avatar.css";

function Avatar(props) {
  const { className } = props;

  return (
    <div className={`avatar-10 ${className || ""}`}>
      <div className="overlap-group-6">
        <img className="x3" src="/img/file-3@1x.png" />
      </div>
    </div>
  );
}

export default Avatar;
