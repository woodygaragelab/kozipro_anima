import React from "react";
import ButtonsLabelLight from "../ButtonsLabelLight";
import "./Login5.css";

function Login5(props) {
  const { buttonsLabelLightProps } = props;

  return (
    <div className="login-5">
      <div className="button-backgrounds-black-2"></div>
      <ButtonsLabelLight className={buttonsLabelLightProps.className}>
        {buttonsLabelLightProps.children}
      </ButtonsLabelLight>
    </div>
  );
}

export default Login5;
