import React from "react";
import { Link } from "react-router-dom";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import Avatar from "../Avatar";
import Avatar2 from "../Avatar2";
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
    simplifiedHeader2Props,
    avatar2Props,
    avatarProps,
    avatar2Props2,
    hooderScore2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="main screen">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <div className="overlap-group11-5">
          <div className="x14-2">
            <div className="flex-row-22">
              <div className="flex-col-31">
                <Link to="/photochoose1">
                  <div className="x271">
                    <div className="overlap-group-52">
                      <Avatar />
                      <div className="place-11 meiryo-bold-alto-21px">{place}</div>
                    </div>
                  </div>
                </Link>
                <div className="flex-row-23">
                  <Link to="/photochoose1">
                    <div className="x270">
                      <div className="overlap-group-52">
                        <Avatar />
                        <div className="place-11 meiryo-bold-alto-21px">{place2}</div>
                      </div>
                    </div>
                  </Link>
                  <div className="flex-col-32">
                    <div className="flex-row-24">
                      <Link to="/photochoose1">
                        <div className="x266">
                          <div className="overlap-group-52">
                            <Avatar />
                            <div className="place-11 meiryo-bold-alto-21px">{place3}</div>
                          </div>
                        </div>
                      </Link>
                      <div className="flex-col-33">
                        <Link to="/photochoose1">
                          <div className="link">
                            <div className="overlap-group-52">
                              <Avatar />
                              <div className="place-11 meiryo-bold-alto-21px">{place4}</div>
                            </div>
                          </div>
                        </Link>
                        <Link to="/photochoose1" className="align-self-flex-end">
                          <div className="x263">
                            <div className="overlap-group-52">
                              <Avatar2 src={avatar2Props.src} />
                              <div className="me-9 meiryo-bold-sundown-21px">{me}</div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="overlap-group2-25">
                      <Avatar />
                      <div className="place-11 meiryo-bold-alto-21px">{place5}</div>
                    </div>
                  </div>
                  <div className="flex-col-34">
                    <Link to="/photochoose1">
                      <div className="link">
                        <div className="overlap-group-52">
                          <Avatar />
                          <div className="place-11 meiryo-bold-alto-21px">{place6}</div>
                        </div>
                      </div>
                    </Link>
                    <Link to="/photochoose1" className="align-self-flex-end">
                      <div className="x268">
                        <div className="overlap-group-52">
                          <Avatar className={avatarProps.className} />
                          <div className="place-11 meiryo-bold-alto-21px">{place7}</div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/photochoose1">
                <div className="x272">
                  <div className="overlap-group-52">
                    <Avatar />
                    <div className="place-11 meiryo-bold-alto-21px">{place8}</div>
                  </div>
                </div>
              </Link>
            </div>
            <div className="overlap-group6-9">
              <Avatar className={avatar2Props2.className} />
              <div className="place-11 meiryo-bold-alto-21px">{place9}</div>
            </div>
          </div>
          <HooderScore2
            heartRate={hooderScore2Props.heartRate}
            x6={hooderScore2Props.x6}
            message={hooderScore2Props.message}
            x8={hooderScore2Props.x8}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
