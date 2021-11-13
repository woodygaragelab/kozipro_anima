import React from "react";
import { Link } from "react-router-dom";
import "./Login4.css";

function Login4(props) {
  const { children, className } = props;

  return (
    <div className={`login-2 ${className || ""}`}>
      <div className="buttons-label-light-1">
        <div className="label-2 sfprotext-semi-bold-white-17px">{children}</div>
      </div>
    </div>
  );
}

export default Login4;
