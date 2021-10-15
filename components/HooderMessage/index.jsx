import React from "react";
import X6822 from "../X6822";
import X692 from "../X692";
import X702 from "../X702";
import "./HooderMessage.css";

function HooderMessage(props) {
  const { x6822Props } = props;

  return (
    <div className="hooder-message">
      <div className="hooder-3 border-2px-mist-gray">
        <X6822 className={x6822Props.className} />
        <X692 />
        <X702 />
      </div>
    </div>
  );
}

export default HooderMessage;
