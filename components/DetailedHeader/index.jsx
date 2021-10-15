import React from "react";
import "./DetailedHeader.css";

function DetailedHeader(props) {
  const { children, className } = props;

  return (
    <div className={`detailed-header border-1px-my-pink ${className || ""}`}>
      <div className="x6">
        <div className="kozipro sfpro-bold-black-20px">{children}</div>
      </div>
    </div>
  );
}

export default DetailedHeader;
