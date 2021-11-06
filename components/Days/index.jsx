import React from "react";
import "./Days.css";

function Days(props) {
  const { className } = props;

  return (
    <div className={`days ${className || ""}`}>
      <div className="overlap-group1-10">
        <div className="yyyymmdd sfcompact-regular-normal-new-york-pink-20px">YYYY/MM/DD</div>
        <img className="x9" src="/img/file---10@1x.png" />
        <img className="x10" src="/img/file---10@1x.png" />
      </div>
    </div>
  );
}

export default Days;
