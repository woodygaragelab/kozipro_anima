import React from "react";
import { Link } from "react-router-dom";
import ButtonsLabelLight from "../ButtonsLabelLight";
import "./Login3.css";

function Login3(props) {
  const { white08PtRadius } = props;

  return (
    <Link to="/waitingactivity1">
      <div className="login-1">
        <div className="overlap-group3-6">
          <a href="javascript:SubmitForm('form4')" onClick={window.event.stopPropagation()}>
            <div className="button-backgrounds-black-1">
              <div className="white-03pt-radius hidden"></div>
              <div className="white-04pt-radius hidden"></div>
              <div className="white-05pt-radius hidden"></div>
              <div className="white-06pt-radius hidden"></div>
              <div className="white-07pt-radius hidden"></div>
              <a href="javascript:SubmitForm('form4')" onClick={window.event.stopPropagation()}>
                <img className="white-08pt-radius" src={white08PtRadius} />
              </a>
              <div className="white-09pt-radius hidden"></div>
              <div className="white-10pt-radius hidden"></div>
              <div className="white-11pt-radius hidden"></div>
              <div className="white-12pt-radius hidden"></div>
              <div className="white-13pt-radius hidden"></div>
              <div className="white-14pt-radius hidden"></div>
              <div className="white-max-radius hidden"></div>
            </div>
          </a>
          <ButtonsLabelLight />
        </div>
      </div>
    </Link>
  );
}

export default Login3;
