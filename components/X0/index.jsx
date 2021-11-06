import React from "react";
import PutPersonName from "../PutPersonName";
import "./X0.css";

function X0(props) {
  const { className, putPersonNameProps, putPersonName2Props, putPersonName3Props, putPersonName4Props } = props;

  return (
    <div className={`x0 ${className || ""}`}>
      <div className="flex-row-20">
        <img className="hearticonpalepink-2" src="/img/heart-icon-palepink-1@1x.png" />
        <div className="tttt-1 sfprotext-regular-normal-mountain-mist-15px">TT:TT</div>
        <img className="hearticonpalepink-3" src="/img/heart-icon-palepink-1@1x.png" />
      </div>
      <div className="flex-col-31">
        <PutPersonName className={putPersonNameProps.className} />
        <PutPersonName className={putPersonName2Props.className} />
        <PutPersonName className={putPersonName3Props.className} />
        <PutPersonName className={putPersonName4Props.className} />
      </div>
    </div>
  );
}

export default X0;
