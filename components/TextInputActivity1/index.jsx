import React from "react";
import SimplifiedHeader from "../SimplifiedHeader";
import Days from "../Days";
import Back from "../Back";
import PutPersonName from "../PutPersonName";
import Login42 from "../Login42";
import Login2 from "../Login2";
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
    backProps,
    back2Props,
    login42Props,
    login2Props,
    login422Props,
    login423Props,
    hooderMessageProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="textinputactivity1 screen">
        <SimplifiedHeader detailedHeader2Props={simplifiedHeaderProps.detailedHeader2Props} />
        <Days />
        <Back src={backProps.src} />
        <Back src={back2Props.src} className={back2Props.className} />
        <div className="x30">
          <div className="overlap-group1-9">
            <div className="x274">
              <PutPersonName />
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
              <PutPersonName />
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
              <PutPersonName />
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
              <PutPersonName />
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
        <div className="overlap-group5-1">
          <Login42 buttonsLabelLightProps={login42Props.buttonsLabelLightProps} />
          <Login2 buttonsLabelLightProps={login2Props.buttonsLabelLightProps} />
          <Login42 className={login422Props.className} />
          <Login42 className={login423Props.className} buttonsLabelLightProps={login423Props.buttonsLabelLightProps} />
        </div>
        <HooderMessage
          heartRate={hooderMessageProps.heartRate}
          x6={hooderMessageProps.x6}
          score={hooderMessageProps.score}
          x7={hooderMessageProps.x7}
        />
      </div>
    </div>
  );
}

export default TextInputActivity1;
