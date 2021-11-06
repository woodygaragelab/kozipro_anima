import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import FinalScoreActivity1 from "./components/FinalScoreActivity1";
import TextInputActivity1 from "./components/TextInputActivity1";
import WaitingActivity2 from "./components/WaitingActivity2";
import Fail from "./components/Fail";
import Explanation1 from "./components/Explanation1";
import Explanation2 from "./components/Explanation2";
import Explanation3 from "./components/Explanation3";
import Explanation4 from "./components/Explanation4";
import Explanation5 from "./components/Explanation5";
import Explanation6 from "./components/Explanation6";
import Explanation7 from "./components/Explanation7";
import Explanation8 from "./components/Explanation8";
import Main from "./components/Main";
import EventActivity2 from "./components/EventActivity2";
import WaitingActivity1 from "./components/WaitingActivity1";
import Login4 from "./components/Login4";
import Photochoose1 from "./components/Photochoose1";
import IPhone12ProMax1 from "./components/IPhone12ProMax1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/finalscoreactivity-1">
          <FinalScoreActivity1 {...finalScoreActivity1Data} />
        </Route>
        <Route path="/textinputactivity1">
          <TextInputActivity1 {...textInputActivity1Data} />
        </Route>
        <Route path="/waitingactivity2">
          <WaitingActivity2
            heart="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heartbeats.gif"
            simplifiedHeaderProps={waitingActivity2Data.simplifiedHeaderProps}
            hooderStandardProps={waitingActivity2Data.hooderStandardProps}
          />
        </Route>
        <Route path="/fail">
          <Fail
            tryAgain="Try again!"
            simplifiedHeaderProps={failData.simplifiedHeaderProps}
            hooderStandardProps={failData.hooderStandardProps}
          />
        </Route>
        <Route path="/explanation-1">
          <Explanation1 {...explanation1Data} />
        </Route>
        <Route path="/explanation2">
          <Explanation2
            x16="/img/file---16@1x.png"
            text3={
              <>
                Put your heart rate here to find <br />
                your special moments.
              </>
            }
            x13Props={explanation2Data.x13Props}
            hooderHeartrateProps={explanation2Data.hooderHeartrateProps}
            simplifiedHeaderProps={explanation2Data.simplifiedHeaderProps}
          />
        </Route>
        <Route path="/explanation3">
          <Explanation3
            x15="/img/file---15@1x.png"
            text4={
              <>
                Put your text message here to see <br />
                how you are feeling in your mind.
              </>
            }
            x13Props={explanation3Data.x13Props}
            simplifiedHeaderProps={explanation3Data.simplifiedHeaderProps}
            hooderMessage3Props={explanation3Data.hooderMessage3Props}
          />
        </Route>
        <Route path="/explanation4">
          <Explanation4
            text5="Check out your score."
            x19="/img/file---19@1x.png"
            x13Props={explanation4Data.x13Props}
            simplifiedHeaderProps={explanation4Data.simplifiedHeaderProps}
            hooderScoreProps={explanation4Data.hooderScoreProps}
          />
        </Route>
        <Route path="/explanation5">
          <Explanation5
            text6={
              <>
                Find people
                <br />
                you might be intereseted in.
              </>
            }
            hooderScoreProps={explanation5Data.hooderScoreProps}
            x13Props={explanation5Data.x13Props}
            simplifiedHeader2Props={explanation5Data.simplifiedHeader2Props}
          />
        </Route>
        <Route path="/explanation6">
          <Explanation6 {...explanation6Data} />
        </Route>
        <Route path="/explanation7">
          <Explanation7 {...explanation7Data} />
        </Route>
        <Route path="/explanation8">
          <Explanation8 {...explanation8Data} />
        </Route>
        <Route path="/main">
          <Main {...mainData} />
        </Route>
        <Route path="/">
          <Main {...mainData} />
        </Route>
        <Route path="/eventactivity2">
          <EventActivity2 {...eventActivity2Data} />
        </Route>
        <Route path="/waitingactivity1">
          <WaitingActivity1
            heart="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heart-gif-brown.gif"
            simplifiedHeaderProps={waitingActivity1Data.simplifiedHeaderProps}
            loadingProps={waitingActivity1Data.loadingProps}
            hooderStandardProps={waitingActivity1Data.hooderStandardProps}
          />
        </Route>
        <Route path="/login1">
          <Login4 {...login4Data} />
        </Route>
        <Route path="/photochoose1">
          <Photochoose1
            x5="/img/file---5@1x.png"
            addPhoto="Add Photo"
            simplifiedHeader2Props={photochoose1Data.simplifiedHeader2Props}
            putPersonName22Props={photochoose1Data.putPersonName22Props}
            backProps={photochoose1Data.backProps}
            back2Props={photochoose1Data.back2Props}
            hooderStandardProps={photochoose1Data.hooderStandardProps}
          />
        </Route>
        
      </Switch>
    </Router>
  );
}

