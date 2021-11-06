import React from "react";
import { Link } from "react-router-dom";
import ButtonsLabelLight from "../ButtonsLabelLight";
import "./Login42.css";

function Login42(props) {
  const { className, buttonsLabelLightProps } = props;

  return (
    <div className={`login ${className || ""}`}>
      <ButtonsLabelLight className={buttonsLabelLightProps.className} />
    </div>
  );
}

export default Login42;
