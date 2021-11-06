import React from "react";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import "./X13.css";

function X13(props) {
  const { className, avatar2Props, avatarProps } = props;

  return (
    <div className={`x13-1 ${className || ""}`}>
      <div className="flex-col-3">
        <div className="flex-row-1">
          <div className="overlap-group3-2">
            <Avatar />
            <div className="place-2 meiryo-bold-alto-21px">Name</div>
          </div>
          <div className="flex-col-4">
            <div className="overlap-group-26">
              <Avatar />
              <div className="place-2 meiryo-bold-alto-21px">Name</div>
            </div>
            <div className="overlap-group-30">
              <Avatar2 src={avatar2Props.src} />
              <div className="me-2 meiryo-bold-sundown-21px">Me</div>
            </div>
          </div>
        </div>
        <div className="overlap-group2-16">
          <Avatar />
          <div className="place-2 meiryo-bold-alto-21px">Name</div>
        </div>
      </div>
      <div className="flex-col-5">
        <div className="overlap-group-26">
          <Avatar />
          <div className="place-2 meiryo-bold-alto-21px">Name</div>
        </div>
        <div className="overlap-group5-2">
          <Avatar className={avatarProps.className} />
          <div className="place-2 meiryo-bold-alto-21px">Name</div>
        </div>
      </div>
    </div>
  );
}

export default X13;
