import React from "react";
import SimplifiedHeader from "../SimplifiedHeader";
import Login5 from "../Login5";
import "./Login4.css";

function Login4(props) {
  const {
    x5,
    inputType,
    inputPlaceholder,
    x20,
    inputType2,
    inputPlaceholder2,
    text12,
    clickHere,
    simplifiedHeaderProps,
    login5Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="login1 screen" name="form4" action="form4" method="post">
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeader2Props={simplifiedHeaderProps.detailedHeader2Props}
        />
        <div className="x273">
          <div className="overlap-group2-26">
            <img className="x5-26" src={x5} />
            <input
              className="id sfprotext-regular-normal-mountain-mist-15px"
              name="id5"
              placeholder={inputPlaceholder}
              type={inputType}
              required
            />
          </div>
          <div className="overlap-group1-22">
            <img className="x20-16" src={x20} />
            <input
              className="password sfprotext-regular-normal-mountain-mist-15px"
              name="password4"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
          <div className="flex-row-21">
            <div className="text-12 sfprotext-regular-normal-mountain-mist-15px">{text12}</div>
            <a href="https://ibighit.com/bts/jpn/" target="_blank">
              <div className="click-here">{clickHere}</div>
            </a>
          </div>
        </div>
        <Login5>{login5Props.children}</Login5>
      </form>
    </div>
  );
}

export default Login4;
