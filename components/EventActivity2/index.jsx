import React from "react";
import SimplifiedHeader2 from "../SimplifiedHeader2";
import Back from "../Back";
import X0 from "../X0";
import PutPersonName22 from "../PutPersonName22";
import Login3 from "../Login3";
import HooderHeartrate3 from "../HooderHeartrate3";
import "./EventActivity2.css";

function EventActivity2(props) {
  const {
    yyyyMmDd,
    x9,
    x10,
    graph,
    graph2,
    number,
    number2,
    number3,
    x8,
    x92,
    x102,
    x24,
    text5,
    text6,
    text7,
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
    putPersonName22Props,
    putPersonName222Props,
    putPersonName223Props,
    putPersonName224Props,
    login3Props,
    hooderHeartrate3Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="eventactivity2 screen" name="form4" action="form4" method="post">
        <SimplifiedHeader2
          className={simplifiedHeader2Props.className}
          detailedHeaderProps={simplifiedHeader2Props.detailedHeaderProps}
        />
        <div className="flex-row-7">
          <Back src={backProps.src} className={backProps.className} />
          <div className="days">
            <div className="overlap-group-39">
              <div className="yyyymmdd sfcompact-regular-normal-new-york-pink-20px">{yyyyMmDd}</div>
              <img className="x9" src={x9} />
              <img className="x10" src={x10} />
            </div>
          </div>
          <Back src={back2Props.src} className={back2Props.className} />
        </div>
        <div className="flex-col-15">
          <div className="overlap-group4 meiryo-regular-normal-white-33px">
            <div className="graph">{graph}</div>
            <div className="graph">{graph2}</div>
            <div className="x109">
              <div className="overlap-group1-9">
                <div className="flex-col-16 myriadconceptroman-regular-normal-white-10px">
                  <div className="number">{number}</div>
                  <div className="number-1">{number2}</div>
                  <div className="number-2">{number3}</div>
                </div>
                <div className="flex-col-17">
                  <div className="overlap-group-40">
                    <img className="x8-15" src={x8} />
                    <img className="x9-1" src={x92} />
                    <img className="x10-1" src={x102} />
                    <img className="x24" src={x24} />
                  </div>
                  <div className="flex-row-8 myriadconceptroman-regular-normal-white-10px">
                    <div className="text-5">{text5}</div>
                    <div className="text-6">{text6}</div>
                    <div className="text-7">{text7}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="x29">
            <X0
              putPersonNameProps={x0Props.putPersonNameProps}
              putPersonName2Props={x0Props.putPersonName2Props}
              putPersonName3Props={x0Props.putPersonName3Props}
            />
            <X0
              className={x02Props.className}
              putPersonNameProps={x02Props.putPersonNameProps}
              putPersonName2Props={x02Props.putPersonName2Props}
              putPersonName3Props={x02Props.putPersonName3Props}
            />
            <X0
              className={x03Props.className}
              putPersonNameProps={x03Props.putPersonNameProps}
              putPersonName2Props={x03Props.putPersonName2Props}
              putPersonName3Props={x03Props.putPersonName3Props}
            />
            <X0
              className={x04Props.className}
              putPersonNameProps={x04Props.putPersonNameProps}
              putPersonName2Props={x04Props.putPersonName2Props}
              putPersonName3Props={x04Props.putPersonName3Props}
            />
            <div className="x4">
              <div className="flex-row-9">
                <img className="hearticonpalepink" src={heart_Icon_Palepink} />
                <div className="tttt sfprotext-regular-normal-mountain-mist-15px">{ttTt}</div>
                <img className="hearticonpalepink-1" src={heart_Icon_Palepink2} />
              </div>
              <div className="flex-col-18">
                <PutPersonName22 className={putPersonName22Props.className} />
                <PutPersonName22 className={putPersonName222Props.className} />
                <PutPersonName22 className={putPersonName223Props.className} />
                <PutPersonName22 className={putPersonName224Props.className} />
              </div>
            </div>
          </div>
          <Login3 white08PtRadius={login3Props.white08PtRadius} />
          <HooderHeartrate3
            heartRate={hooderHeartrate3Props.heartRate}
            x6={hooderHeartrate3Props.x6}
            className={hooderHeartrate3Props.className}
          />
        </div>
      </form>
    </div>
  );
}

export default EventActivity2;
