import React from "react";
import { Link } from "react-router-dom";
import ButtonsLabelLight from "../ButtonsLabelLight";
import "./Login6.css";

function Login6(props) {
  const { buttonsLabelLightProps } = props;

  return (
    <Link to="/waitingactivity2">
      <div className="login-5">
        <ButtonsLabelLight className={buttonsLabelLightProps.className} />
      </div>
    </Link>
  );
}

export default Login6;
