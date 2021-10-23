import React from "react";
import HooderScore from "../HooderScore";
import X133 from "../X133";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import "./Explanation5.css";

function Explanation5(props) {
  const { text9, hooderScoreProps, x133Props, simplifiedHeader2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation5 screen">
        <HooderScore
          className={hooderScoreProps.className}
          x6822Props={hooderScoreProps.x6822Props}
          x704Props={hooderScoreProps.x704Props}
        />
        <div className="overlap-group7-4">
          <div className="text-6 sfcompact-bold-mahogany-18px">{text9}</div>
          <X133
            className={x133Props.className}
            avatar2Props3={x133Props.avatar2Props3}
            avatarProps3={x133Props.avatarProps3}
          />
        </div>
        <SimplifiedHeader2 detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps} />
      </div>
    </div>
  );
}

export default Explanation5;
