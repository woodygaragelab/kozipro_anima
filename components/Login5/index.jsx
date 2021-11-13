import React from "react";
import "./Login5.css";

function Login5(props) {
  const { children } = props;

  return (
    <div className="login-5">
      <div className="button-backgrounds-black-2"></div>
      <div className="buttons-label-light-2">
        <div className="label-3 sfprotext-semi-bold-white-17px">{children}</div>
      </div>
    </div>
  );
}

export default Login5;
