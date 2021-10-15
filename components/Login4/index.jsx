import React from "react";
import ButtonsLabelLight2 from "../ButtonsLabelLight2";
import "./Login4.css";

function Login4(props) {
  const { className } = props;

  return (
    <div className={`login-2 ${className || ""}`}>
      <ButtonsLabelLight2 />
    </div>
  );
}

export default Login4;
