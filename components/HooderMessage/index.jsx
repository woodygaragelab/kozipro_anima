import React from "react";
import X68 from "../X68";
import X69 from "../X69";
import X702 from "../X702";
import "./HooderMessage.css";

function HooderMessage(props) {
  const { x68Props } = props;

  return (
    <div className="hooder-message">
      <div className="hooder-3 border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X69 />
        <X702 />
      </div>
    </div>
  );
}

export default HooderMessage;
