import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Explanation1 from "./components/Explanation1";
import Explanation2 from "./components/Explanation2";
import Explanation3 from "./components/Explanation3";
import Explanation4 from "./components/Explanation4";
import Explanation5 from "./components/Explanation5";
import Explanation6 from "./components/Explanation6";
import Explanation7 from "./components/Explanation7";
import Explanation8 from "./components/Explanation8";
import Main from "./components/Main";
import Photochoose1 from "./components/Photochoose1";
import EventActivity2 from "./components/EventActivity2";
import WaitingActivity1 from "./components/WaitingActivity1";
import TextInputActivity1 from "./components/TextInputActivity1";
import FinalScoreActivity1 from "./components/FinalScoreActivity1";
import WaitingActivity2 from "./components/WaitingActivity2";
import Fail from "./components/Fail";
import IPhone12ProMax1 from "./components/IPhone12ProMax1";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login1">
          <Login {...loginData} />
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
            x133Props={explanation2Data.x133Props}
            hooderHeartrate3Props={explanation2Data.hooderHeartrate3Props}
            simplifiedHeader4Props={explanation2Data.simplifiedHeader4Props}
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
            x133Props={explanation3Data.x133Props}
            simplifiedHeader4Props={explanation3Data.simplifiedHeader4Props}
            hooderMessageProps={explanation3Data.hooderMessageProps}
          />
        </Route>
        <Route path="/explanation4">
          <Explanation4
            text5="Check out your score."
            x19="/img/file---19@1x.png"
            x133Props={explanation4Data.x133Props}
            simplifiedHeader4Props={explanation4Data.simplifiedHeader4Props}
            hooderScoreProps={explanation4Data.hooderScoreProps}
          />
        </Route>
        <Route path="/explanation5">
          <Explanation5
            text9={
              <>
                Find people
                <br />
                you might be intereseted in.
              </>
            }
            hooderScoreProps={explanation5Data.hooderScoreProps}
            x133Props={explanation5Data.x133Props}
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
        <Route path="/photochoose1">
          <Photochoose1
            x5="/img/file---5@1x.png"
            addPhoto="Add Photo"
            simplifiedHeader2Props={photochoose1Data.simplifiedHeader2Props}
            backProps={photochoose1Data.backProps}
            back2Props={photochoose1Data.back2Props}
            hooderStandard32Props={photochoose1Data.hooderStandard32Props}
          />
        </Route>
        <Route path="/eventactivity2">
          <EventActivity2 {...eventActivity2Data} />
        </Route>
        <Route path="/waitingactivity1">
          <WaitingActivity1
            heart="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heart-gif-brown.gif"
            simplifiedHeader4Props={waitingActivity1Data.simplifiedHeader4Props}
            hooderStandard32Props={waitingActivity1Data.hooderStandard32Props}
          />
        </Route>
        <Route path="/textinputactivity1">
          <TextInputActivity1 {...textInputActivity1Data} />
        </Route>
        <Route path="/finalscoreactivity-1">
          <FinalScoreActivity1 {...finalScoreActivity1Data} />
        </Route>
        <Route path="/waitingactivity2">
          <WaitingActivity2
            heart="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heartbeats.gif"
            simplifiedHeader4Props={waitingActivity2Data.simplifiedHeader4Props}
            loadingProps={waitingActivity2Data.loadingProps}
            hooderStandard32Props={waitingActivity2Data.hooderStandard32Props}
          />
        </Route>
        <Route path="/fail">
          <Fail
            tryAgain="Try again!"
            simplifiedHeader4Props={failData.simplifiedHeader4Props}
            hooderStandard32Props={failData.hooderStandard32Props}
          />
        </Route>
        <Route path="/:path(|iphone-12-pro-max-1)">
          <IPhone12ProMax1 ht="ht" title="test" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const detailedHeaderData = {
    children: "Kozipro",
    className: "",
};

const simplifiedHeader4Data = {
    detailedHeaderProps: detailedHeaderData,
};

const login2Data = {
    children: "Login",
};

const loginData = {
    x5: "/img/file--5@1x.png",
    inputType: "email",
    inputPlaceholder: "ID",
    x20: "/img/file---20@1x.png",
    inputType2: "password",
    inputPlaceholder2: "Password",
    text1: "Forget your password?",
    clickHere: "Click here",
    simplifiedHeader4Props: simplifiedHeader4Data,
    login2Props: login2Data,
};

