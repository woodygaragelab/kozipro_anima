import React from "react";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import HooderStandard3 from "../HooderStandard3";
import "./Fail.css";

function Fail(props) {
  const { tryAgain, simplifiedHeader4Props, hooderStandard3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fail screen">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="try-again">{tryAgain}</div>
        <HooderStandard3
          x685Props={hooderStandard3Props.x685Props}
          x692Props={hooderStandard3Props.x692Props}
          x704Props={hooderStandard3Props.x704Props}
        />
      </div>
    </div>
  );
}

export default Fail;
