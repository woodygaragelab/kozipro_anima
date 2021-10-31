import React from "react";
import HooderScore from "../HooderScore";
import X13 from "../X13";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import "./Explanation5.css";

function Explanation5(props) {
  const { text9, hooderScoreProps, x13Props, simplifiedHeader2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation5 screen">
        <HooderScore
          className={hooderScoreProps.className}
          x68Props={hooderScoreProps.x68Props}
          x70Props={hooderScoreProps.x70Props}
        />
        <div className="overlap-group7-4">
          <div className="text-9 sfcompact-bold-mahogany-18px">{text9}</div>
          <X13 className={x13Props.className} avatar2Props={x13Props.avatar2Props} avatarProps={x13Props.avatarProps} />
        </div>
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
      </div>
    </div>
  );
}

export default Explanation5;
