import React from "react";
import "./X704.css";

function X704(props) {
  const { className } = props;

  return (
    <div className={`x70 ${className || ""}`}>
      <div className="overlap-group2-1">
        <div className="message-mark">
          <div className="message sfcompact-bold-dove-gray-13px">Message</div>
        </div>
        <img className="x8" src="/img/file---8@1x.png" />
      </div>
    </div>
  );
}

export default X704;
