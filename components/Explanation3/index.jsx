import React from "react";
import { Link } from "react-router-dom";
import X13 from "../X13";
import SimplifiedHeader from "../SimplifiedHeader";
import HooderMessage from "../HooderMessage";
import "./Explanation3.css";

function Explanation3(props) {
  const { x15, text4, x13Props, simplifiedHeaderProps, hooderMessageProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation3 screen">
        <div className="overlap-group7-2">
          <X13 avatar2Props={x13Props.avatar2Props} avatarProps={x13Props.avatarProps} />
          <Link to="/explanation4">
            <div className="x17-1"></div>
          </Link>
          <img className="x15" src={x15} />
          <div className="x3-71"></div>
          <div className="text-4 sfcompact-bold-mahogany-18px">{text4}</div>
        </div>
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeaderProps={simplifiedHeaderProps.detailedHeaderProps}
        />
        <HooderMessage x68Props={hooderMessageProps.x68Props} />
      </div>
    </div>
  );
}

export default Explanation3;
