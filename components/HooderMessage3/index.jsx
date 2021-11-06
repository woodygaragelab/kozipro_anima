import React from "react";
import X68 from "../X68";
import X692 from "../X692";
import X702 from "../X702";
import "./HooderMessage3.css";

function HooderMessage3(props) {
  const { x68Props, x68Props2 } = props;

  return (
    <div className="hooder-message-1">
      <div className="hooder-8 border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X692 className={x68Props2.className} />
        <X702 />
      </div>
    </div>
  );
}

export default HooderMessage3;