const avatar22Data = {
    src: "/img/file-3@1x.png",
};

const avatar5Data = {
    className: "avatar",
};

const detailedHeader2Data = {
    children: "Kozipro",
};

const simplifiedHeader42Data = {
    className: "simplified-header-1",
    detailedHeaderProps: detailedHeader2Data,
};

const x6822Data = {
    className: "",
};

const hooderStandard32Data = {
    x6822Props: x6822Data,
};

const explanation1Data = {
    place: "Name",
    place2: "Name",
    me: "Me",
    place3: "Name",
    place4: "Name",
    place5: "Name",
    text2: <>Who is the one in your heart?<br />Discover your true love!</>,
    avatar2Props: avatar22Data,
    avatarProps: avatar5Data,
    simplifiedHeader4Props: simplifiedHeader42Data,
    hooderStandard32Props: hooderStandard32Data,
};

const avatar23Data = {
    src: "/img/file-3@1x.png",
};

const avatar10Data = {
    className: "avatar-1",
};

const x133Data = {
    avatar2Props3: avatar23Data,
    avatarProps3: avatar10Data,
};

const hooderHeartrate3Data = {
    heartRate: "Heart rate",
    x6: "/img/file---6@1x.png",
};

const detailedHeader3Data = {
    children: "Kozipro",
};

const simplifiedHeader43Data = {
    className: "simplified-header-2",
    detailedHeaderProps: detailedHeader3Data,
};

const explanation2Data = {
    x133Props: x133Data,
    hooderHeartrate3Props: hooderHeartrate3Data,
    simplifiedHeader4Props: simplifiedHeader43Data,
};

const avatar24Data = {
    src: "/img/file-3@1x.png",
};

const avatar15Data = {
    className: "avatar-2",
};

const x1332Data = {
    avatar2Props3: avatar24Data,
    avatarProps3: avatar15Data,
};

const detailedHeader4Data = {
    children: "Kozipro",
};

const simplifiedHeader44Data = {
    className: "simplified-header-3",
    detailedHeaderProps: detailedHeader4Data,
};

const x68222Data = {
    className: "x68-1",
};

const hooderMessageData = {
    x6822Props: x68222Data,
};

const explanation3Data = {
    x133Props: x1332Data,
    simplifiedHeader4Props: simplifiedHeader44Data,
    hooderMessageProps: hooderMessageData,
};

const avatar25Data = {
    src: "/img/file-3@1x.png",
};

const avatar20Data = {
    className: "avatar-3",
};

const x1333Data = {
    className: "x13-3",
    avatar2Props3: avatar25Data,
    avatarProps3: avatar20Data,
};

const detailedHeader5Data = {
    children: "Kozipro",
};

const simplifiedHeader45Data = {
    className: "simplified-header-4",
    detailedHeaderProps: detailedHeader5Data,
};

const x68223Data = {
    className: "x68-2",
};

const x7043Data = {
    className: "x70-2",
};

const hooderScoreData = {
    x6822Props: x68223Data,
    x704Props: x7043Data,
};

const explanation4Data = {
    x133Props: x1333Data,
    simplifiedHeader4Props: simplifiedHeader45Data,
    hooderScoreProps: hooderScoreData,
};

const x68224Data = {
    className: "x68-3",
};

const x7044Data = {
    className: "x70-3",
};

const hooderScore2Data = {
    className: "hooder-score-1",
    x6822Props: x68224Data,
    x704Props: x7044Data,
};

const avatar27Data = {
    src: "/img/file-3@1x.png",
};

const avatar30Data = {
    className: "avatar-4",
};

const x1334Data = {
    className: "x13-4",
    avatar2Props3: avatar27Data,
    avatarProps3: avatar30Data,
};

const detailedHeader6Data = {
    children: "Kozipro",
    className: "",
};

const simplifiedHeader2Data = {
    detailedHeaderProps: detailedHeader6Data,
};

const explanation5Data = {
    hooderScoreProps: hooderScore2Data,
    x133Props: x1334Data,
    simplifiedHeader2Props: simplifiedHeader2Data,
};

const avatar31Data = {
    className: "avatar-9-1",
};

const avatar32Data = {
    className: "avatar-9-2",
};

const avatar33Data = {
    className: "avatar-9-3",
};

const avatar210Data = {
    src: "/img/file-3@1x.png",
    className: "avatar-19",
};

const avatar34Data = {
    className: "avatar-9-4",
};

const avatar35Data = {
    className: "avatar-9-5",
};

