import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import HooderScore from "../HooderScore";
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
    avatar2Props,
    avatarProps,
    avatar2Props2,
    hooderScoreProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation8 screen">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <div className="overlap-group12-4">
          <div className="overlap-group11-4">
            <div className="x14-1">
              <div className="flex-row-19">
                <div className="flex-col-27">
                  <div className="overlap-group8-6">
                    <Avatar />
                    <div className="place-10 meiryo-bold-alto-21px">{place}</div>
                  </div>
                  <div className="flex-row-20">
                    <div className="overlap-group7-8">
                      <Avatar />
                      <div className="place-10 meiryo-bold-alto-21px">{place2}</div>
                    </div>
                    <div className="flex-col-28">
                      <div className="flex-row-21">
                        <div className="overlap-group3-10">
                          <Avatar />
                          <div className="place-10 meiryo-bold-alto-21px">{place3}</div>
                        </div>
                        <div className="flex-col-29">
                          <div className="overlap-group-50">
                            <Avatar />
                            <div className="place-10 meiryo-bold-alto-21px">{place4}</div>
                          </div>
                          <div className="overlap-group-51">
                            <Avatar2 src={avatar2Props.src} />
                            <div className="me-8 meiryo-bold-sundown-21px">{me}</div>
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group2-24">
                        <Avatar />
                        <div className="place-10 meiryo-bold-alto-21px">{place5}</div>
                      </div>
                    </div>
                    <div className="flex-col-30">
                      <div className="overlap-group-50">
                        <Avatar />
                        <div className="place-10 meiryo-bold-alto-21px">{place6}</div>
                      </div>
                      <div className="overlap-group5-8">
                        <Avatar className={avatarProps.className} />
                        <div className="place-10 meiryo-bold-alto-21px">{place7}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group9-3">
                  <Avatar />
                  <div className="place-10 meiryo-bold-alto-21px">{place8}</div>
                </div>
              </div>
              <div className="overlap-group6-8">
                <Avatar className={avatar2Props2.className} />
                <div className="place-10 meiryo-bold-alto-21px">{place9}</div>
              </div>
            </div>
            <div className="lets-start sfcompact-bold-mahogany-18px">{letsStart}</div>
          </div>
          <HooderScore
            className={hooderScoreProps.className}
            x6822Props={hooderScoreProps.x6822Props}
            x704Props={hooderScoreProps.x704Props}
          />
        </div>
      </div>
    </div>
  );
}

export default Explanation8;
