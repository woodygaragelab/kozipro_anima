import React from "react";
import "./PutPersonName.css";

function PutPersonName(props) {
  const { className } = props;

  return (
    <div className={`put-person-name-3 ${className || ""}`}>
      <div className="overlap-group-20">
        <img className="x5-1" src="/img/file--5@1x.png" />
        <input className="name sfprotext-regular-normal-mountain-mist-15px" name="name1" placeholder="Name" />
      </div>
    </div>
  );
}

export default PutPersonName;
