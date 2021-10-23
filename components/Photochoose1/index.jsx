import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import PutPersonName22 from "../PutPersonName22";
import Back from "../Back";
import HooderStandard32 from "../HooderStandard32";
import "./Photochoose1.css";

function Photochoose1(props) {
  const { x5, addPhoto, simplifiedHeader2Props, backProps, back2Props, hooderStandard32Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="photochoose1 screen">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <PutPersonName22 />
        <div className="flex-row-19">
          <Back src={backProps.src} />
          <div className="flex-col-28">
            <img className="x5-1" src={x5} />
            <div className="add-photo sfprotext-regular-normal-mountain-mist-15px">{addPhoto}</div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <HooderStandard32
          className={hooderStandard32Props.className}
          x6822Props={hooderStandard32Props.x6822Props}
          x6822Props2={hooderStandard32Props.x6822Props2}
          x6822Props3={hooderStandard32Props.x6822Props3}
        />
      </div>
    </div>
  );
}

export default Photochoose1;
