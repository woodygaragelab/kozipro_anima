import React from "react";
import "./PutPersonName2.css";

function PutPersonName2(props) {
  const { className } = props;

  return (
    <div className={`put-person-name-3-1 ${className || ""}`}>
      <div className="overlap-group-36">
        <img className="x5-7" src="/img/file--5@1x.png" />
        <input className="name sfprotext-regular-normal-mountain-mist-15px" name="name11" placeholder="Name" />
      </div>
    </div>
  );
}

export default PutPersonName2;
