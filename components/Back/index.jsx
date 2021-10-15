import React from "react";
import "./Back.css";

function Back(props) {
  const { src, className } = props;

  return <div className={`back ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></div>;
}

export default Back;
