import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import HooderScore from "../HooderScore";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import "./Explanation7.css";

function Explanation7(props) {
  const {
    x15,
    x16,
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
    text12,
    simplifiedHeader2Props,
    hooderScoreProps,
    avatar2Props,
    avatarProps,
    avatar2Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation7 screen">
        <SimplifiedHeader2 detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps} />
        <HooderScore x6822Props={hooderScoreProps.x6822Props} x704Props={hooderScoreProps.x704Props} />
        <div className="overlap-group11-2">
          <img className="x15-1" src={x15} />
          <img className="x16-1" src={x16} />
          <div className="x14">
            <div className="flex-row-10">
              <div className="flex-col-16">
                <div className="overlap-group8-2">
                  <Avatar />
                  <div className="place-6 meiryo-bold-alto-21px">{place}</div>
                </div>
                <div className="flex-row-11">
                  <div className="overlap-group7-6">
                    <Avatar />
                    <div className="place-6 meiryo-bold-alto-21px">{place2}</div>
                  </div>
                  <div className="flex-col-17">
                    <div className="flex-row-12">
                      <div className="overlap-group3-6">
                        <Avatar />
                        <div className="place-6 meiryo-bold-alto-21px">{place3}</div>
                      </div>
                      <div className="flex-col-18">
                        <div className="overlap-group-34">
                          <Avatar />
                          <div className="place-6 meiryo-bold-alto-21px">{place4}</div>
                        </div>
                        <div className="overlap-group-35">
                          <Avatar2 src={avatar2Props.src} />
                          <div className="me-6 meiryo-bold-sundown-21px">{me}</div>
                        </div>
                      </div>
                    </div>
                    <div className="overlap-group2-22">
                      <Avatar />
                      <div className="place-6 meiryo-bold-alto-21px">{place5}</div>
                    </div>
                  </div>
                  <div className="flex-col-19">
                    <div className="overlap-group-34">
                      <Avatar />
                      <div className="place-6 meiryo-bold-alto-21px">{place6}</div>
                    </div>
                    <div className="overlap-group5-5">
                      <Avatar className={avatarProps.className} />
                      <div className="place-6 meiryo-bold-alto-21px">{place7}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group9-1">
                <Avatar />
                <div className="place-6 meiryo-bold-alto-21px">{place8}</div>
              </div>
            </div>
            <div className="overlap-group6-6">
              <Avatar className={avatar2Props2.className} />
              <div className="place-6 meiryo-bold-alto-21px">{place9}</div>
            </div>
          </div>
          <div className="text-8 sfcompact-bold-mahogany-18px">{text12}</div>
        </div>
      </div>
    </div>
  );
}

export default Explanation7;
