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
    text7,
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
        <div className="overlap-group13-1">
          <div className="x27">
            <div className="x103">
              <div className="x102">
                <div className="flex-row-5">
                  <div className="flex-col-14">
                    <div className="overlap-group8-2">
                      <Avatar className={avatarProps.className} />
                      <div className="place-6 meiryo-bold-alto-8px">{place}</div>
                    </div>
                    <div className="flex-row-6">
                      <div className="overlap-group7-6">
                        <Avatar className={avatar2Props.className} />
                        <div className="place-6 meiryo-bold-alto-8px">{place2}</div>
                      </div>
                      <div className="flex-col-15">
                        <div className="flex-row-7">
                          <div className="overlap-group3-6">
                            <Avatar className={avatar3Props.className} />
                            <div className="place-6 meiryo-bold-alto-8px">{place3}</div>
                          </div>
                          <div className="overlap-group11-2">
                            <div className="overlap-group10-5">
                              <div className="overlap-group-37">
                                <Avatar2 src={avatar2Props2.src} className={avatar2Props2.className} />
                                <div className="me-6">{me}</div>
                              </div>
                              <div className="overlap-group1-20">
                                <Avatar className={avatar4Props.className} />
                                <div className="place-6 meiryo-bold-alto-8px">{place4}</div>
                              </div>
                            </div>
                            <div className="overlap-group4-1">
                              <Avatar className={avatar5Props.className} />
                              <div className="place-6 meiryo-bold-alto-8px">{place5}</div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-row-8">
                          <div className="overlap-group2-21">
                            <Avatar className={avatar6Props.className} />
                            <div className="place-6 meiryo-bold-alto-8px">{place6}</div>
                          </div>
                          <div className="overlap-group5-6">
                            <Avatar className={avatar7Props.className} />
                            <div className="place-6 meiryo-bold-alto-8px">{place7}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="overlap-group9-1">
                    <Avatar className={avatar8Props.className} />
                    <div className="place-6 meiryo-bold-alto-8px">{place8}</div>
                  </div>
                </div>
                <div className="overlap-group6-6">
                  <Avatar className={avatar9Props.className} />
                  <div className="place-6 meiryo-bold-alto-8px">{place9}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-7 sfcompact-bold-mahogany-18px">{text7}</div>
        </div>
        <HooderScore
          className={hooderScoreProps.className}
          x68Props={hooderScoreProps.x68Props}
          x69Props={hooderScoreProps.x69Props}
          x70Props={hooderScoreProps.x70Props}
        />
        <SimplifiedHeader
          className={simplifiedHeaderProps.className}
          detailedHeader2Props={simplifiedHeaderProps.detailedHeader2Props}
        />
      </div>
    </div>
  );
}

export default Explanation6;
