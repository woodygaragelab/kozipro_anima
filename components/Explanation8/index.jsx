import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import HooderScore from "../HooderScore";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import "./Explanation8.css";

function Explanation8(props) {
  const {
    place,
    place2,
    place3,
    place4,
    me,
    place5,
    place6,
    place7,
    place8,
    place9,
    letsStart,
    simplifiedHeader2Props,
    hooderScoreProps,
    avatar2Props,
    avatarProps,
    avatar2Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation8 screen">
        <SimplifiedHeader2 detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps} />
        <HooderScore x6822Props={hooderScoreProps.x6822Props} x704Props={hooderScoreProps.x704Props} />
        <div className="overlap-group11-3">
          <div className="x14-1">
            <div className="flex-row-13">
              <div className="flex-col-20">
                <div className="overlap-group8-3">
                  <Avatar />
                  <div className="place-7 meiryo-bold-alto-21px">{place}</div>
                </div>
                <div className="flex-row-14">
                  <div className="overlap-group7-7">
                    <Avatar />
                    <div className="place-7 meiryo-bold-alto-21px">{place2}</div>
                  </div>
                  <div className="flex-col-21">
                    <div className="flex-row-15">
                      <div className="overlap-group3-7">
                        <Avatar />
                        <div className="place-7 meiryo-bold-alto-21px">{place3}</div>
                      </div>
                      <div className="flex-col-22">
                        <div className="overlap-group-36">
                          <Avatar />
                          <div className="place-7 meiryo-bold-alto-21px">{place4}</div>
                        </div>
                        <div className="overlap-group-37">
                          <Avatar2 src={avatar2Props.src} />
                          <div className="me-7 meiryo-bold-sundown-21px">{me}</div>
                        </div>
                      </div>
                    </div>
                    <div className="overlap-group2-23">
                      <Avatar />
                      <div className="place-7 meiryo-bold-alto-21px">{place5}</div>
                    </div>
                  </div>
                  <div className="flex-col-23">
                    <div className="overlap-group-36">
                      <Avatar />
                      <div className="place-7 meiryo-bold-alto-21px">{place6}</div>
                    </div>
                    <div className="overlap-group5-6">
                      <Avatar className={avatarProps.className} />
                      <div className="place-7 meiryo-bold-alto-21px">{place7}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group9-2">
                <Avatar />
                <div className="place-7 meiryo-bold-alto-21px">{place8}</div>
              </div>
            </div>
            <div className="overlap-group6-7">
              <Avatar className={avatar2Props2.className} />
              <div className="place-7 meiryo-bold-alto-21px">{place9}</div>
            </div>
          </div>
          <div className="lets-start sfcompact-bold-mahogany-18px">{letsStart}</div>
        </div>
      </div>
    </div>
  );
}

export default Explanation8;
