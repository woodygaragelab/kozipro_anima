import React from "react";
import Login2 from "../Login2";
import Header from "../Header";
import "./Login.css";

function Login(props) {
  const {
    line1,
    inputType,
    inputPlaceholder,
    inputType2,
    inputPlaceholder2,
    line2,
    text1,
    clickHere,
    login2Props,
    headerProps,
  } = props;

  return (
    <form className="login1 screen" name="form2" action="form2" method="post">
      <Login2>{login2Props.children}</Login2>
      <div className="loginf">
        <div className="overlap-group">
          <img className="line1" src={line1} />
          <input
            className="id sfprotext-regular-normal-mountain-mist-15px"
            name="id1"
            placeholder={inputPlaceholder}
            type={inputType}
            required
          />
        </div>
        <div className="pwline">
          <input
            className="password sfprotext-regular-normal-mountain-mist-15px"
            name="password1"
            placeholder={inputPlaceholder2}
            type={inputType2}
            required
          />
          <img className="line2" src={line2} />
        </div>
        <div className="flex-row">
          <div className="text-1 sfprotext-regular-normal-mountain-mist-15px">{text1}</div>
          <a href="https://ibighit.com/bts/jpn/" target="_blank">
            <div className="click-here">{clickHere}</div>
          </a>
        </div>
      </div>
      <Header logoutIcon={headerProps.logoutIcon} kozipro={headerProps.kozipro} setting={headerProps.setting} />
    </form>
  );
}

export default Login;
