import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import PutPersonName from "../PutPersonName";
import Back from "../Back";
import HooderStandard from "../HooderStandard";
import "./Photochoose1.css";

function Photochoose1(props) {
  const { x5, addPhoto, simplifiedHeader2Props, backProps, back2Props, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="photochoose1 screen">
        <SimplifiedHeader2 detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps} />
        <PutPersonName />
        <div className="flex-row-6">
          <Back src={backProps.src} />
          <div className="flex-col-14">
            <img className="x5-1" src={x5} />
            <div className="add-photo sfprotext-regular-normal-mountain-mist-15px">{addPhoto}</div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x68Props2={hooderStandardProps.x68Props2}
          x68Props3={hooderStandardProps.x68Props3}
        />
      </div>
    </div>
  );
}

export default Photochoose1;
