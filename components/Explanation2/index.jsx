import React from "react";
import { Link } from "react-router-dom";
import X13 from "../X13";
import HooderHeartrate from "../HooderHeartrate";
import SimplifiedHeader from "../SimplifiedHeader";
import "./Explanation2.css";

function Explanation2(props) {
  const { x16, text3, x13Props, hooderHeartrateProps, simplifiedHeaderProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation2 screen">
        <div className="overlap-group7-2">
          <X13 avatar2Props={x13Props.avatar2Props} avatarProps={x13Props.avatarProps} />
          <Link to="/explanation3">
            <div className="x17"></div>
          </Link>
          <div className="x3-40"></div>
          <img className="x16" src={x16} />
          <div className="text-3 sfcompact-bold-mahogany-18px">{text3}</div>
          <HooderHeartrate x70Props={hooderHeartrateProps.x70Props} x70Props2={hooderHeartrateProps.x70Props2} />
        </div>
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeader2Props={simplifiedHeaderProps.detailedHeader2Props}
        />
      </div>
    </div>
  );
}

export default Explanation2;
