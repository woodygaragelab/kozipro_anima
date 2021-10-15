import React from "react";
import DetailedHeader2 from "../DetailedHeader2";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import Jin from "../Jin";
import X685 from "../X685";
import X6932 from "../X6932";
import X704 from "../X704";
import "./FinalScoreActivity1.css";

function FinalScoreActivity1(props) {
  const {
    place,
    place2,
    place3,
    place4,
    me,
    jimin,
    place5,
    place6,
    place7,
    place8,
    place9,
    detailedHeader2Props,
    avatarProps3,
    avatar2Props,
    avatar22Props,
    avatar2Props24,
    jinProps,
    avatar3Props2,
    avatar3Props22,
    x70Props2,
    x70Props22,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="finalscoreactivity-1 screen">
        <DetailedHeader2
          time={detailedHeader2Props.time}
          score={detailedHeader2Props.score}
          cellularConnection={detailedHeader2Props.cellularConnection}
          wifi={detailedHeader2Props.wifi}
          cap={detailedHeader2Props.cap}
          logout={detailedHeader2Props.logout}
          text1={detailedHeader2Props.text1}
        />
        <div className="x15-1">
          <div className="x106">
            <div className="x105">
              <div className="overlap-group13-2">
                <div className="overlap-group-46">
                  <div className="x4-1"></div>
                  <div className="x5-27"></div>
                </div>
                <div className="overlap-group1-21">
                  <Avatar />
                  <div className="place-8 meiryo-bold-alto-21px">{place}</div>
                </div>
                <div className="overlap-group2-22">
                  <Avatar />
                  <div className="place-8 meiryo-bold-alto-21px">{place2}</div>
                </div>
                <div className="overlap-group3-8">
                  <Avatar />
                  <div className="place-8 meiryo-bold-alto-21px">{place3}</div>
                </div>
                <div className="overlap-group4-2">
                  <Avatar className={avatarProps3.className} />
                  <div className="place-8 meiryo-bold-alto-21px">{place4}</div>
                </div>
                <div className="overlap-group5-6">
                  <Avatar2 src={avatar2Props.src} />
                  <div className="me-6 meiryo-bold-sundown-21px">{me}</div>
                </div>
                <div className="overlap-group6-6">
                  <Avatar2 src={avatar22Props.src} className={avatar22Props.className} />
                  <div className="jimin meiryo-bold-sundown-21px">{jimin}</div>
                </div>
                <div className="overlap-group7-6">
                  <Avatar />
                  <div className="place-8 meiryo-bold-alto-21px">{place5}</div>
                </div>
                <div className="overlap-group9-1">
                  <Avatar />
                  <div className="place-8 meiryo-bold-alto-21px">{place6}</div>
                </div>
                <div className="overlap-group10-5">
                  <Avatar />
                  <div className="place-8 meiryo-bold-alto-21px">{place7}</div>
                </div>
                <div className="overlap-group11-2">
                  <Avatar className={avatar2Props24.className} />
                  <div className="place-8 meiryo-bold-alto-21px">{place8}</div>
                </div>
                <Jin jin={jinProps.jin} x1={jinProps.x1} />
              </div>
              <div className="overlap-group8-4">
                <Avatar className={avatar3Props2.className} />
                <div className="place-8 meiryo-bold-alto-21px">{place9}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hooder-13 border-2px-mist-gray">
          <X685 className={avatar3Props22.className} />
          <X6932 className={x70Props2.className} />
          <X704 className={x70Props22.className} />
        </div>
      </div>
    </div>
  );
}

export default FinalScoreActivity1;
