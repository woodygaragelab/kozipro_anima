import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import Days from "../Days";
import Back from "../Back";
import X0 from "../X0";
import PutPersonName from "../PutPersonName";
import Login3 from "../Login3";
import HooderHeartrate from "../HooderHeartrate";
import "./EventActivity2.css";

function EventActivity2(props) {
  const {
    number,
    number2,
    number3,
    x8,
    x9,
    x10,
    x24,
    text5,
    text6,
    text7,
    title,
    graph,
    heart_Icon_Palepink,
    ttTt,
    heart_Icon_Palepink2,
    simplifiedHeader2Props,
    backProps,
    back2Props,
    x0Props,
    x02Props,
    x03Props,
    x04Props,
    putPersonNameProps,
    putPersonName2Props,
    putPersonName3Props,
    putPersonName4Props,
    login3Props,
    hooderHeartrateProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form
        className="eventactivity2 meiryo-regular-normal-white-33px screen"
        name="form4"
        action="form4"
        method="post"
      >
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <Days />
        <Back src={backProps.src} className={backProps.className} />
        <Back src={back2Props.src} className={back2Props.className} />
        <div className="x109">
          <div className="overlap-group1-9">
            <div className="flex-col-15 myriadconceptroman-regular-normal-white-10px">
              <div className="number">{number}</div>
              <div className="number-1">{number2}</div>
              <div className="number-2">{number3}</div>
            </div>
            <div className="flex-col-16">
              <div className="overlap-group-34">
                <img className="x8-15" src={x8} />
                <img className="x9" src={x9} />
                <img className="x10" src={x10} />
                <img className="x24" src={x24} />
              </div>
              <div className="flex-row-7 myriadconceptroman-regular-normal-white-10px">
                <div className="text-5">{text5}</div>
                <div className="text-6">{text6}</div>
                <div className="text-7">{text7}</div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="title">{title}</h1>
        <div className="graph">{graph}</div>
        <div className="x29">
          <X0
            putPersonName2Props={x0Props.putPersonName2Props}
            putPersonName22Props={x0Props.putPersonName22Props}
            putPersonName23Props={x0Props.putPersonName23Props}
          />
          <X0
            className={x02Props.className}
            putPersonName2Props={x02Props.putPersonName2Props}
            putPersonName22Props={x02Props.putPersonName22Props}
            putPersonName23Props={x02Props.putPersonName23Props}
          />
          <X0
            className={x03Props.className}
            putPersonName2Props={x03Props.putPersonName2Props}
            putPersonName22Props={x03Props.putPersonName22Props}
            putPersonName23Props={x03Props.putPersonName23Props}
          />
          <X0
            className={x04Props.className}
            putPersonName2Props={x04Props.putPersonName2Props}
            putPersonName22Props={x04Props.putPersonName22Props}
            putPersonName23Props={x04Props.putPersonName23Props}
          />
          <div className="x4">
            <div className="flex-row-8">
              <img className="hearticonpalepink" src={heart_Icon_Palepink} />
              <div className="tttt sfprotext-regular-normal-mountain-mist-15px">{ttTt}</div>
              <img className="hearticonpalepink-1" src={heart_Icon_Palepink2} />
            </div>
            <div className="flex-col-17">
              <PutPersonName className={putPersonNameProps.className} />
              <PutPersonName className={putPersonName2Props.className} />
              <PutPersonName className={putPersonName3Props.className} />
              <PutPersonName className={putPersonName4Props.className} />
            </div>
          </div>
        </div>
        <Login3
          white08PtRadius={login3Props.white08PtRadius}
          buttonsLabelLightProps={login3Props.buttonsLabelLightProps}
        />
        <HooderHeartrate className={hooderHeartrateProps.className} />
      </form>
    </div>
  );
}

export default EventActivity2;
