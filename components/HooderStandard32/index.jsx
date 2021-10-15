import React from "react";
import X6822 from "../X6822";
import X6942 from "../X6942";
import X704 from "../X704";
import "./HooderStandard32.css";

function HooderStandard32() {
  return (
    <div className="hooder-standard">
      <div className="hooder border-2px-mist-gray">
        <X6822 />
        <X6942 />
        <X704 />
      </div>
    </div>
  );
}

export default HooderStandard32;
