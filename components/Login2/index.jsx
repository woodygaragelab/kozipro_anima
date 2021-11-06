import React from "react";
import ButtonsLabelLight from "../ButtonsLabelLight";
import "./Login2.css";

function Login2(props) {
  const { buttonsLabelLightProps } = props;

  return (
    <div className="login-3">
      <div className="button-backgrounds-black"></div>
      <ButtonsLabelLight className={buttonsLabelLightProps.className} />
    </div>
  );
}

export default Login2;