export default App;
const detailedHeaderData = {
    time: "9:41",
    score: "Score",
    cellularConnection: "/img/cellular-connection@1x.png",
    wifi: "/img/wifi@1x.png",
    cap: "/img/cap@1x.png",
    logout: "Logout",
    text1: "􀣌",
};

const avatar4Data = {
    className: "avatar-13",
};

const avatar22Data = {
    src: "/img/file-3@1x.png",
};

const avatar23Data = {
    src: "/img/nopath--------7-@1x.png",
    className: "avatar-16",
};

const avatar8Data = {
    className: "avatar-14",
};

const jinData = {
    jin: "JIN",
    x1: "/img/file---1@1x.png",
};

const avatar9Data = {
    className: "avatar",
};

const x68Data = {
    x6: "/img/file---6@1x.png",
};

const finalScoreActivity1Data = {
    place: "Name",
    place2: "Name",
    place3: "Name",
    place4: "Name",
    me: "Me",
    jimin: "Jimin",
    place5: "Name",
    place6: "Name",
    place7: "Name",
    place8: "Name",
    place9: "Name",
    detailedHeaderProps: detailedHeaderData,
    avatarProps: avatar4Data,
    avatar2Props: avatar22Data,
    avatar22Props: avatar23Data,
    avatar2Props2: avatar8Data,
    jinProps: jinData,
    avatar3Props: avatar9Data,
    x68Props: x68Data,
};

const detailedHeader2Data = {
    children: "Message",
    className: "",
};

const simplifiedHeaderData = {
    detailedHeader2Props: detailedHeader2Data,
};

const backData = {
    src: "/img/file---30@1x.png",
};

const back2Data = {
    src: "/img/file---29@1x.png",
    className: "forward",
};

const buttonsLabelLightData = {
    className: "",
};

const login42Data = {
    buttonsLabelLightProps: buttonsLabelLightData,
};

const buttonsLabelLight2Data = {
    className: "buttons-label-light-1",
};

const login2Data = {
    buttonsLabelLightProps: buttonsLabelLight2Data,
};

const login422Data = {
    className: "login-1",
};

const buttonsLabelLight4Data = {
    className: "buttons-label-light-2",
};

const login423Data = {
    className: "login-2",
    buttonsLabelLightProps: buttonsLabelLight4Data,
};

const hooderMessageData = {
    heartRate: "Heart rate",
    x6: "/img/file---6@1x.png",
    score: "Score",
    x7: "/img/file---7@1x.png",
};

const textInputActivity1Data = {
    inputType: "text",
    inputPlaceholder: "Paste message",
    inputType2: "text",
    inputPlaceholder2: "Paste message",
    inputType3: "text",
    inputPlaceholder3: "Paste message",
    inputType4: "text",
    inputPlaceholder4: "Paste message",
    simplifiedHeaderProps: simplifiedHeaderData,
    backProps: backData,
    back2Props: back2Data,
    login42Props: login42Data,
    login2Props: login2Data,
    login422Props: login422Data,
    login423Props: login423Data,
    hooderMessageProps: hooderMessageData,
};

const detailedHeader22Data = {
    children: "Message",
};

const simplifiedHeader2Data = {
    className: "simplified-header-1",
    detailedHeader2Props: detailedHeader22Data,
};

const x682Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-1",
};

const x692Data = {
    className: "",
};

const x703Data = {
    className: "x70-1",
};

const hooderStandardData = {
    x68Props: x682Data,
    x692Props: x692Data,
    x70Props: x703Data,
};

const waitingActivity2Data = {
    simplifiedHeaderProps: simplifiedHeader2Data,
    hooderStandardProps: hooderStandardData,
};

const detailedHeader23Data = {
    children: "Kozipro",
    className: "detailed-header-3",
};

