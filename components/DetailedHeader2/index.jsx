import React from "react";
import "./DetailedHeader2.css";

function DetailedHeader2(props) {
  const { children, className } = props;

  return (
    <div className={`detailed-header-1 border-1px-my-pink ${className || ""}`}>
      <div className="x6-2">
        <div className="message-13 sfpro-bold-black-20px">{children}</div>
      </div>
    </div>
  );
}

export default DetailedHeader2;
