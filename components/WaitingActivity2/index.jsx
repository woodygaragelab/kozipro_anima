import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader from "../SimplifiedHeader";
import Loading from "../Loading";
import HooderStandard from "../HooderStandard";
import "./WaitingActivity2.css";

function WaitingActivity2(props) {
  const { heart, simplifiedHeaderProps, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity2 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeader2Props={simplifiedHeaderProps.detailedHeader2Props}
        />
        <div className="heart" style={{ backgroundImage: `url(${heart})` }}></div>
        <Loading />
        <HooderStandard
          x68Props={hooderStandardProps.x68Props}
          x692Props={hooderStandardProps.x692Props}
          x70Props={hooderStandardProps.x70Props}
        />
      </div>
    </div>
  );
}

export default WaitingActivity2;
