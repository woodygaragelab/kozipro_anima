import React from "react";
import PutPersonName2 from "../PutPersonName2";
import "./X0.css";

function X0(props) {
  const { className, putPersonName2Props, putPersonName22Props, putPersonName23Props } = props;

  return (
    <div className={`x0 ${className || ""}`}>
      <div className="flex-row-9">
        <img className="hearticonpalepink-2" src="/img/heart-icon-palepink-10@1x.png" />
        <div className="tttt-1 sfprotext-regular-normal-mountain-mist-15px">TT:TT</div>
        <img className="hearticonpalepink-3" src="/img/heart-icon-palepink-10@1x.png" />
      </div>
      <div className="flex-col-18">
        <PutPersonName2 />
        <PutPersonName2 className={putPersonName2Props.className} />
        <PutPersonName2 className={putPersonName22Props.className} />
        <PutPersonName2 className={putPersonName23Props.className} />
      </div>
    </div>
  );
}

export default X0;
