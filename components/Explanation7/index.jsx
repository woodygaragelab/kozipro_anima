import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import HooderScore from "../HooderScore";
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
    text11,
    simplifiedHeader2Props,
    avatar2Props,
    avatarProps,
    avatar2Props2,
    hooderScoreProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation7 screen">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <div className="overlap-group12-3">
          <div className="overlap-group11-3">
            <img className="x15-2" src={x15} />
            <img className="x16-1" src={x16} />
            <div className="x14">
              <div className="flex-row-16">
                <div className="flex-col-23">
                  <div className="overlap-group8-5">
                    <Avatar />
                    <div className="place-9 meiryo-bold-alto-21px">{place}</div>
                  </div>
                  <div className="flex-row-17">
                    <div className="overlap-group7-7">
                      <Avatar />
                      <div className="place-9 meiryo-bold-alto-21px">{place2}</div>
                    </div>
                    <div className="flex-col-24">
                      <div className="flex-row-18">
                        <div className="overlap-group3-9">
                          <Avatar />
                          <div className="place-9 meiryo-bold-alto-21px">{place3}</div>
                        </div>
                        <div className="flex-col-25">
                          <div className="overlap-group-48">
                            <Avatar />
                            <div className="place-9 meiryo-bold-alto-21px">{place4}</div>
                          </div>
                          <div className="overlap-group-49">
                            <Avatar2 src={avatar2Props.src} />
                            <div className="me-7 meiryo-bold-sundown-21px">{me}</div>
                          </div>
                        </div>
                      </div>
                      <div className="overlap-group2-23">
                        <Avatar />
                        <div className="place-9 meiryo-bold-alto-21px">{place5}</div>
                      </div>
                    </div>
                    <div className="flex-col-26">
                      <div className="overlap-group-48">
                        <Avatar />
                        <div className="place-9 meiryo-bold-alto-21px">{place6}</div>
                      </div>
                      <div className="overlap-group5-7">
                        <Avatar className={avatarProps.className} />
                        <div className="place-9 meiryo-bold-alto-21px">{place7}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="overlap-group9-2">
                  <Avatar />
                  <div className="place-9 meiryo-bold-alto-21px">{place8}</div>
                </div>
              </div>
              <div className="overlap-group6-7">
                <Avatar className={avatar2Props2.className} />
                <div className="place-9 meiryo-bold-alto-21px">{place9}</div>
              </div>
            </div>
            <div className="text-12 sfcompact-bold-mahogany-18px">{text11}</div>
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

export default Explanation7;
