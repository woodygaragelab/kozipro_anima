import React from "react";
import { Link } from "react-router-dom";
import X133 from "../X133";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import HooderScore from "../HooderScore";
import "./Explanation4.css";

function Explanation4(props) {
  const { text5, x19, x133Props, simplifiedHeader4Props, hooderScoreProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation4 screen">
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
          <div className="text-5 sfcompact-bold-mahogany-18px">{text5}</div>
          <img className="x19-7" src={x19} />
        </div>
        <SimplifiedHeader4
          className={simplifiedHeader4Props.className}
          detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps}
        />
        <HooderScore x6822Props={hooderScoreProps.x6822Props} x704Props={hooderScoreProps.x704Props} />
      </div>
    </div>
  );
}

export default Explanation4;
