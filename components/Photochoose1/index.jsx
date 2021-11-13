import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import PutPersonName from "../PutPersonName";
import Back from "../Back";
import HooderStandard from "../HooderStandard";
import "./Photochoose1.css";

function Photochoose1(props) {
  const { x5, addPhoto, backProps, back2Props, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="photochoose1 screen">
        <SimplifiedHeader2 />
        <PutPersonName />
        <div className="flex-row-3">
          <Back src={backProps.src} />
          <div className="flex-col-3">
            <img className="x5-1" src={x5} />
            <div className="add-photo sfprotext-regular-normal-mountain-mist-15px">{addPhoto}</div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <HooderStandard x68Props={hooderStandardProps.x68Props} x69Props={hooderStandardProps.x69Props} />
      </div>
    </div>
  );
}

export default Photochoose1;
