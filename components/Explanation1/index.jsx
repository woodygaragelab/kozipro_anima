import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import HooderStandard32 from "../HooderStandard32";
import "./Explanation1.css";

function Explanation1(props) {
  const { place, place2, me, place3, place4, place5, text2, simplifiedHeader4Props, avatar2Props, avatarProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation-1 screen" onclick="window.open('explanation2.html', '_self');">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="overlap-group13">
          <div className="overlap-group12-1">
            <div className="x13">
              <div className="flex-col">
                <div className="flex-row-1">
                  <div className="overlap-group6-3">
                    <Avatar />
                    <div className="place meiryo-bold-alto-21px">{place}</div>
                  </div>
                  <div className="flex-col-1">
                    <div className="overlap-group-5">
                      <Avatar />
                      <div className="place meiryo-bold-alto-21px">{place2}</div>
                    </div>
                    <div className="overlap-group10">
                      <Avatar2 src={avatar2Props.src} />
                      <div className="me meiryo-bold-sundown-21px">{me}</div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group8">
                  <Avatar />
                  <div className="place meiryo-bold-alto-21px">{place3}</div>
                </div>
              </div>
              <div className="flex-col-2">
                <div className="overlap-group-5">
                  <Avatar />
                  <div className="place meiryo-bold-alto-21px">{place4}</div>
                </div>
                <div className="overlap-group7">
                  <Avatar className={avatarProps.className} />
                  <div className="place meiryo-bold-alto-21px">{place5}</div>
                </div>
              </div>
            </div>
            <div className="text-2 sfcompact-bold-mahogany-18px">{text2}</div>
          </div>
          <HooderStandard32 />
        </div>
      </div>
    </div>
  );
}

export default Explanation1;
