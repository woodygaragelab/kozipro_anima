import React from "react";
import { Link } from "react-router-dom";
import X271 from "../X271";
import Avatar2 from "../Avatar2";
import X268 from "../X268";
import SimplifiedHeader from "../SimplifiedHeader";
import HooderScore from "../HooderScore";
import "./Main.css";

function Main(props) {
  const {
    me,
    x271Props,
    x2712Props,
    x2713Props,
    avatar2Props,
    x2714Props,
    x2715Props,
    x268Props,
    x2716Props,
    x2682Props,
    simplifiedHeaderProps,
    hooderScoreProps,
  } = props;

  return (
    <div className="main screen">
      <div className="x14">
        <div className="flex-row-1">
          <div className="flex-col">
            <X271 />
            <div className="flex-row-2">
              <X271 className={x271Props.className} />
              <X271 className={x2712Props.className} />
              <div className="flex-col-1">
                <X271 className={x2713Props.className} />
                <Link to="/photochoose1" className="align-self-flex-end">
                  <div className="x263">
                    <div className="me">{me}</div>
                    <Avatar2 src={avatar2Props.src} />
                  </div>
                </Link>
              </div>
            </div>
            <X271 className={x2714Props.className} />
          </div>
          <div className="flex-col-2">
            <X271 className={x2715Props.className} />
            <X268 avatarProps={x268Props.avatarProps} />
          </div>
          <X271 className={x2716Props.className} />
        </div>
        <X268 className={x2682Props.className} avatarProps={x2682Props.avatarProps} />
      </div>
      <SimplifiedHeader className={simplifiedHeaderProps.className} />
      <HooderScore
        x6={hooderScoreProps.x6}
        x7={hooderScoreProps.x7}
        score={hooderScoreProps.score}
        x8={hooderScoreProps.x8}
      />
    </div>
  );
}

export default Main;
