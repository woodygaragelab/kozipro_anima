import React from "react";
import X6822 from "../X6822";
import X6942 from "../X6942";
import X704 from "../X704";
import "./HooderStandard32.css";

function HooderStandard32(props) {
  const { className, x6822Props } = props;

  return (
    <div className={`hooder-standard ${className || ""}`}>
      <div className="hooder border-2px-mist-gray">
        <X6822 className={x6822Props.className} />
        <X6942 />
        <X704 />
      </div>
    </div>
  );
}

export default HooderStandard32;
