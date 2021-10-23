import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Loading from "../Loading";
import HooderStandard32 from "../HooderStandard32";
import "./WaitingActivity2.css";

function WaitingActivity2(props) {
  const { heart, simplifiedHeader4Props, loadingProps, hooderStandard32Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity2 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader4
          className={simplifiedHeader4Props.className}
          detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps}
        />
        <div className="heart-1" style={{ backgroundImage: `url(${heart})` }}></div>
        <Loading className={loadingProps.className} />
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

export default WaitingActivity2;
