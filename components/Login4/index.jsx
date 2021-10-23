import React from "react";
import { Link } from "react-router-dom";
import ButtonsLabelLight from "../ButtonsLabelLight";
import "./Login4.css";

function Login4(props) {
  const { className, buttonsLabelLightProps } = props;

  return (
    <div className={`login-2 ${className || ""}`}>
      <ButtonsLabelLight className={buttonsLabelLightProps.className} />
    </div>
  );
}

export default Login4;
