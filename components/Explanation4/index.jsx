import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import X133 from "../X133";
import HooderScore from "../HooderScore";
import "./Explanation4.css";

function Explanation4(props) {
  const { text8, x19, simplifiedHeader4Props, x133Props, hooderScoreProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation4 screen">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="overlap-group8-1">
          <div className="overlap-group7-3">
            <X133
              className={x133Props.className}
              avatar2Props3={x133Props.avatar2Props3}
              avatarProps3={x133Props.avatarProps3}
            />
            <Link to="/explanation5">
              <div className="x17-2"></div>
            </Link>
            <div className="x3-72"></div>
            <div className="text-8 sfcompact-bold-mahogany-18px">{text8}</div>
            <img className="x19-11" src={x19} />
          </div>
          <HooderScore x6822Props={hooderScoreProps.x6822Props} x704Props={hooderScoreProps.x704Props} />
        </div>
      </div>
    </div>
  );
}

export default Explanation4;
