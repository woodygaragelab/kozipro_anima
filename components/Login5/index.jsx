import React from "react";
import { Link } from "react-router-dom";
import "./Login5.css";

function Login5(props) {
  const { children } = props;

  return (
    <a href="javascript:SubmitForm('form4')">
      <div className="login-5">
        <div className="overlap-group-46">
          <Link to="/main">
            <div className="button-backgrounds-black-2"></div>
          </Link>
          <div className="buttons-label-light-5">
            <div className="label-1 sfprotext-semi-bold-white-17px">{children}</div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Login5;
