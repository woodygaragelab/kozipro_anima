import React from "react";
import { Link } from "react-router-dom";
import DetailedHeader from "../DetailedHeader";
import Days from "../Days";
import Back from "../Back";
import X0 from "../X0";
import PutPersonName from "../PutPersonName";
import Login3 from "../Login3";
import HooderHeartrate from "../HooderHeartrate";
import "./EventActivity2.css";

function EventActivity2(props) {
  const {
    x20,
    x19,
    number,
    number2,
    number3,
    x8,
    x9,
    x10,
    x24,
    text2,
    text3,
    text4,
    title,
    graph,
    heart_Icon_Palepink,
    ttTt,
    heart_Icon_Palepink2,
    backProps,
    back2Props,
    x0Props,
    x02Props,
    x03Props,
    putPersonNameProps,
    putPersonName2Props,
    putPersonName3Props,
    putPersonName4Props,
    login3Props,
    hooderHeartrateProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="eventactivity2 screen" name="form4" action="form4" method="post">
        <div className="simplified-header-5">
          <div className="overlap-group2">
            <div className="overlap-group2-item"></div>
            <div className="overlap-group2-item"></div>
            <DetailedHeader />
            <img className="x20-5" src={x20} />
            <Link to="/login1">
              <img className="x19-5" src={x19} />
            </Link>
          </div>
        </div>
        <Days />
        <Back src={backProps.src} className={backProps.className} />
        <Back src={back2Props.src} className={back2Props.className} />
        <div className="x109">
          <div className="overlap-group1-2">
            <div className="flex-col-4 myriadconceptroman-regular-normal-white-10px">
              <div className="number">{number}</div>
              <div className="number-1">{number2}</div>
              <div className="number-2">{number3}</div>
            </div>
            <div className="flex-col-5">
              <div className="overlap-group-8">
                <img className="x8-2" src={x8} />
                <img className="x9" src={x9} />
                <img className="x10" src={x10} />
                <img className="x24" src={x24} />
              </div>
              <div className="flex-row-4 myriadconceptroman-regular-normal-white-10px">
                <div className="text-2">{text2}</div>
                <div className="text-3">{text3}</div>
                <div className="text-4">{text4}</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="title meiryo-regular-normal-white-33px">{title}</h1>
        <div className="graph meiryo-regular-normal-white-33px">{graph}</div>
        <div className="x29">
          <X0 />
          <X0 className={x0Props.className} />
          <X0 className={x02Props.className} />
          <X0 className={x03Props.className} />
          <div className="x4">
            <div className="flex-row-5">
              <img className="hearticonpalepink" src={heart_Icon_Palepink} />
              <div className="overlap-group8">
                <div className="tttt sfprotext-regular-normal-mountain-mist-15px">{ttTt}</div>
                <img className="hearticonpalepink-1" src={heart_Icon_Palepink2} />
              </div>
            </div>
            <PutPersonName className={putPersonNameProps.className} />
            <PutPersonName className={putPersonName2Props.className} />
            <PutPersonName className={putPersonName3Props.className} />
            <PutPersonName className={putPersonName4Props.className} />
          </div>
        </div>
        <Login3 white08PtRadius={login3Props.white08PtRadius} label={login3Props.label} />
        <HooderHeartrate
          x6={hooderHeartrateProps.x6}
          heartRate={hooderHeartrateProps.heartRate}
          x69Props={hooderHeartrateProps.x69Props}
          x70Props={hooderHeartrateProps.x70Props}
        />
      </form>
    </div>
  );
}

export default EventActivity2;
