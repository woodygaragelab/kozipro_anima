import React from "react";
import { Link } from "react-router-dom";
import "./Login2.css";

function Login2(props) {
  const { children } = props;

  return (
    <a href="javascript:SubmitForm('form2')">
      <div className="login">
        <div className="overlap-group-4">
          <Link to="/main" onClick={window.event.stopPropagation()}>
            <div className="button-backgrounds-black"></div>
          </Link>
          <div className="buttons-label-light">
            <div className="label sfprotext-semi-bold-white-17px">{children}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Login2;
