import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import PutPersonName from "../PutPersonName";
import Back from "../Back";
import HooderStandard from "../HooderStandard";
import "./Photochoose1.css";

function Photochoose1(props) {
  const { x20, x19, x5, addPhoto, backProps, back2Props, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="photochoose1 screen">
        <div className="simplified-header-4">
          <div className="overlap-group-6">
            <div className="overlap-group-item"></div>
            <div className="overlap-group-item"></div>
            <DetailedHeader />
            <img className="x20-4" src={x20} />
            <Link to="/login1">
              <img className="x19-4" src={x19} />
            </Link>
          </div>
        </div>
        <PutPersonName />
        <div className="flex-row-3">
          <Back src={backProps.src} />
          <div className="flex-col-3">
            <img className="x5" src={x5} />
            <div className="add-photo sfprotext-regular-normal-mountain-mist-15px">{addPhoto}</div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x69Props={hooderStandardProps.x69Props}
          x70Props={hooderStandardProps.x70Props}
        />
      </div>
    </div>
  );
}

export default Photochoose1;
