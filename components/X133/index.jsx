import React from "react";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import "./X133.css";

function X133(props) {
  const { className, avatar2Props3, avatarProps3 } = props;

  return (
    <div className={`x13-1 ${className || ""}`}>
      <div className="flex-col-3">
        <div className="flex-row-2">
          <div className="overlap-group3-1">
            <Avatar />
            <div className="place-1 meiryo-bold-alto-21px">Name</div>
          </div>
          <div className="flex-col-4">
            <div className="overlap-group-22">
              <Avatar />
              <div className="place-1 meiryo-bold-alto-21px">Name</div>
            </div>
            <div className="overlap-group-26">
              <Avatar2 src={avatar2Props3.src} />
              <div className="me-1 meiryo-bold-sundown-21px">Me</div>
            </div>
          </div>
        </div>
        <div className="overlap-group2-14">
          <Avatar />
          <div className="place-1 meiryo-bold-alto-21px">Name</div>
        </div>
      </div>
      <div className="flex-col-5">
        <div className="overlap-group-22">
          <Avatar />
          <div className="place-1 meiryo-bold-alto-21px">Name</div>
        </div>
        <div className="overlap-group5">
          <Avatar className={avatarProps3.className} />
          <div className="place-1 meiryo-bold-alto-21px">Name</div>
        </div>
      </div>
    </div>
  );
}

export default X133;
