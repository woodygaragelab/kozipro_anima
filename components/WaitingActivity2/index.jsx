import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader from "../SimplifiedHeader";
import Loading from "../Loading";
import HooderStandard from "../HooderStandard";
import "./WaitingActivity2.css";

function WaitingActivity2(props) {
  const { heart, simplifiedHeaderProps, loadingProps, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity2 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader className={simplifiedHeaderProps.className} />
        <div className="heart-2" style={{ backgroundImage: `url(${heart})` }}></div>
        <Loading className={loadingProps.className} />
        <HooderStandard className={hooderStandardProps.className} x68Props={hooderStandardProps.x68Props} />
      </div>
    </div>
  );
}

export default WaitingActivity2;