const avatar36Data = {
    className: "avatar-9-6",
};

const avatar37Data = {
    className: "avatar-9-7",
};

const avatar38Data = {
    className: "avatar-9-8",
};

const avatar39Data = {
    className: "avatar-9",
};

const x68225Data = {
    className: "x68-4",
};

const x7045Data = {
    className: "x70-4",
};

const hooderScore3Data = {
    className: "hooder-score-2",
    x6822Props: x68225Data,
    x704Props: x7045Data,
};

const detailedHeader7Data = {
    children: "Kozipro",
};

const simplifiedHeader46Data = {
    className: "simplified-header-5",
    detailedHeaderProps: detailedHeader7Data,
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
    avatarProps: avatar31Data,
    avatar2Props: avatar32Data,
    avatar3Props: avatar33Data,
    avatar2Props2: avatar210Data,
    avatar4Props: avatar34Data,
    avatar5Props: avatar35Data,
    avatar6Props: avatar36Data,
    avatar7Props: avatar37Data,
    avatar8Props: avatar38Data,
    avatar9Props: avatar39Data,
    hooderScoreProps: hooderScore3Data,
    simplifiedHeader4Props: simplifiedHeader46Data,
};

const detailedHeader8Data = {
    children: "Kozipro",
};

const simplifiedHeader22Data = {
    detailedHeaderProps: detailedHeader8Data,
};

const x68226Data = {
    className: "x68-5",
};

const x7046Data = {
    className: "x70-5",
};

const hooderScore4Data = {
    x6822Props: x68226Data,
    x704Props: x7046Data,
};

const avatar211Data = {
    src: "/img/file-3@1x.png",
};

const avatar46Data = {
    className: "avatar-5-2",
};

const avatar48Data = {
    className: "avatar-5",
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
    text12: <>Register neme and icon of <br />the people that you communicate with.</>,
    simplifiedHeader2Props: simplifiedHeader22Data,
    hooderScoreProps: hooderScore4Data,
    avatar2Props: avatar211Data,
    avatarProps: avatar46Data,
    avatar2Props2: avatar48Data,
};

const detailedHeader9Data = {
    children: "Kozipro",
};

const simplifiedHeader23Data = {
    detailedHeaderProps: detailedHeader9Data,
};

const x68227Data = {
    className: "x68-6",
};

const x7047Data = {
    className: "x70-6",
};

const hooderScore5Data = {
    x6822Props: x68227Data,
    x704Props: x7047Data,
};

const avatar212Data = {
    src: "/img/file-3@1x.png",
};

const avatar55Data = {
    className: "avatar-6-2",
};

const avatar57Data = {
    className: "avatar-6",
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
    simplifiedHeader2Props: simplifiedHeader23Data,
    hooderScoreProps: hooderScore5Data,
    avatar2Props: avatar212Data,
    avatarProps: avatar55Data,
    avatar2Props2: avatar57Data,
};

const avatar213Data = {
    src: "/img/file-3@1x.png",
};

const avatar64Data = {
    className: "avatar-7-2",
};

const avatar66Data = {
    className: "avatar-7",
};

const detailedHeader10Data = {
    children: "Kozipro",
};

const simplifiedHeader24Data = {
    className: "simplified-header-13",
    detailedHeaderProps: detailedHeader10Data,
};

const hooderScore22Data = {
    heartRate: "Heart rate",
    x6: "/img/file---6@1x.png",
    message: "Message",
    x8: "/img/file---8@1x.png",
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
    avatar2Props: avatar213Data,
    avatarProps: avatar64Data,
    avatar2Props2: avatar66Data,
    simplifiedHeader2Props: simplifiedHeader24Data,
    hooderScore2Props: hooderScore22Data,
};

const detailedHeader11Data = {
    children: "Registration",
    className: "detailed-header-10",
};

const simplifiedHeader25Data = {
    className: "simplified-header-14",
    detailedHeaderProps: detailedHeader11Data,
};

const backData = {
    src: "/img/file---30@1x.png",
};

const back2Data = {
    src: "/img/file---29@1x.png",
    className: "forward",
};

const x68228Data = {
    className: "x68-7",
};

const x69424Data = {
    className: "x69-3",
};

const x7048Data = {
    className: "x70-7",
};

const hooderStandard322Data = {
    className: "hooder-standard-1",
    x6822Props: x68228Data,
    x6822Props2: x69424Data,
    x6822Props3: x7048Data,
};

