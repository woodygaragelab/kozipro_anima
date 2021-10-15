import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import PutPersonName22 from "../PutPersonName22";
import Back from "../Back";
import HooderStandard2 from "../HooderStandard2";
import "./Photochoose1.css";

function Photochoose1(props) {
  const { x5, addPhoto, simplifiedHeader2Props, backProps, back2Props, hooderStandard2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="photochoose1 screen">
        <SimplifiedHeader2 detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps} />
        <PutPersonName22 />
        <div className="flex-row-6">
          <Back src={backProps.src} />
          <div className="flex-col-14">
            <img className="x5-1" src={x5} />
            <div className="add-photo sfprotext-regular-normal-mountain-mist-15px">{addPhoto}</div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <HooderStandard2 x6942Props={hooderStandard2Props.x6942Props} x704Props={hooderStandard2Props.x704Props} />
      </div>
    </div>
  );
}

export default Photochoose1;
