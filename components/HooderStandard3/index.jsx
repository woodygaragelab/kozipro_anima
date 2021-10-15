import React from "react";
import X685 from "../X685";
import X692 from "../X692";
import X704 from "../X704";
import "./HooderStandard3.css";

function HooderStandard3(props) {
  const { x685Props, x692Props, x704Props } = props;

  return (
    <div className="hooder-standard-4">
      <div className="hooder-14 border-2px-mist-gray">
        <X685 className={x685Props.className} />
        <X692 className={x692Props.className} />
        <X704 className={x704Props.className} />
      </div>
    </div>
  );
}

export default HooderStandard3;
