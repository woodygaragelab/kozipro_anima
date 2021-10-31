import React from "react";
import X68 from "../X68";
import X692 from "../X692";
import X70 from "../X70";
import "./HooderScore.css";

function HooderScore(props) {
  const { className, x68Props, x70Props } = props;

  return (
    <div className={`hooder-score ${className || ""}`}>
      <div className="hooder-5 border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X692 />
        <X70 className={x70Props.className} />
      </div>
    </div>
  );
}

export default HooderScore;
