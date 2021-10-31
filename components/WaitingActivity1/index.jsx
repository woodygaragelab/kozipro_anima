import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader from "../SimplifiedHeader";
import Loading from "../Loading";
import HooderStandard from "../HooderStandard";
import "./WaitingActivity1.css";

function WaitingActivity1(props) {
  const { heart, simplifiedHeaderProps, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity1 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader detailedHeaderProps={simplifiedHeaderProps.detailedHeaderProps} />
        <div className="heart" style={{ backgroundImage: `url(${heart})` }}></div>
        <Loading />
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

export default WaitingActivity1;
