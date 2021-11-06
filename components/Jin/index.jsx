import React from "react";
import "./Jin.css";

function Jin(props) {
  const { jin, x1 } = props;

  return (
    <div className="jin">
      <div className="overlap-group12">
        <div className="jin-1 meiryo-bold-sundown-21px">{jin}</div>
        <img className="x1" src={x1} />
      </div>
    </div>
  );
}

export default Jin;
