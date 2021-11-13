import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader from "../SimplifiedHeader";
import Loading from "../Loading";
import HooderStandard from "../HooderStandard";
import "./WaitingActivity1.css";

function WaitingActivity1(props) {
  const { heart, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="waitingactivity1 screen">
        <SimplifiedHeader />
        <div className="heart">
          <Link to="/main">
            <div className="heart-1" style={{ backgroundImage: `url(${heart})` }}></div>
          </Link>
        </div>
        <Loading />
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x69Props={hooderStandardProps.x69Props}
        />
      </div>
    </div>
  );
}

export default WaitingActivity1;
