import React from "react";
import "./ButtonsLabelLight.css";

function ButtonsLabelLight(props) {
  const { children, className } = props;

  return (
    <div className={`buttons-label-light-2 ${className || ""}`}>
      <div className="label-2 sfprotext-semi-bold-white-17px">{children}</div>
    </div>
  );
}

export default ButtonsLabelLight;
