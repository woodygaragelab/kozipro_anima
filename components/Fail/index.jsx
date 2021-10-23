import React from "react";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import HooderStandard32 from "../HooderStandard32";
import "./Fail.css";

function Fail(props) {
  const { tryAgain, simplifiedHeader4Props, hooderStandard32Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fail screen">
        <SimplifiedHeader4
          className={simplifiedHeader4Props.className}
          detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps}
        />
        <HooderStandard32
          className={hooderStandard32Props.className}
          x6822Props={hooderStandard32Props.x6822Props}
          x6822Props2={hooderStandard32Props.x6822Props2}
          x6822Props3={hooderStandard32Props.x6822Props3}
        />
        <div className="try-again">{tryAgain}</div>
      </div>
    </div>
  );
}

export default Fail;
