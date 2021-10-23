import React from "react";
import "./ButtonsLabelLight.css";

function ButtonsLabelLight(props) {
  const { className } = props;

  return (
    <div className={`buttons-label-light-2 ${className || ""}`}>
      <div className="label-2 sfprotext-semi-bold-white-17px">Send</div>
    </div>
  );
}

export default ButtonsLabelLight;
