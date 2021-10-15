import React from "react";
import "./IPhone12ProMax1.css";

function IPhone12ProMax1(props) {
  const { ht, title } = props;

  return (
    <div className="container-center-horizontal">
      <div className="iphone-12-pro-max-1 meiryo-regular-normal-dove-gray-163px screen">
        <div className="ht">{ht}</div>
        <h1 className="title">{title}</h1>
      </div>
    </div>
  );
}

export default IPhone12ProMax1;
