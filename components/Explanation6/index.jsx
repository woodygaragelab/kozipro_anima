import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import HooderScore from "../HooderScore";
import SimplifiedHeader from "../SimplifiedHeader";
import "./Explanation6.css";

function Explanation6(props) {
  const {
    place,
    place2,
    place3,
    me,
    place4,
    place5,
    place6,
    place7,
    place8,
    place9,
    text10,
    avatarProps,
    avatar2Props,
    avatar3Props,
    avatar2Props2,
    avatar4Props,
    avatar5Props,
    avatar6Props,
    avatar7Props,
    avatar8Props,
    avatar9Props,
    hooderScoreProps,
    simplifiedHeaderProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation6 screen" onclick="window.open('explanation7.html', '_self');">
        <div className="overlap-group13">
          <div className="x27">
            <div className="x103">
              <div className="x102">
                <div className="flex-row-10">
                  <div className="flex-col-19">
                    <div className="overlap-group8-1">
                      <Avatar className={avatarProps.className} />
                      <div className="place-7 meiryo-bold-alto-8px">{place}</div>
                    </div>
                    <div className="flex-row-11">
                      <div className="overlap-group7-5">
                        <Avatar className={avatar2Props.className} />
                        <div className="place-7 meiryo-bold-alto-8px">{place2}</div>
                      </div>
                      <div className="flex-col-20">
                        <div className="flex-row-12">
                          <div className="overlap-group3-7">
                            <Avatar className={avatar3Props.className} />
                            <div className="place-7 meiryo-bold-alto-8px">{place3}</div>
                          </div>
                          <div className="overlap-group11-1">
                            <div className="overlap-group10-4">
                              <div className="overlap-group-40">
                                <Avatar2 src={avatar2Props2.src} className={avatar2Props2.className} />
                                <div className="me-5">{me}</div>
                              </div>
                              <div className="overlap-group1-20">
                                <Avatar className={avatar4Props.className} />
                                <div className="place-7 meiryo-bold-alto-8px">{place4}</div>
                              </div>
                            </div>
                            <div className="overlap-group4">
                              <Avatar className={avatar5Props.className} />
                              <div className="place-7 meiryo-bold-alto-8px">{place5}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-row-13">
                          <div className="overlap-group2-21">
                            <Avatar className={avatar6Props.className} />
                            <div className="place-7 meiryo-bold-alto-8px">{place6}</div>
                          </div>
                          <div className="overlap-group5-5">
                            <Avatar className={avatar7Props.className} />
                            <div className="place-7 meiryo-bold-alto-8px">{place7}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group9">
                    <Avatar className={avatar8Props.className} />
                    <div className="place-7 meiryo-bold-alto-8px">{place8}</div>
                  </div>
                </div>
                <div className="overlap-group6-5">
                  <Avatar className={avatar9Props.className} />
                  <div className="place-7 meiryo-bold-alto-8px">{place9}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-10 sfcompact-bold-mahogany-18px">{text10}</div>
        </div>
        <HooderScore
          className={hooderScoreProps.className}
          x68Props={hooderScoreProps.x68Props}
          x70Props={hooderScoreProps.x70Props}
        />
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeaderProps={simplifiedHeaderProps.detailedHeaderProps}
        />
      </div>
    </div>
  );
}

export default Explanation6;