const simplifiedHeader3Data = {
    className: "simplified-header-2",
    detailedHeader2Props: detailedHeader23Data,
};

const x683Data = {
    x6: "/img/file---6@1x.png",
};

const x704Data = {
    className: "x70-2",
};

const hooderStandard2Data = {
    className: "hooder-standard-1",
    x68Props: x683Data,
    x70Props: x704Data,
};

const failData = {
    simplifiedHeaderProps: simplifiedHeader3Data,
    hooderStandardProps: hooderStandard2Data,
};

const avatar24Data = {
    src: "/img/file-3@1x.png",
};

const avatar14Data = {
    className: "avatar-1",
};

const detailedHeader24Data = {
    children: "Kozipro",
    className: "detailed-header-4",
};

const simplifiedHeader4Data = {
    className: "simplified-header-3",
    detailedHeader2Props: detailedHeader24Data,
};

const x684Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-3",
};

const x6923Data = {
    className: "x69-10",
};

const x705Data = {
    className: "x70-3",
};

const hooderStandard3Data = {
    className: "hooder-standard-2",
    x68Props: x684Data,
    x692Props: x6923Data,
    x70Props: x705Data,
};

const explanation1Data = {
    place: "Name",
    place2: "Name",
    me: "Me",
    place3: "Name",
    place4: "Name",
    place5: "Name",
    text2: <>Who is the one in your heart?<br />Discover your true love!</>,
    avatar2Props: avatar24Data,
    avatarProps: avatar14Data,
    simplifiedHeaderProps: simplifiedHeader4Data,
    hooderStandardProps: hooderStandard3Data,
};

const avatar25Data = {
    src: "/img/file-3@1x.png",
};

const avatar19Data = {
    className: "avatar-2",
};

const x13Data = {
    avatar2Props: avatar25Data,
    avatarProps: avatar19Data,
};

const x6924Data = {
    className: "x69-11",
};

const x706Data = {
    className: "x70-4",
};

const hooderHeartrateData = {
    x70Props: x6924Data,
    x70Props2: x706Data,
};

const detailedHeader25Data = {
    children: "Kozipro",
    className: "detailed-header-5",
};

const simplifiedHeader5Data = {
    className: "simplified-header-4",
    detailedHeader2Props: detailedHeader25Data,
};

const explanation2Data = {
    x13Props: x13Data,
    hooderHeartrateProps: hooderHeartrateData,
    simplifiedHeaderProps: simplifiedHeader5Data,
};

const avatar26Data = {
    src: "/img/file-3@1x.png",
};

const avatar29Data = {
    className: "avatar-3",
};

const x132Data = {
    avatar2Props: avatar26Data,
    avatarProps: avatar29Data,
};

const detailedHeader26Data = {
    children: "Kozipro",
    className: "detailed-header-6",
};

const simplifiedHeader6Data = {
    className: "simplified-header-5",
    detailedHeader2Props: detailedHeader26Data,
};

const x685Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-4",
};

const x6925Data = {
    className: "x69-12",
};

const hooderMessage3Data = {
    x68Props: x685Data,
    x68Props2: x6925Data,
};

const explanation3Data = {
    x13Props: x132Data,
    simplifiedHeaderProps: simplifiedHeader6Data,
    hooderMessage3Props: hooderMessage3Data,
};

const avatar210Data = {
    src: "/img/file-3@1x.png",
};

const avatar34Data = {
    className: "avatar-4",
};

const x133Data = {
    className: "x13-3",
    avatar2Props: avatar210Data,
    avatarProps: avatar34Data,
};

const detailedHeader27Data = {
    children: "Kozipro",
    className: "detailed-header-7",
};

const simplifiedHeader7Data = {
    className: "simplified-header-6",
    detailedHeader2Props: detailedHeader27Data,
};

const x686Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-5",
};

const x693Data = {
    className: "x69-1",
};

const x707Data = {
    className: "x70-5",
};

const hooderScoreData = {
    x68Props: x686Data,
    x69Props: x693Data,
    x70Props: x707Data,
};

const explanation4Data = {
    x13Props: x133Data,
    simplifiedHeaderProps: simplifiedHeader7Data,
    hooderScoreProps: hooderScoreData,
};

const x687Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-6",
};

const x694Data = {
    className: "x69-2",
};

const x708Data = {
    className: "x70-6",
};

const hooderScore2Data = {
    className: "hooder-score-1",
    x68Props: x687Data,
    x69Props: x694Data,
    x70Props: x708Data,
};

