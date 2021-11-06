import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import PutPersonName22 from "../PutPersonName22";
import Back from "../Back";
import HooderStandard from "../HooderStandard";
import "./Photochoose1.css";

function Photochoose1(props) {
  const {
    x5,
    addPhoto,
    simplifiedHeader2Props,
    putPersonName22Props,
    backProps,
    back2Props,
    hooderStandardProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="photochoose1 screen">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeader2Props={simplifiedHeader2Props.detailedHeader2Props}
        />
        <PutPersonName22 className={putPersonName22Props.className} />
        <div className="flex-row-22">
          <Back src={backProps.src} className={backProps.className} />
          <div className="flex-col-32">
            <img className="x5-27" src={x5} />
            <div className="add-photo sfprotext-regular-normal-mountain-mist-15px">{addPhoto}</div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x70Props={hooderStandardProps.x70Props}
        />
      </div>
    </div>
  );
}

export default Photochoose1;
