import React from "react";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Back from "../Back";
import PutPersonName from "../PutPersonName";
import Login4 from "../Login4";
import Login5 from "../Login5";
import Login6 from "../Login6";
import HooderMessage2 from "../HooderMessage2";
import "./TextInputActivity1.css";

function TextInputActivity1(props) {
  const {
    yyyyMmDd,
    x9,
    x10,
    inputType,
    inputPlaceholder,
    inputType2,
    inputPlaceholder2,
    inputType3,
    inputPlaceholder3,
    inputType4,
    inputPlaceholder4,
    simplifiedHeader4Props,
    backProps,
    back2Props,
    putPersonNameProps,
    putPersonName2Props,
    putPersonName3Props,
    putPersonName4Props,
    login5Props,
    login4Props,
    login6Props,
    hooderMessage2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="textinputactivity1 screen">
        <SimplifiedHeader4
          className={simplifiedHeader4Props.className}
          detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps}
        />
        <div className="flex-row-11">
          <Back src={backProps.src} className={backProps.className} />
          <div className="days-1">
            <div className="overlap-group1-10">
              <div className="yyyymmdd-1 sfcompact-regular-normal-new-york-pink-20px">{yyyyMmDd}</div>
              <img className="x9-2" src={x9} />
              <img className="x10-2" src={x10} />
            </div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <div className="flex-col-20">
          <div className="x30">
            <div className="overlap-group1-11">
              <div className="x274">
                <PutPersonName className={putPersonNameProps.className} />
                <div className="x90 border-1px-mountain-mist"></div>
              </div>
              <textarea
                className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
                name="paste-your-message-contexts1"
                placeholder={inputPlaceholder}
                type={inputType}
              ></textarea>
            </div>
            <div className="overlap-group-43">
              <div className="x274">
                <PutPersonName className={putPersonName2Props.className} />
                <div className="x90-1 border-1px-mountain-mist"></div>
              </div>
              <textarea
                className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
                name="paste-your-message-contexts11"
                placeholder={inputPlaceholder2}
                type={inputType2}
              ></textarea>
            </div>
            <div className="overlap-group-43">
              <div className="x274">
                <PutPersonName className={putPersonName3Props.className} />
                <div className="x90-2 border-1px-mountain-mist"></div>
              </div>
              <textarea
                className="paste-your-message-contexts sfprotext-regular-normal-mountain-mist-15px"
                name="paste-your-message-contexts12"
                placeholder={inputPlaceholder3}
                type={inputType3}
              ></textarea>
            </div>
            <div className="overlap-group-43">
              <div className="x274">
                <PutPersonName className={putPersonName4Props.className} />
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
            <Login4 />
            <Login5 buttonsLabelLight2Props={login5Props.buttonsLabelLight2Props} />
            <Login4 className={login4Props.className} />
            <Login6 buttonsLabelLightProps={login6Props.buttonsLabelLightProps} />
          </div>
          <HooderMessage2
            heartRate={hooderMessage2Props.heartRate}
            x6={hooderMessage2Props.x6}
            x7={hooderMessage2Props.x7}
          />
        </div>
      </div>
    </div>
  );
}

export default TextInputActivity1;
