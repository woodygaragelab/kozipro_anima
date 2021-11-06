import React from "react";
import X68 from "../X68";
import X69 from "../X69";
import X70 from "../X70";
import "./HooderScore.css";

function HooderScore(props) {
  const { className, x68Props, x69Props, x70Props } = props;

  return (
    <div className={`hooder-score ${className || ""}`}>
      <div className="hooder-9 border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X69 className={x69Props.className} />
        <X70 className={x70Props.className} />
      </div>
    </div>
  );
}

export default HooderScore;
