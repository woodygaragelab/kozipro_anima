import React from "react";
import DetailedHeader from "../DetailedHeader";
import Login2 from "../Login2";
import "./Login.css";

function Login(props) {
  const {
    x20,
    x19,
    x5,
    inputType,
    inputPlaceholder,
    inputType2,
    inputPlaceholder2,
    x202,
    text1,
    clickHere,
    login2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="login1 screen" name="form2" action="form2" method="post">
        <div className="overlap-group2">
          <DetailedHeader />
          <img className="x20" src={x20} />
          <img className="x19" src={x19} />
        </div>
        <div className="x273">
          <div className="overlap-group1">
            <img className="x5" src={x5} />
            <input
              className="id sfprotext-regular-normal-mountain-mist-15px"
              name="id5"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </div>
          <input
            className="password sfprotext-regular-normal-mountain-mist-15px"
            name="password4"
            placeholder={inputPlaceholder2}
            type={inputType2}
            required
          />
          <img className="x20-1" src={x202} />
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
