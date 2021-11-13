import React from "react";
import SimplifiedHeader from "../SimplifiedHeader";
import Days from "../Days";
import Back from "../Back";
import PutPersonName2 from "../PutPersonName2";
import Login4 from "../Login4";
import Login5 from "../Login5";
import HooderMessage from "../HooderMessage";
import "./TextInputActivity1.css";

function TextInputActivity1(props) {
  const {
    inputType,
    inputPlaceholder,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    inputType4,
    inputPlaceholder4,
    simplifiedHeaderProps,
    daysProps,
    backProps,
    back2Props,
    putPersonName2Props,
    putPersonName22Props,
    putPersonName23Props,
    putPersonName24Props,
    login4Props,
    login5Props,
    login42Props,
    login43Props,
    hooderMessageProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="textinputactivity1 screen">
        <SimplifiedHeader className={simplifiedHeaderProps.className} />
        <Days className={daysProps.className} />
        <Back src={backProps.src} className={backProps.className} />
        <Back src={back2Props.src} className={back2Props.className} />
        <div className="x30">
          <div className="overlap-group1-5">
            <div className="x274">
              <PutPersonName2 className={putPersonName2Props.className} />
              <div className="x90 border-1px-mountain-mist"></div>
            </div>
            <textarea
              className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
              name="paste-your-message-contexts1"
              placeholder={inputPlaceholder}
              type={inputType}
            ></textarea>
          </div>
          <div className="overlap-group-14">
            <div className="x274">
              <PutPersonName2 className={putPersonName22Props.className} />
              <div className="x90-1 border-1px-mountain-mist"></div>
            </div>
            <textarea
              className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
              name="paste-your-message-contexts11"
              placeholder={inputPlaceholder2}
              type={inputType2}
            ></textarea>
          </div>
          <div className="overlap-group-14">
            <div className="x274">
              <PutPersonName2 className={putPersonName23Props.className} />
              <div className="x90-2 border-1px-mountain-mist"></div>
            </div>
            <textarea
              className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
              name="paste-your-message-contexts12"
              placeholder={inputPlaceholder3}
              type={inputType3}
            ></textarea>
          </div>
          <div className="overlap-group-14">
            <div className="x274">
              <PutPersonName2 className={putPersonName24Props.className} />
              <div className="x90-3 border-1px-mountain-mist"></div>
            </div>
            <textarea
              className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
              name="paste-your-message-contexts13"
              placeholder={inputPlaceholder4}
              type={inputType4}
            ></textarea>
          </div>
        </div>
        <div className="overlap-group5">
          <Login4>{login4Props.children}</Login4>
          <Login5>{login5Props.children}</Login5>
          <Login4 className={login42Props.className}>{login42Props.children}</Login4>
          <Login4 className={login43Props.className}>{login43Props.children}</Login4>
        </div>
        <HooderMessage
          x6={hooderMessageProps.x6}
          x7={hooderMessageProps.x7}
          x8={hooderMessageProps.x8}
          message={hooderMessageProps.message}
        />
      </div>
    </div>
  );
}

export default TextInputActivity1;
