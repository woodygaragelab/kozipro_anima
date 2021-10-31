import React from "react";
import SimplifiedHeader from "../SimplifiedHeader";
import HooderStandard from "../HooderStandard";
import "./Fail.css";

function Fail(props) {
  const { tryAgain, simplifiedHeaderProps, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fail screen">
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeaderProps={simplifiedHeaderProps.detailedHeaderProps}
        />
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x68Props2={hooderStandardProps.x68Props2}
          x68Props3={hooderStandardProps.x68Props3}
        />
        <div className="try-again">{tryAgain}</div>
      </div>
    </div>
  );
}

export default Fail;
