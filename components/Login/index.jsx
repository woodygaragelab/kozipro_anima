import React from "react";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Login2 from "../Login2";
import "./Login.css";

function Login(props) {
  const {
    x5,
    inputType,
    inputPlaceholder,
    x20,
    inputType2,
    inputPlaceholder2,
    text1,
    clickHere,
    simplifiedHeader4Props,
    login2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="login1 screen" name="form2" action="form2" method="post">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="x273">
          <div className="overlap-group2">
            <img className="x5" src={x5} />
            <input
              className="id sfprotext-regular-normal-mountain-mist-15px"
              name="id5"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </div>
          <div className="overlap-group1">
            <img className="x20" src={x20} />
            <input
              className="password sfprotext-regular-normal-mountain-mist-15px"
              name="password4"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
          <div className="flex-row">
            <div className="text-1 sfprotext-regular-normal-mountain-mist-15px">{text1}</div>
            <a href="https://ibighit.com/bts/jpn/" target="_blank">
              <div className="click-here">{clickHere}</div>
            </a>
          </div>
        </div>
        <Login2>{login2Props.children}</Login2>
      </form>
    </div>
  );
}

export default Login;