const photochoose1Data = {
    simplifiedHeader2Props: simplifiedHeader25Data,
    backProps: backData,
    back2Props: back2Data,
    hooderStandard32Props: hooderStandard322Data,
};

const detailedHeader12Data = {
    children: "Heart Rate",
    className: "detailed-header-11",
};

const simplifiedHeader26Data = {
    className: "simplified-header-15",
    detailedHeaderProps: detailedHeader12Data,
};

const back3Data = {
    src: "/img/file---30@1x.png",
    className: "back-1",
};

const back4Data = {
    src: "/img/file---29@1x.png",
    className: "forward-1",
};

const putPersonName2Data = {
    className: "put-person-name-4",
};

const putPersonName3Data = {
    className: "put-person-name-4",
};

const putPersonName4Data = {
    className: "put-person-name-4",
};

const x0Data = {
    putPersonNameProps: putPersonName2Data,
    putPersonName2Props: putPersonName3Data,
    putPersonName3Props: putPersonName4Data,
};

const putPersonName6Data = {
    className: "put-person-name-4",
};

const putPersonName7Data = {
    className: "put-person-name-4",
};

const putPersonName8Data = {
    className: "put-person-name-4",
};

const x02Data = {
    className: "x29-item",
    putPersonNameProps: putPersonName6Data,
    putPersonName2Props: putPersonName7Data,
    putPersonName3Props: putPersonName8Data,
};

const putPersonName10Data = {
    className: "put-person-name-4",
};

const putPersonName11Data = {
    className: "put-person-name-4",
};

const putPersonName12Data = {
    className: "put-person-name-4",
};

const x03Data = {
    className: "x29-item",
    putPersonNameProps: putPersonName10Data,
    putPersonName2Props: putPersonName11Data,
    putPersonName3Props: putPersonName12Data,
};

const putPersonName14Data = {
    className: "put-person-name-4",
};

const putPersonName15Data = {
    className: "put-person-name-4",
};

const putPersonName16Data = {
    className: "put-person-name-4",
};

const x04Data = {
    className: "x29-item",
    putPersonNameProps: putPersonName14Data,
    putPersonName2Props: putPersonName15Data,
    putPersonName3Props: putPersonName16Data,
};

const putPersonName222Data = {
    className: "put-person-name-2",
};

const putPersonName223Data = {
    className: "put-person-name",
};

const putPersonName224Data = {
    className: "put-person-name",
};

const putPersonName225Data = {
    className: "put-person-name",
};

const login3Data = {
    white08PtRadius: "/img/white---08pt-radius@1x.png",
};

const hooderHeartrate32Data = {
    heartRate: "Heart rate",
    x6: "/img/file---6@1x.png",
    className: "hooder-heartrate-1",
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
    backProps: back3Data,
    back2Props: back4Data,
    x0Props: x0Data,
    x02Props: x02Data,
    x03Props: x03Data,
    x04Props: x04Data,
    putPersonName22Props: putPersonName222Data,
    putPersonName222Props: putPersonName223Data,
    putPersonName223Props: putPersonName224Data,
    putPersonName224Props: putPersonName225Data,
    login3Props: login3Data,
    hooderHeartrate3Props: hooderHeartrate32Data,
};

const detailedHeader13Data = {
    children: "Heart Rate",
    className: "detailed-header-12",
};

const simplifiedHeader47Data = {
    detailedHeaderProps: detailedHeader13Data,
};

const x68229Data = {
    className: "x68-8",
};

const x69426Data = {
    className: "x69-5",
};

const x70410Data = {
    className: "x70-9",
};

const hooderStandard323Data = {
    className: "hooder-standard-2",
    x6822Props: x68229Data,
    x6822Props2: x69426Data,
    x6822Props3: x70410Data,
};

const waitingActivity1Data = {
    simplifiedHeader4Props: simplifiedHeader47Data,
    hooderStandard32Props: hooderStandard323Data,
};

const detailedHeader14Data = {
    children: "Message",
    className: "detailed-header-13",
};

const simplifiedHeader48Data = {
    className: "simplified-header-7",
    detailedHeaderProps: detailedHeader14Data,
};

const days2Data = {
    className: "days-1",
};

const back5Data = {
    src: "/img/file---30@1x.png",
    className: "back-2",
};

const back6Data = {
    src: "/img/file---29@1x.png",
    className: "forward-2",
};

const putPersonName17Data = {
    className: "put-person-name-5",
};

