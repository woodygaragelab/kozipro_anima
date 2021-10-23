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
            simplifiedHeader4Props={explanation3Data.simplifiedHeader4Props}
            x133Props={explanation3Data.x133Props}
            hooderMessageProps={explanation3Data.hooderMessageProps}
          />
        </Route>
        <Route path="/photochoose1">
          <Photochoose1
            x5="/img/file---5@1x.png"
            addPhoto="Add Photo"
            simplifiedHeader2Props={photochoose1Data.simplifiedHeader2Props}
            backProps={photochoose1Data.backProps}
            back2Props={photochoose1Data.back2Props}
            hooderStandard2Props={photochoose1Data.hooderStandard2Props}
          />
        </Route>
        <Route path="/eventactivity2">
          <EventActivity2 {...eventActivity2Data} />
        </Route>
        <Route path="/textinputactivity1">
          <TextInputActivity1 {...textInputActivity1Data} />
        </Route>
        <Route path="/explanation4">
          <Explanation4
            text8="Check out your score."
            x19="/img/file---19@1x.png"
            simplifiedHeader4Props={explanation4Data.simplifiedHeader4Props}
            x133Props={explanation4Data.x133Props}
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
            simplifiedHeader2Props={explanation5Data.simplifiedHeader2Props}
            x133Props={explanation5Data.x133Props}
            hooderScoreProps={explanation5Data.hooderScoreProps}
          />
        </Route>
        <Route path="/explanation6">
          <Explanation6 {...explanation6Data} />
        </Route>
        <Route path="/waitingactivity1">
          <WaitingActivity1
            heart="/img/heart-icon-palepink-10@1x.png"
            simplifiedHeader4Props={waitingActivity1Data.simplifiedHeader4Props}
            hooderStandard2Props={waitingActivity1Data.hooderStandard2Props}
          />
        </Route>
        <Route path="/finalscoreactivity-1">
          <FinalScoreActivity1 {...finalScoreActivity1Data} />
        </Route>
        <Route path="/waitingactivity2">
          <WaitingActivity2
            heart="/img/heart-icon-palepink-10@1x.png"
            simplifiedHeader4Props={waitingActivity2Data.simplifiedHeader4Props}
            hooderStandard2Props={waitingActivity2Data.hooderStandard2Props}
          />
        </Route>
        <Route path="/fail">
          <Fail
            tryAgain="Try again!"
            simplifiedHeader4Props={failData.simplifiedHeader4Props}
            hooderStandard3Props={failData.hooderStandard3Props}
          />
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
        {/* <Route path="/:path(|iphone-12-pro-max-1)">
          <IPhone12ProMax1 ht="ht" title="test" />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
const detailedHeaderData = {
    children: "Kozipro 0",
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

const detailedHeader2Data = {
    children: "Kozipro 2",
};

const simplifiedHeader42Data = {
    detailedHeaderProps: detailedHeader2Data,
};

const avatar22Data = {
    src: "/img/file-3@1x.png",
};

const avatar5Data = {
    className: "avatar",
};

const explanation1Data = {
    place: "Name",
    place2: "Name",
    me: "Me",
    place3: "Name",
    place4: "Name",
    place5: "Name",
    text2: <>Who is the one in your heart?<br />Discover your true love!</>,
    simplifiedHeader4Props: simplifiedHeader42Data,
    avatar2Props: avatar22Data,
    avatarProps: avatar5Data,
};

const detailedHeader3Data = {
    children: "Kozipro 3",
};

const simplifiedHeader43Data = {
    detailedHeaderProps: detailedHeader3Data,
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
    heartRate: "Heart rate 3",
    x6: "/img/file---6@1x.png",
};

const explanation2Data = {
    simplifiedHeader4Props: simplifiedHeader43Data,
    x133Props: x133Data,
    hooderHeartrate3Props: hooderHeartrate3Data,
};

const detailedHeader4Data = {
    children: "Kozipro",
};

const simplifiedHeader44Data = {
    detailedHeaderProps: detailedHeader4Data,
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

const x68222Data = {
    className: "x68-1",
};

const hooderMessageData = {
    x6822Props: x68222Data,
};

const explanation3Data = {
    simplifiedHeader4Props: simplifiedHeader44Data,
    x133Props: x1332Data,
    hooderMessageProps: hooderMessageData,
};

const detailedHeader5Data = {
    children: "Registration",
    className: "detailed-header-4",
};

const simplifiedHeader2Data = {
    detailedHeaderProps: detailedHeader5Data,
};

const backData = {
    src: "/img/file---30@1x.png",
};

const back2Data = {
    src: "/img/file---29@1x.png",
    className: "forward",
};

const x69423Data = {
    className: "x69-2",
};

const x7043Data = {
    className: "x70-2",
};

const hooderStandard2Data = {
    x6942Props: x69423Data,
    x704Props: x7043Data,
};

const photochoose1Data = {
    simplifiedHeader2Props: simplifiedHeader2Data,
    backProps: backData,
    back2Props: back2Data,
    hooderStandard2Props: hooderStandard2Data,
};

const detailedHeader6Data = {
    children: "Heart Rate 6 13:20",
    className: "detailed-header-5",
};

const simplifiedHeader22Data = {
    className: "simplified-header-3",
    detailedHeaderProps: detailedHeader6Data,
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
    heartRate: "Heart rate 32",
    x6: "/img/file---6@1x.png",
    className: "hooder-heartrate-1",
};

const eventActivity2Data = {
    yyyyMmDd: "YYYY/MM/DD",
    x9: "/img/file---10@1x.png",
    x10: "/img/file---10@1x.png",
    graph: "Graph",
    graph2: "Graph",
    number: "186",
    number2: "117",
    number3: "48",
    x8: "/img/file--10@1x.png",
    x92: "/img/file--10@1x.png",
    x102: "/img/file--10@1x.png",
    x24: "/img/file---24@1x.png",
    text5: "0:00",
    text6: "12:00",
    text7: "23:59",
    heart_Icon_Palepink: "/img/heart-icon-palepink-1@1x.png",
    ttTt: "TT:TT",
    heart_Icon_Palepink2: "/img/heart-icon-palepink-1@1x.png",
    simplifiedHeader2Props: simplifiedHeader22Data,
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

const detailedHeader7Data = {
    children: "Message",
    className: "detailed-header-6",
};

const simplifiedHeader45Data = {
    className: "simplified-header-4",
    detailedHeaderProps: detailedHeader7Data,
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

const buttonsLabelLight22Data = {
    className: "buttons-label-light-4",
};

const login5Data = {
    buttonsLabelLight2Props: buttonsLabelLight22Data,
};

const login42Data = {
    className: "login-3",
};

const buttonsLabelLight3Data = {
    className: "buttons-label-light-2",
};

const login6Data = {
    buttonsLabelLightProps: buttonsLabelLight3Data,
};

const hooderMessage2Data = {
    heartRate: "Heart rate 2",
    x6: "/img/file---6@1x.png",
    x7: "/img/file---7@1x.png",
};

const textInputActivity1Data = {
    yyyyMmDd: "YYYY/MM/DD",
    x9: "/img/file---10@1x.png",
    x10: "/img/file---10@1x.png",
    inputType: "text",
    inputPlaceholder: "Paste message",
    inputType2: "text",
    inputPlaceholder2: "Paste message",
    inputType3: "text",
    inputPlaceholder3: "Paste message",
    inputType4: "text",
    inputPlaceholder4: "Paste message",
    simplifiedHeader4Props: simplifiedHeader45Data,
    backProps: back5Data,
    back2Props: back6Data,
    putPersonNameProps: putPersonName17Data,
    putPersonName2Props: putPersonName18Data,
    putPersonName3Props: putPersonName19Data,
    putPersonName4Props: putPersonName20Data,
    login5Props: login5Data,
    login4Props: login42Data,
    login6Props: login6Data,
    hooderMessage2Props: hooderMessage2Data,
};

const detailedHeader8Data = {
    children: "Kozipro",
};

const simplifiedHeader46Data = {
    detailedHeaderProps: detailedHeader8Data,
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

const x68223Data = {
    className: "x68-2",
};

const x7045Data = {
    className: "x70-4",
};

const hooderScoreData = {
    x6822Props: x68223Data,
    x704Props: x7045Data,
};

const explanation4Data = {
    simplifiedHeader4Props: simplifiedHeader46Data,
    x133Props: x1333Data,
    hooderScoreProps: hooderScoreData,
};

const detailedHeader9Data = {
    children: "Kozipro",
};

const simplifiedHeader23Data = {
    className: "simplified-header-5",
    detailedHeaderProps: detailedHeader9Data,
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

const x68224Data = {
    className: "x68-3",
};

const x7046Data = {
    className: "x70-5",
};

const hooderScore2Data = {
    className: "hooder-score-1",
    x6822Props: x68224Data,
    x704Props: x7046Data,
};

const explanation5Data = {
    simplifiedHeader2Props: simplifiedHeader23Data,
    x133Props: x1334Data,
    hooderScoreProps: hooderScore2Data,
};

const detailedHeader10Data = {
    children: "Kozipro",
};

const simplifiedHeader47Data = {
    detailedHeaderProps: detailedHeader10Data,
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

const x7047Data = {
    className: "x70-6",
};

const hooderScore3Data = {
    className: "hooder-score-2",
    x6822Props: x68225Data,
    x704Props: x7047Data,
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
    text10: <>Find people<br />who might be intereseted in you.</>,
    simplifiedHeader4Props: simplifiedHeader47Data,
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
};

const detailedHeader11Data = {
    children: "Heart Rate 11",
    className: "detailed-header-10",
};

const simplifiedHeader48Data = {
    detailedHeaderProps: detailedHeader11Data,
};

const x69425Data = {
    className: "x69-4",
};

const x7048Data = {
    className: "x70-7",
};

const hooderStandard22Data = {
    x6942Props: x69425Data,
    x704Props: x7048Data,
};

const waitingActivity1Data = {
    simplifiedHeader4Props: simplifiedHeader48Data,
    hooderStandard2Props: hooderStandard22Data,
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

const avatar43Data = {
    className: "avatar-5-2",
};

const avatar211Data = {
    src: "/img/file-3@1x.png",
};

const avatar212Data = {
    src: "/img/nopath--------7-@1x.png",
    className: "avatar-21",
};

const avatar47Data = {
    className: "avatar-5-3",
};

const jinData = {
    jin: "JIN",
    x1: "/img/file---1@1x.png",
};

const avatar48Data = {
    className: "avatar-5",
};

const x6853Data = {
    className: "x68-11",
};

const x69324Data = {
    className: "x69-10",
};

const x7049Data = {
    className: "x70-8",
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
    avatarProps3: avatar43Data,
    avatar2Props: avatar211Data,
    avatar22Props: avatar212Data,
    avatar2Props24: avatar47Data,
    jinProps: jinData,
    avatar3Props2: avatar48Data,
    avatar3Props22: x6853Data,
    x70Props2: x69324Data,
    x70Props22: x7049Data,
};

const detailedHeader12Data = {
    children: "Message",
    className: "detailed-header-11",
};

const simplifiedHeader49Data = {
    className: "simplified-header-8",
    detailedHeaderProps: detailedHeader12Data,
};

const x69426Data = {
    className: "x69-5",
};

const x70410Data = {
    className: "x70-9",
};

const hooderStandard23Data = {
    className: "hooder-standard-3",
    x6942Props: x69426Data,
    x704Props: x70410Data,
};

const waitingActivity2Data = {
    simplifiedHeader4Props: simplifiedHeader49Data,
    hooderStandard2Props: hooderStandard23Data,
};

const detailedHeader13Data = {
    children: "Kozipro",
};

const simplifiedHeader410Data = {
    detailedHeaderProps: detailedHeader13Data,
};

const x6855Data = {
    className: "x68-13",
};

const x6922Data = {
    className: "x69-3",
};

const x70411Data = {
    className: "x70-10",
};

const hooderStandard3Data = {
    x685Props: x6855Data,
    x692Props: x6922Data,
    x704Props: x70411Data,
};

const failData = {
    simplifiedHeader4Props: simplifiedHeader410Data,
    hooderStandard3Props: hooderStandard3Data,
};

const detailedHeader14Data = {
    children: "Kozipro",
};

const simplifiedHeader24Data = {
    className: "simplified-header-6",
    detailedHeaderProps: detailedHeader14Data,
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

const x68226Data = {
    className: "x68-5",
};

const x70412Data = {
    className: "x70-11",
};

const hooderScore4Data = {
    className: "hooder-score-3",
    x6822Props: x68226Data,
    x704Props: x70412Data,
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
    text11: <>Register neme and icon of <br />the people that you communicate with.</>,
    simplifiedHeader2Props: simplifiedHeader24Data,
    avatar2Props: avatar213Data,
    avatarProps: avatar55Data,
    avatar2Props2: avatar57Data,
    hooderScoreProps: hooderScore4Data,
};

const detailedHeader15Data = {
    children: "Kozipro",
};

const simplifiedHeader25Data = {
    className: "simplified-header-7",
    detailedHeaderProps: detailedHeader15Data,
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

const x68227Data = {
    className: "x68-6",
};

const x70413Data = {
    className: "x70-12",
};

const hooderScore5Data = {
    className: "hooder-score-4",
    x6822Props: x68227Data,
    x704Props: x70413Data,
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
    simplifiedHeader2Props: simplifiedHeader25Data,
    avatar2Props: avatar214Data,
    avatarProps: avatar64Data,
    avatar2Props2: avatar66Data,
    hooderScoreProps: hooderScore5Data,
};

const detailedHeader16Data = {
    children: "Kozipro",
};

const simplifiedHeader26Data = {
    className: "simplified-header-9",
    detailedHeaderProps: detailedHeader16Data,
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

const hooderScore22Data = {
    heartRate: "Heart rate 22",
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
    simplifiedHeader2Props: simplifiedHeader26Data,
    avatar2Props: avatar215Data,
    avatarProps: avatar73Data,
    avatar2Props2: avatar75Data,
    hooderScore2Props: hooderScore22Data,
};

