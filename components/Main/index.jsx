import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import HooderScore2 from "../HooderScore2";
import "./Main.css";

function Main(props) {
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
    avatar2Props,
    avatarProps,
    avatar2Props2,
    simplifiedHeader2Props,
    hooderScore2Props,
  } = props;

  return (
    <div className="main screen">
      <div className="x14-2">
        <div className="flex-row-15">
          <div className="flex-col-24">
            <Link to="/photochoose1">
              <div className="x271">
                <div className="overlap-group-42">
                  <Avatar />
                  <div className="place-9 meiryo-bold-alto-21px">{place}</div>
                </div>
              </div>
            </Link>
            <div className="flex-row-16">
              <Link to="/photochoose1">
                <div className="x270">
                  <div className="overlap-group-42">
                    <Avatar />
                    <div className="place-9 meiryo-bold-alto-21px">{place2}</div>
                  </div>
                </div>
              </Link>
              <div className="flex-col-25">
                <div className="flex-row-17">
                  <Link to="/photochoose1">
                    <div className="x266">
                      <div className="overlap-group-42">
                        <Avatar />
                        <div className="place-9 meiryo-bold-alto-21px">{place3}</div>
                      </div>
                    </div>
                  </Link>
                  <div className="flex-col-26">
                    <Link to="/photochoose1">
                      <div className="link">
                        <div className="overlap-group-42">
                          <Avatar />
                          <div className="place-9 meiryo-bold-alto-21px">{place4}</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/photochoose1" className="align-self-flex-end">
                      <div className="x263">
                        <div className="overlap-group-42">
                          <Avatar2 src={avatar2Props.src} />
                          <div className="me-9 meiryo-bold-sundown-21px">{me}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="overlap-group2-24">
                  <Avatar />
                  <div className="place-9 meiryo-bold-alto-21px">{place5}</div>
                </div>
              </div>
              <div className="flex-col-27">
                <Link to="/photochoose1">
                  <div className="link">
                    <div className="overlap-group-42">
                      <Avatar />
                      <div className="place-9 meiryo-bold-alto-21px">{place6}</div>
                    </div>
                  </div>
                </Link>
                <Link to="/photochoose1" className="align-self-flex-end">
                  <div className="x268">
                    <div className="overlap-group-42">
                      <Avatar className={avatarProps.className} />
                      <div className="place-9 meiryo-bold-alto-21px">{place7}</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/photochoose1">
            <div className="x272">
              <div className="overlap-group-42">
                <Avatar />
                <div className="place-9 meiryo-bold-alto-21px">{place8}</div>
              </div>
            </div>
          </Link>
        </div>
        <div className="overlap-group6-9">
          <Avatar className={avatar2Props2.className} />
          <div className="place-9 meiryo-bold-alto-21px">{place9}</div>
        </div>
      </div>
      <SimplifiedHeader2
        className={simplifiedHeader2Props.className}
        detailedHeader2Props={simplifiedHeader2Props.detailedHeader2Props}
      />
      <HooderScore2
        heartRate={hooderScore2Props.heartRate}
        x6={hooderScore2Props.x6}
        message={hooderScore2Props.message}
        x8={hooderScore2Props.x8}
        x69Props={hooderScore2Props.x69Props}
      />
    </div>
  );
}

export default Main;
