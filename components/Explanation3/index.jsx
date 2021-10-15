import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import X133 from "../X133";
import HooderMessage from "../HooderMessage";
import "./Explanation3.css";

function Explanation3(props) {
  const { x15, text4, simplifiedHeader4Props, x133Props, hooderMessageProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation3 screen">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="overlap-group7-2">
          <X133 avatar2Props3={x133Props.avatar2Props3} avatarProps3={x133Props.avatarProps3} />
          <Link to="/explanation4">
            <div className="x17-1"></div>
          </Link>
          <img className="x15" src={x15} />
          <div className="x3-71"></div>
          <div className="text-4 sfcompact-bold-mahogany-18px">{text4}</div>
        </div>
        <HooderMessage x6822Props={hooderMessageProps.x6822Props} />
      </div>
    </div>
  );
}

export default Explanation3;
