import React from "react";
import { Link } from "react-router-dom";
import X13 from "../X13";
import SimplifiedHeader from "../SimplifiedHeader";
import HooderScore from "../HooderScore";
import "./Explanation4.css";

function Explanation4(props) {
  const { text8, x19, x13Props, simplifiedHeaderProps, hooderScoreProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation4 screen">
        <div className="overlap-group7-3">
          <X13 className={x13Props.className} avatar2Props={x13Props.avatar2Props} avatarProps={x13Props.avatarProps} />
          <Link to="/explanation5">
            <div className="x17-2"></div>
          </Link>
          <div className="x3-72"></div>
          <div className="text-8 sfcompact-bold-mahogany-18px">{text8}</div>
          <img className="x19-11" src={x19} />
        </div>
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeaderProps={simplifiedHeaderProps.detailedHeaderProps}
        />
        <HooderScore x68Props={hooderScoreProps.x68Props} x70Props={hooderScoreProps.x70Props} />
      </div>
    </div>
  );
}

export default Explanation4;
