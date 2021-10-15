import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader4 from "../SimplifiedHeader4";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import HooderScore from "../HooderScore";
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
    simplifiedHeader4Props,
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
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="explanation6 screen" onclick="window.open('explanation7.html', '_self');">
        <SimplifiedHeader4 detailedHeaderProps={simplifiedHeader4Props.detailedHeaderProps} />
        <div className="overlap-group14">
          <div className="overlap-group13-1">
            <div className="x27">
              <div className="x103">
                <div className="x102">
                  <div className="flex-row-12">
                    <div className="flex-col-21">
                      <div className="overlap-group8-3">
                        <Avatar className={avatarProps.className} />
                        <div className="place-7 meiryo-bold-alto-8px">{place}</div>
                      </div>
                      <div className="flex-row-13">
                        <div className="overlap-group7-5">
                          <Avatar className={avatar2Props.className} />
                          <div className="place-7 meiryo-bold-alto-8px">{place2}</div>
                        </div>
                        <div className="flex-col-22">
                          <div className="flex-row-14">
                            <div className="overlap-group3-7">
                              <Avatar className={avatar3Props.className} />
                              <div className="place-7 meiryo-bold-alto-8px">{place3}</div>
                            </div>
                            <div className="overlap-group11-1">
                              <div className="overlap-group10-4">
                                <div className="overlap-group-45">
                                  <Avatar2 src={avatar2Props2.src} className={avatar2Props2.className} />
                                  <div className="me-5">{me}</div>
                                </div>
                                <div className="overlap-group1-20">
                                  <Avatar className={avatar4Props.className} />
                                  <div className="place-7 meiryo-bold-alto-8px">{place4}</div>
                                </div>
                              </div>
                              <div className="overlap-group4-1">
                                <Avatar className={avatar5Props.className} />
                                <div className="place-7 meiryo-bold-alto-8px">{place5}</div>
                              </div>
                            </div>
                          </div>
                          <div className="flex-row-15">
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
            x6822Props={hooderScoreProps.x6822Props}
            x704Props={hooderScoreProps.x704Props}
          />
        </div>
      </div>
    </div>
  );
}

export default Explanation6;
