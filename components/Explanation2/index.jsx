import React from "react";
import { Link } from "react-router-dom";
import X133 from "../X133";
import HooderHeartrate3 from "../HooderHeartrate3";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import "./Explanation2.css";

function Explanation2(props) {
  const { x16, text3, x133Props, hooderHeartrate3Props, simplifiedHeader4Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation2 screen">
        <div className="overlap-group7-1">
          <X133 avatar2Props3={x133Props.avatar2Props3} avatarProps3={x133Props.avatarProps3} />
          <Link to="/explanation3">
            <div className="x17"></div>
          </Link>
          <div className="x3-30"></div>
          <img className="x16" src={x16} />
          <div className="text-3 sfcompact-bold-mahogany-18px">{text3}</div>
          <HooderHeartrate3 heartRate={hooderHeartrate3Props.heartRate} x6={hooderHeartrate3Props.x6} />
        </div>
        <SimplifiedHeader4
          className={simplifiedHeader4Props.className}
          detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps}
        />
      </div>
    </div>
  );
}

export default Explanation2;
