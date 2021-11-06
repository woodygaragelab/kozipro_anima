import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import Days from "../Days";
import Back from "../Back";
import X0 from "../X0";
import PutPersonName22 from "../PutPersonName22";
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
    text9,
    text10,
    text11,
    graph,
    graph2,
    heart_Icon_Palepink,
    ttTt,
    heart_Icon_Palepink2,
    simplifiedHeader2Props,
    daysProps,
    backProps,
    back2Props,
    x0Props,
    x02Props,
    x03Props,
    x04Props,
    putPersonName22Props,
    putPersonName222Props,
    putPersonName223Props,
    login3Props,
    hooderHeartrateProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form
        className="eventactivity2 meiryo-regular-normal-white-33px screen"
        name="form2"
        action="form2"
        method="post"
      >
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeader2Props={simplifiedHeader2Props.detailedHeader2Props}
        />
        <Days className={daysProps.className} />
        <Back src={backProps.src} className={backProps.className} />
        <Back src={back2Props.src} className={back2Props.className} />
        <div className="x109">
          <div className="overlap-group1-21">
            <div className="flex-col-28 myriadconceptroman-regular-normal-white-10px">
              <div className="number">{number}</div>
              <div className="number-1">{number2}</div>
              <div className="number-2">{number3}</div>
            </div>
            <div className="flex-col-29">
              <div className="overlap-group-44">
                <img className="x8-16" src={x8} />
                <img className="x9-2" src={x9} />
                <img className="x10-2" src={x10} />
                <img className="x24" src={x24} />
              </div>
              <div className="flex-row-18 myriadconceptroman-regular-normal-white-10px">
                <div className="text-9">{text9}</div>
                <div className="text-10">{text10}</div>
                <div className="text-11">{text11}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="graph">{graph}</div>
        <div className="graph-1">{graph2}</div>
        <div className="x29">
          <X0
            putPersonNameProps={x0Props.putPersonNameProps}
            putPersonName2Props={x0Props.putPersonName2Props}
            putPersonName3Props={x0Props.putPersonName3Props}
            putPersonName4Props={x0Props.putPersonName4Props}
          />
          <X0
            className={x02Props.className}
            putPersonNameProps={x02Props.putPersonNameProps}
            putPersonName2Props={x02Props.putPersonName2Props}
            putPersonName3Props={x02Props.putPersonName3Props}
            putPersonName4Props={x02Props.putPersonName4Props}
          />
          <X0
            className={x03Props.className}
            putPersonNameProps={x03Props.putPersonNameProps}
            putPersonName2Props={x03Props.putPersonName2Props}
            putPersonName3Props={x03Props.putPersonName3Props}
            putPersonName4Props={x03Props.putPersonName4Props}
          />
          <X0
            className={x04Props.className}
            putPersonNameProps={x04Props.putPersonNameProps}
            putPersonName2Props={x04Props.putPersonName2Props}
            putPersonName3Props={x04Props.putPersonName3Props}
            putPersonName4Props={x04Props.putPersonName4Props}
          />
          <div className="x4-1">
            <div className="flex-row-19">
              <img className="hearticonpalepink" src={heart_Icon_Palepink} />
              <div className="tttt sfprotext-regular-normal-mountain-mist-15px">{ttTt}</div>
              <img className="hearticonpalepink-1" src={heart_Icon_Palepink2} />
            </div>
            <div className="flex-col-30">
              <PutPersonName22 />
              <PutPersonName22 className={putPersonName22Props.className} />
              <PutPersonName22 className={putPersonName222Props.className} />
              <PutPersonName22 className={putPersonName223Props.className} />
            </div>
          </div>
        </div>
        <Login3
          white08PtRadius={login3Props.white08PtRadius}
          buttonsLabelLightProps={login3Props.buttonsLabelLightProps}
        />
        <HooderHeartrate
          className={hooderHeartrateProps.className}
          x70Props={hooderHeartrateProps.x70Props}
          x70Props2={hooderHeartrateProps.x70Props2}
        />
      </form>
    </div>
  );
}

export default EventActivity2;
