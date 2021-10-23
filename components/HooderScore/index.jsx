import React from "react";
import X6822 from "../X6822";
import X6932 from "../X6932";
import X704 from "../X704";
import "./HooderScore.css";

function HooderScore(props) {
  const { className, x6822Props, x704Props } = props;

  return (
    <div className={`hooder-score ${className || ""}`}>
      <div className="hooder-4 border-2px-mist-gray">
        <X6822 className={x6822Props.className} />
        <X6932 />
        <X704 className={x704Props.className} />
      </div>
    </div>
  );
}

export default HooderScore;
