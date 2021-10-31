import React from "react";
import X68 from "../X68";
import X69 from "../X69";
import X70 from "../X70";
import "./HooderStandard.css";

function HooderStandard(props) {
  const { className, x68Props } = props;

  return (
    <div className={`hooder-standard ${className || ""}`}>
      <div className="hooder border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X69 />
        <X70 />
      </div>
    </div>
  );
}

export default HooderStandard;
