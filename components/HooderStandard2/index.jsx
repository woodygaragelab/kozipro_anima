import React from "react";
import X685 from "../X685";
import X6942 from "../X6942";
import X704 from "../X704";
import "./HooderStandard2.css";

function HooderStandard2(props) {
  const { className, x6942Props, x704Props } = props;

  return (
    <div className={`hooder-standard-1 ${className || ""}`}>
      <div className="hooder-4 border-2px-mist-gray">
        <X685 />
        <X6942 className={x6942Props.className} />
        <X704 className={x704Props.className} />
      </div>
    </div>
  );
}

export default HooderStandard2;
