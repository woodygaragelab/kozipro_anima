import React from "react";
import "./PutPersonName.css";

function PutPersonName(props) {
  const { className } = props;

  return (
    <div className={`put-person-name-1 ${className || ""}`}>
      <div className="overlap-group3-5">
        <img className="x5-2" src="/img/file--5@1x.png" />
        <div className="place-6 sfprotext-regular-normal-mountain-mist-15px">name</div>
      </div>
    </div>
  );
}

export default PutPersonName;
