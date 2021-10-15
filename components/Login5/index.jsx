import React from "react";
import ButtonsLabelLight2 from "../ButtonsLabelLight2";
import "./Login5.css";

function Login5(props) {
  const { buttonsLabelLight2Props } = props;

  return (
    <div className="login-4">
      <div className="button-backgrounds-black-2"></div>
      <ButtonsLabelLight2 className={buttonsLabelLight2Props.className} />
    </div>
  );
}

export default Login5;
