import React from "react";
import "./ButtonsLabelLight.css";

function ButtonsLabelLight(props) {
  const { className } = props;

  return (
    <div className={`buttons-label-light-4 ${className || ""}`}>
      <div className="label sfprotext-semi-bold-white-17px">送信</div>
    </div>
  );
}

export default ButtonsLabelLight;
