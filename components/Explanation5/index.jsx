import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import X133 from "../X133";
import HooderScore from "../HooderScore";
import "./Explanation5.css";

function Explanation5(props) {
  const { text9, simplifiedHeader2Props, x133Props, hooderScoreProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation5 screen">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <div className="overlap-group8-2">
          <div className="overlap-group7-4">
            <div className="text-9 sfcompact-bold-mahogany-18px">{text9}</div>
            <X133
              className={x133Props.className}
              avatar2Props3={x133Props.avatar2Props3}
              avatarProps3={x133Props.avatarProps3}
            />
          </div>
          <HooderScore
            className={hooderScoreProps.className}
            x6822Props={hooderScoreProps.x6822Props}
            x704Props={hooderScoreProps.x704Props}
          />
        </div>
      </div>
    </div>
  );
}

export default Explanation5;
