import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Loading from "../Loading";
import HooderStandard2 from "../HooderStandard2";
import "./WaitingActivity1.css";

function WaitingActivity1(props) {
  const { heart, simplifiedHeader4Props, hooderStandard2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity1 screen" onclick="window.open('main.html', '_self');">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="heart" style={{ backgroundImage: `url(${heart})` }}>
          <img
            width="100%"
            height="100%"
            src="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heart-gif-brown.gif"
          />
        </div>
        <Loading />
        <HooderStandard2 x6942Props={hooderStandard2Props.x6942Props} x704Props={hooderStandard2Props.x704Props} />
      </div>
    </div>
  );
}

export default WaitingActivity1;
