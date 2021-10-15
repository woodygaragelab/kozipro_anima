import React from "react";
import "./ButtonsLabelLight.css";

function ButtonsLabelLight(props) {
  const { className } = props;

  return (
    <div className={`buttons-label-light-1 ${className || ""}`}>
      <div className="label-1 sfprotext-semi-bold-white-17px">Send</div>
    </div>
  );
}

export default ButtonsLabelLight;