const avatar211Data = {
    src: "/img/file-3@1x.png",
};

const avatar39Data = {
    className: "avatar-5",
};

const x134Data = {
    className: "x13-4",
    avatar2Props: avatar211Data,
    avatarProps: avatar39Data,
};

const detailedHeader28Data = {
    children: "Kozipro",
    className: "detailed-header-8",
};

const simplifiedHeader22Data = {
    detailedHeader2Props: detailedHeader28Data,
};

const explanation5Data = {
    hooderScoreProps: hooderScore2Data,
    x13Props: x134Data,
    simplifiedHeader2Props: simplifiedHeader22Data,
};

const avatar40Data = {
    className: "avatar-9-1",
};

const avatar41Data = {
    className: "avatar-9-2",
};

const avatar42Data = {
    className: "avatar-9-3",
};

const avatar212Data = {
    src: "/img/file-3@1x.png",
    className: "avatar-22",
};

const avatar43Data = {
    className: "avatar-9-4",
};

const avatar44Data = {
    className: "avatar-9-5",
};

const avatar45Data = {
    className: "avatar-9-6",
};

const avatar46Data = {
    className: "avatar-9-7",
};

const avatar47Data = {
    className: "avatar-9-8",
};

const avatar48Data = {
    className: "avatar-9",
};

const x688Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-7",
};

const x695Data = {
    className: "x69-3",
};

const x709Data = {
    className: "x70-7",
};

const hooderScore3Data = {
    className: "hooder-score-2",
    x68Props: x688Data,
    x69Props: x695Data,
    x70Props: x709Data,
};

const detailedHeader29Data = {
    children: "Kozipro",
    className: "detailed-header-9",
};

const simplifiedHeader8Data = {
    className: "simplified-header-7",
    detailedHeader2Props: detailedHeader29Data,
};

const explanation6Data = {
    place: "Name",
    place2: "Name",
    place3: "Name",
    me: "Me",
    place4: "Name",
    place5: "Name",
    place6: "Name",
    place7: "Name",
    place8: "Name",
    place9: "Name",
    text7: <>Find people<br />who might be intereseted in you.</>,
    avatarProps: avatar40Data,
    avatar2Props: avatar41Data,
    avatar3Props: avatar42Data,
    avatar2Props2: avatar212Data,
    avatar4Props: avatar43Data,
    avatar5Props: avatar44Data,
    avatar6Props: avatar45Data,
    avatar7Props: avatar46Data,
    avatar8Props: avatar47Data,
    avatar9Props: avatar48Data,
    hooderScoreProps: hooderScore3Data,
    simplifiedHeaderProps: simplifiedHeader8Data,
};

const detailedHeader210Data = {
    children: "Kozipro",
    className: "detailed-header-10",
};

const simplifiedHeader23Data = {
    detailedHeader2Props: detailedHeader210Data,
};

const x689Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-8",
};

const x696Data = {
    className: "x69-4",
};

const x7010Data = {
    className: "x70-8",
};

const hooderScore4Data = {
    x68Props: x689Data,
    x69Props: x696Data,
    x70Props: x7010Data,
};

const avatar213Data = {
    src: "/img/file-3@1x.png",
};

const avatar55Data = {
    className: "avatar-6-2",
};

const avatar57Data = {
    className: "avatar-6",
};

const explanation7Data = {
    x15: "/img/file---15@1x.png",
    x16: "/img/file---16@1x.png",
    place: "Name",
    place2: "Name",
    place3: "Name",
    place4: "Name",
    me: "Me",
    place5: "Name",
    place6: "Name",
    place7: "Name",
    place8: "Name",
    place9: "Name",
    text8: <>Register neme and icon of <br />the people that you communicate with.</>,
    simplifiedHeader2Props: simplifiedHeader23Data,
    hooderScoreProps: hooderScore4Data,
    avatar2Props: avatar213Data,
    avatarProps: avatar55Data,
    avatar2Props2: avatar57Data,
};

const detailedHeader211Data = {
    children: "Kozipro",
    className: "detailed-header-11",
};

const simplifiedHeader24Data = {
    detailedHeader2Props: detailedHeader211Data,
};

const x6810Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-9",
};

const x697Data = {
    className: "x69-5",
};

const x7011Data = {
    className: "x70-9",
};

