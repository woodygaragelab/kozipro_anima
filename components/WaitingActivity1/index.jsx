import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader from "../SimplifiedHeader";
import Loading from "../Loading";
import HooderStandard from "../HooderStandard";
import "./WaitingActivity1.css";

function WaitingActivity1(props) {
  const { heart, simplifiedHeaderProps, loadingProps, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity1 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeader2Props={simplifiedHeaderProps.detailedHeader2Props}
        />
        <div className="heart-1" style={{ backgroundImage: `url(${heart})` }}></div>
        <Loading className={loadingProps.className} />
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x70Props={hooderStandardProps.x70Props}
        />
      </div>
    </div>
  );
}

export default WaitingActivity1;
