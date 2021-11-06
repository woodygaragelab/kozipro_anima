import React from "react";
import DetailedHeader from "../DetailedHeader";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import Jin from "../Jin";
import X68 from "../X68";
import X69 from "../X69";
import X70 from "../X70";
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
    detailedHeaderProps,
    avatarProps,
    avatar2Props,
    avatar22Props,
    avatar2Props2,
    jinProps,
    avatar3Props,
    x68Props,
  } = props;

  return (
    <div className="finalscoreactivity-1 screen">
      <DetailedHeader
        time={detailedHeaderProps.time}
        score={detailedHeaderProps.score}
        cellularConnection={detailedHeaderProps.cellularConnection}
        wifi={detailedHeaderProps.wifi}
        cap={detailedHeaderProps.cap}
        logout={detailedHeaderProps.logout}
        text1={detailedHeaderProps.text1}
      />
      <div className="x15">
        <div className="x106">
          <div className="x105">
            <div className="overlap-group13">
              <div className="overlap-group">
                <div className="x4"></div>
                <div className="x5"></div>
              </div>
              <div className="overlap-group1">
                <Avatar />
                <div className="place meiryo-bold-alto-21px">{place}</div>
              </div>
              <div className="overlap-group2">
                <Avatar />
                <div className="place meiryo-bold-alto-21px">{place2}</div>
              </div>
              <div className="overlap-group3">
                <Avatar />
                <div className="place meiryo-bold-alto-21px">{place3}</div>
              </div>
              <div className="overlap-group4">
                <Avatar className={avatarProps.className} />
                <div className="place meiryo-bold-alto-21px">{place4}</div>
              </div>
              <div className="overlap-group5">
                <Avatar2 src={avatar2Props.src} />
                <div className="me meiryo-bold-sundown-21px">{me}</div>
              </div>
              <div className="overlap-group6">
                <Avatar2 src={avatar22Props.src} className={avatar22Props.className} />
                <div className="jimin meiryo-bold-sundown-21px">{jimin}</div>
              </div>
              <div className="overlap-group7">
                <Avatar />
                <div className="place meiryo-bold-alto-21px">{place5}</div>
              </div>
              <div className="overlap-group9">
                <Avatar />
                <div className="place meiryo-bold-alto-21px">{place6}</div>
              </div>
              <div className="overlap-group10">
                <Avatar />
                <div className="place meiryo-bold-alto-21px">{place7}</div>
              </div>
              <div className="overlap-group11">
                <Avatar className={avatar2Props2.className} />
                <div className="place meiryo-bold-alto-21px">{place8}</div>
              </div>
              <Jin jin={jinProps.jin} x1={jinProps.x1} />
            </div>
            <div className="overlap-group8">
              <Avatar className={avatar3Props.className} />
              <div className="place meiryo-bold-alto-21px">{place9}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hooder border-2px-mist-gray">
        <X68 x6={x68Props.x6} />
        <X69 />
        <X70 />
      </div>
    </div>
  );
}

export default FinalScoreActivity1;