const putPersonName18Data = {
    className: "put-person-name-5",
};

const putPersonName19Data = {
    className: "put-person-name-5",
};

const putPersonName20Data = {
    className: "put-person-name-5",
};

const buttonsLabelLight2Data = {
    className: "buttons-label-light-1-1",
};

const login4Data = {
    buttonsLabelLightProps: buttonsLabelLight2Data,
};

const buttonsLabelLight3Data = {
    className: "buttons-label-light-3",
};

const login5Data = {
    buttonsLabelLight2Props: buttonsLabelLight3Data,
};

const buttonsLabelLight4Data = {
    className: "buttons-label-light-1",
};

const login42Data = {
    className: "login-3",
    buttonsLabelLightProps: buttonsLabelLight4Data,
};

const buttonsLabelLight5Data = {
    className: "buttons-label-light-4",
};

const login43Data = {
    className: "login-4",
    buttonsLabelLightProps: buttonsLabelLight5Data,
};

const hooderMessage2Data = {
    heartRate: "Heart rate",
    x6: "/img/file---6@1x.png",
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
    simplifiedHeader4Props: simplifiedHeader48Data,
    daysProps: days2Data,
    backProps: back5Data,
    back2Props: back6Data,
    putPersonNameProps: putPersonName17Data,
    putPersonName2Props: putPersonName18Data,
    putPersonName3Props: putPersonName19Data,
    putPersonName4Props: putPersonName20Data,
    login4Props: login4Data,
    login5Props: login5Data,
    login42Props: login42Data,
    login43Props: login43Data,
    hooderMessage2Props: hooderMessage2Data,
};

const detailedHeader22Data = {
    time: "9:41",
    score: "Score",
    cellularConnection: "/img/cellular-connection@1x.png",
    wifi: "/img/wifi@1x.png",
    cap: "/img/cap@1x.png",
    logout: "Logout",
    text1: "􀣌",
};

const avatar70Data = {
    className: "avatar-8-2",
};

const avatar214Data = {
    src: "/img/file-3@1x.png",
};

const avatar215Data = {
    src: "/img/nopath--------7-@1x.png",
    className: "avatar-24",
};

const avatar74Data = {
    className: "avatar-8-3",
};

const jinData = {
    jin: "JIN",
    x1: "/img/file---1@1x.png",
};

const avatar75Data = {
    className: "avatar-8",
};

const x682210Data = {
    className: "x68-9",
};

const x69327Data = {
    className: "x69-11",
};

const x70411Data = {
    className: "x70-10",
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
    detailedHeader2Props: detailedHeader22Data,
    avatarProps3: avatar70Data,
    avatar2Props: avatar214Data,
    avatar22Props: avatar215Data,
    avatar2Props24: avatar74Data,
    jinProps: jinData,
    avatar3Props2: avatar75Data,
    avatar3Props22: x682210Data,
    x70Props2: x69327Data,
    x70Props22: x70411Data,
};

const detailedHeader15Data = {
    children: "Message",
    className: "detailed-header-14",
};

const simplifiedHeader49Data = {
    className: "simplified-header-8",
    detailedHeaderProps: detailedHeader15Data,
};

const loading2Data = {
    className: "loading-2",
};

const x682211Data = {
    className: "x68-10",
};

const x69427Data = {
    className: "x69-6",
};

const x70412Data = {
    className: "x70-11",
};

const hooderStandard324Data = {
    className: "hooder-standard-3",
    x6822Props: x682211Data,
    x6822Props2: x69427Data,
    x6822Props3: x70412Data,
};

const waitingActivity2Data = {
    simplifiedHeader4Props: simplifiedHeader49Data,
    loadingProps: loading2Data,
    hooderStandard32Props: hooderStandard324Data,
};

const detailedHeader16Data = {
    children: "Kozipro",
};

const simplifiedHeader410Data = {
    className: "simplified-header-9",
    detailedHeaderProps: detailedHeader16Data,
};

const x682212Data = {
    className: "x68-11",
};

const x69428Data = {
    className: "x69-7",
};

const x70413Data = {
    className: "x70-12",
};

const hooderStandard325Data = {
    className: "hooder-standard-4",
    x6822Props: x682212Data,
    x6822Props2: x69428Data,
    x6822Props3: x70413Data,
};

const failData = {
    simplifiedHeader4Props: simplifiedHeader410Data,
    hooderStandard32Props: hooderStandard325Data,
};