const hooderScore5Data = {
    x68Props: x6810Data,
    x69Props: x697Data,
    x70Props: x7011Data,
};

const avatar214Data = {
    src: "/img/file-3@1x.png",
};

const avatar64Data = {
    className: "avatar-7-2",
};

const avatar66Data = {
    className: "avatar-7",
};

const explanation8Data = {
    place: "Name",
    place2: "Name",
    place3: "Name",
    place4: "Name",
    me: "Me",
    place5: "Name",
    place6: "Name",
    place7: "Name",
    place8: "Name",
    place9: "Name",
    letsStart: "Let’s start♡",
    simplifiedHeader2Props: simplifiedHeader24Data,
    hooderScoreProps: hooderScore5Data,
    avatar2Props: avatar214Data,
    avatarProps: avatar64Data,
    avatar2Props2: avatar66Data,
};

const avatar215Data = {
    src: "/img/file-3@1x.png",
};

const avatar73Data = {
    className: "avatar-8-2",
};

const avatar75Data = {
    className: "avatar-8",
};

const detailedHeader212Data = {
    children: "Kozipro",
    className: "detailed-header-12",
};

const simplifiedHeader25Data = {
    className: "simplified-header-13",
    detailedHeader2Props: detailedHeader212Data,
};

const x698Data = {
    className: "x69-6",
};

const hooderScore22Data = {
    heartRate: "Heart rate",
    x6: "/img/file---6@1x.png",
    message: "Message",
    x8: "/img/file---8@1x.png",
    x69Props: x698Data,
};

const mainData = {
    place: "Name",
    place2: "Name",
    place3: "Name",
    place4: "Name",
    me: "Me",
    place5: "Name",
    place6: "Name",
    place7: "Name",
    place8: "Name",
    place9: "Name",
    avatar2Props: avatar215Data,
    avatarProps: avatar73Data,
    avatar2Props2: avatar75Data,
    simplifiedHeader2Props: simplifiedHeader25Data,
    hooderScore2Props: hooderScore22Data,
};

const detailedHeader213Data = {
    children: "Heart Rate",
    className: "detailed-header-13",
};

const simplifiedHeader26Data = {
    className: "simplified-header-14",
    detailedHeader2Props: detailedHeader213Data,
};

const days2Data = {
    className: "days-1",
};

const back3Data = {
    src: "/img/file---30@1x.png",
    className: "back-1",
};

const back4Data = {
    src: "/img/file---29@1x.png",
    className: "forward-1",
};

const putPersonName5Data = {
    className: "put-person-name-1",
};

const putPersonName6Data = {
    className: "put-person-name-2",
};

const putPersonName7Data = {
    className: "put-person-name-2",
};

const putPersonName8Data = {
    className: "put-person-name-2",
};

const x0Data = {
    putPersonNameProps: putPersonName5Data,
    putPersonName2Props: putPersonName6Data,
    putPersonName3Props: putPersonName7Data,
    putPersonName4Props: putPersonName8Data,
};

const putPersonName9Data = {
    className: "put-person-name-1",
};

const putPersonName10Data = {
    className: "put-person-name-2",
};

const putPersonName11Data = {
    className: "put-person-name-2",
};

const putPersonName12Data = {
    className: "put-person-name-2",
};

const x02Data = {
    className: "x29-item",
    putPersonNameProps: putPersonName9Data,
    putPersonName2Props: putPersonName10Data,
    putPersonName3Props: putPersonName11Data,
    putPersonName4Props: putPersonName12Data,
};

const putPersonName13Data = {
    className: "put-person-name-1",
};

const putPersonName14Data = {
    className: "put-person-name-2",
};

const putPersonName15Data = {
    className: "put-person-name-2",
};

const putPersonName16Data = {
    className: "put-person-name-2",
};

const x03Data = {
    className: "x29-item",
    putPersonNameProps: putPersonName13Data,
    putPersonName2Props: putPersonName14Data,
    putPersonName3Props: putPersonName15Data,
    putPersonName4Props: putPersonName16Data,
};

const putPersonName17Data = {
    className: "put-person-name-1",
};

const putPersonName18Data = {
    className: "put-person-name-2",
};

const putPersonName19Data = {
    className: "put-person-name-2",
};

const putPersonName20Data = {
    className: "put-person-name-2",
};

