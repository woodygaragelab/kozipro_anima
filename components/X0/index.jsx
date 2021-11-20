import React from "react";
import PutPersonName2 from "../PutPersonName2";
import "./X0.css";

function X0(props) {
  const { className } = props;

  return (
    <div className={`x0 ${className || ""}`}>
      <div className="flex-row-6">
        <img className="hearticonpalepink-2" src="/img/heart-icon-palepink-10@1x.png" />
        <div className="overlap-group-10">
          <div className="tttt-1 sfprotext-regular-normal-mountain-mist-15px">TT:TT</div>
          <img className="hearticonpalepink-3" src="/img/heart-icon-palepink-10@1x.png" />
        </div>
      </div>
      <PutPersonName2 />
      <PutPersonName2 />
      <PutPersonName2 />
      <PutPersonName2 />
    </div>
  );
}

export default X0;
