import React from "react";
import "./Loading.css";

function Loading(props) {
  const { className } = props;

  return (
    <div className={`loading ${className || ""}`}>
      <div className="loading-1 sfprotext-regular-normal-new-york-pink-20px">Loading…</div>
    </div>
  );
}

export default Loading;