const x04Data = {
    className: "x29-item",
    putPersonNameProps: putPersonName17Data,
    putPersonName2Props: putPersonName18Data,
    putPersonName3Props: putPersonName19Data,
    putPersonName4Props: putPersonName20Data,
};

const putPersonName222Data = {
    className: "put-person-name-4",
};

const putPersonName223Data = {
    className: "put-person-name-4",
};

const putPersonName224Data = {
    className: "put-person-name-4",
};

const buttonsLabelLight5Data = {
    className: "buttons-label-light-3",
};

const login3Data = {
    white08PtRadius: "/img/white---08pt-radius@1x.png",
    buttonsLabelLightProps: buttonsLabelLight5Data,
};

const x6926Data = {
    className: "x69-13",
};

const x7012Data = {
    className: "x70-10",
};

const hooderHeartrate2Data = {
    className: "hooder-heartrate-1",
    x70Props: x6926Data,
    x70Props2: x7012Data,
};

const eventActivity2Data = {
    number: "186",
    number2: "117",
    number3: "48",
    x8: "/img/file--10@1x.png",
    x9: "/img/file--10@1x.png",
    x10: "/img/file--10@1x.png",
    x24: "/img/file---24@1x.png",
    text9: "0:00",
    text10: "12:00",
    text11: "23:59",
    graph: "Graph",
    graph2: "Graph",
    heart_Icon_Palepink: "/img/heart-icon-palepink-1@1x.png",
    ttTt: "TT:TT",
    heart_Icon_Palepink2: "/img/heart-icon-palepink-1@1x.png",
    simplifiedHeader2Props: simplifiedHeader26Data,
    daysProps: days2Data,
    backProps: back3Data,
    back2Props: back4Data,
    x0Props: x0Data,
    x02Props: x02Data,
    x03Props: x03Data,
    x04Props: x04Data,
    putPersonName22Props: putPersonName222Data,
    putPersonName222Props: putPersonName223Data,
    putPersonName223Props: putPersonName224Data,
    login3Props: login3Data,
    hooderHeartrateProps: hooderHeartrate2Data,
};

const detailedHeader214Data = {
    children: "Heart Rate",
    className: "detailed-header-14",
};

const simplifiedHeader9Data = {
    className: "simplified-header-8",
    detailedHeader2Props: detailedHeader214Data,
};

const loading2Data = {
    className: "loading-2",
};

const x6811Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-10",
};

const x7013Data = {
    className: "x70-11",
};

const hooderStandard4Data = {
    className: "hooder-standard-3",
    x68Props: x6811Data,
    x70Props: x7013Data,
};

const waitingActivity1Data = {
    simplifiedHeaderProps: simplifiedHeader9Data,
    loadingProps: loading2Data,
    hooderStandardProps: hooderStandard4Data,
};

const detailedHeader215Data = {
    children: "Kozipro",
    className: "detailed-header-15",
};

const simplifiedHeader10Data = {
    className: "simplified-header-9",
    detailedHeader2Props: detailedHeader215Data,
};

const login5Data = {
    children: "Login",
};

const login4Data = {
    x5: "/img/file--5@1x.png",
    inputType: "email",
    inputPlaceholder: "ID",
    x20: "/img/file---20@1x.png",
    inputType2: "password",
    inputPlaceholder2: "Password",
    text12: "Forget your password?",
    clickHere: "Click here",
    simplifiedHeaderProps: simplifiedHeader10Data,
    login5Props: login5Data,
};

const detailedHeader216Data = {
    children: "Registration",
    className: "detailed-header-16",
};

const simplifiedHeader27Data = {
    className: "simplified-header-15",
    detailedHeader2Props: detailedHeader216Data,
};

const putPersonName225Data = {
    className: "put-person-name-6",
};

const back5Data = {
    src: "/img/file---30@1x.png",
    className: "back-2",
};

const back6Data = {
    src: "/img/file---29@1x.png",
    className: "forward-2",
};

const x6812Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-11",
};

const x7014Data = {
    className: "x70-12",
};

const hooderStandard5Data = {
    className: "hooder-standard-4",
    x68Props: x6812Data,
    x70Props: x7014Data,
};

const photochoose1Data = {
    x5: "/img/file---5@1x.png",
    addPhoto: "Add Photo",
    simplifiedHeader2Props: simplifiedHeader27Data,
    putPersonName22Props: putPersonName225Data,
    backProps: back5Data,
    back2Props: back6Data,
    hooderStandardProps: hooderStandard5Data,
};

