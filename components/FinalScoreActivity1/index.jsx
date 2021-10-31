import React from "react";
import DetailedHeader2 from "../DetailedHeader2";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import Jin from "../Jin";
import X68 from "../X68";
import X692 from "../X692";
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
    detailedHeader2Props,
    avatarProps,
    avatar2Props,
    avatar22Props,
    avatar2Props2,
    jinProps,
    avatar3Props,
    x68Props,
    x692Props,
    x70Props,
  } = props;

  return (
    <div className="finalscoreactivity-1 screen">
      <DetailedHeader2
        time={detailedHeader2Props.time}
        score={detailedHeader2Props.score}
        cellularConnection={detailedHeader2Props.cellularConnection}
        wifi={detailedHeader2Props.wifi}
        cap={detailedHeader2Props.cap}
        logout={detailedHeader2Props.logout}
        text12={detailedHeader2Props.text12}
      />
      <div className="x15-2">
        <div className="x106">
          <div className="x105">
            <div className="overlap-group13-1">
              <div className="overlap-group-43">
                <div className="x4-1"></div>
                <div className="x5-27"></div>
              </div>
              <div className="overlap-group1-21">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place}</div>
              </div>
              <div className="overlap-group2-23">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place2}</div>
              </div>
              <div className="overlap-group3-9">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place3}</div>
              </div>
              <div className="overlap-group4-1">
                <Avatar className={avatarProps.className} />
                <div className="place-9 meiryo-bold-alto-21px">{place4}</div>
              </div>
              <div className="overlap-group5-7">
                <Avatar2 src={avatar2Props.src} />
                <div className="me-7 meiryo-bold-sundown-21px">{me}</div>
              </div>
              <div className="overlap-group6-7">
                <Avatar2 src={avatar22Props.src} className={avatar22Props.className} />
                <div className="jimin meiryo-bold-sundown-21px">{jimin}</div>
              </div>
              <div className="overlap-group7-7">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place5}</div>
              </div>
              <div className="overlap-group9-2">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place6}</div>
              </div>
              <div className="overlap-group10-5">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place7}</div>
              </div>
              <div className="overlap-group11-3">
                <Avatar className={avatar2Props2.className} />
                <div className="place-9 meiryo-bold-alto-21px">{place8}</div>
              </div>
              <Jin jin={jinProps.jin} x1={jinProps.x1} />
            </div>
            <div className="overlap-group8-3">
              <Avatar className={avatar3Props.className} />
              <div className="place-9 meiryo-bold-alto-21px">{place9}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hooder-10 border-2px-mist-gray">
        <X68 x6={x68Props.x6} className={x68Props.className} />
        <X692 className={x692Props.className} />
        <X70 className={x70Props.className} />
      </div>
    </div>
  );
}

export default FinalScoreActivity1;
