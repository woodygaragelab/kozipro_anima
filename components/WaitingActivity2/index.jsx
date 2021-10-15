import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Loading from "../Loading";
import HooderStandard2 from "../HooderStandard2";
import "./WaitingActivity2.css";

function WaitingActivity2(props) {
  const { heart, simplifiedHeader4Props, hooderStandard2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity2 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader4
          className={simplifiedHeader4Props.className}
          detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps}
        />
        <div className="heart-1" style={{ backgroundImage: `url(${heart})` }}>
          <img
            width="100%"
            height="100%"
            src="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heartbeats.gif"
          />
        </div>
        <Loading />
        <HooderStandard2
          className={hooderStandard2Props.className}
          x6942Props={hooderStandard2Props.x6942Props}
          x704Props={hooderStandard2Props.x704Props}
        />
      </div>
    </div>
  );
}

export default WaitingActivity2;
