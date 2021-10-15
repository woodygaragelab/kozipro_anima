import React from "react";
import "./ButtonsLabelLight2.css";

function ButtonsLabelLight2(props) {
  const { className } = props;

  return (
    <div className={`buttons-label-light-3-1 ${className || ""}`}>
      <div className="label-3 sfprotext-semi-bold-white-17px">送信</div>
    </div>
  );
}

export default ButtonsLabelLight2;
