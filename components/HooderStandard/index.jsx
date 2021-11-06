import React from "react";
import X68 from "../X68";
import X692 from "../X692";
import X70 from "../X70";
import "./HooderStandard.css";

function HooderStandard(props) {
  const { className, x68Props, x692Props, x70Props } = props;

  return (
    <div className={`hooder-standard ${className || ""}`}>
      <div className="hooder-2 border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X692 className={x692Props.className} />
        <X70 className={x70Props.className} />
      </div>
    </div>
  );
}

export default HooderStandard;
