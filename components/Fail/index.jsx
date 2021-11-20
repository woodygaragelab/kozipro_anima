import React from "react";
import SimplifiedHeader from "../SimplifiedHeader";
import HooderStandard from "../HooderStandard";
import "./Fail.css";

function Fail(props) {
  const { tryAgain, simplifiedHeaderProps, hooderStandardProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="fail screen">
        <SimplifiedHeader className={simplifiedHeaderProps.className} />
        <div className="try-again">{tryAgain}</div>
        <HooderStandard
          className={hooderStandardProps.className}
          x68Props={hooderStandardProps.x68Props}
          x69Props={hooderStandardProps.x69Props}
          x70Props={hooderStandardProps.x70Props}
        />
      </div>
    </div>
  );
}

export default Fail;
