import React from "react";
import SimplifiedHeader from "../SimplifiedHeader";
import Days from "../Days";
import Back from "../Back";
import PutPersonName2 from "../PutPersonName2";
import Login4 from "../Login4";
import Login5 from "../Login5";
import HooderMessage2 from "../HooderMessage2";
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
    hooderMessage2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="textinputactivity1 screen">
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeaderProps={simplifiedHeaderProps.detailedHeaderProps}
        />
        <Days className={daysProps.className} />
        <Back src={backProps.src} className={backProps.className} />
        <Back src={back2Props.src} className={back2Props.className} />
        <div className="x30">
          <div className="overlap-group1-11">
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
          <div className="overlap-group-38">
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
          <div className="overlap-group-38">
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
          <div className="overlap-group-38">
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
        <div className="overlap-group5-4">
          <Login4 buttonsLabelLightProps={login4Props.buttonsLabelLightProps} />
          <Login5 buttonsLabelLightProps={login5Props.buttonsLabelLightProps} />
          <Login4 className={login42Props.className} buttonsLabelLightProps={login42Props.buttonsLabelLightProps} />
          <Login4 className={login43Props.className} buttonsLabelLightProps={login43Props.buttonsLabelLightProps} />
        </div>
        <HooderMessage2
          heartRate={hooderMessage2Props.heartRate}
          x6={hooderMessage2Props.x6}
          score={hooderMessage2Props.score}
          x7={hooderMessage2Props.x7}
        />
      </div>
    </div>
  );
}

export default TextInputActivity1;
