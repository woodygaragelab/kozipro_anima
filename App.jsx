import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Explanation1 from "./components/Explanation1";
import Explanation2 from "./components/Explanation2";
import Explanation3 from "./components/Explanation3";
import Photochoose1 from "./components/Photochoose1";
import EventActivity2 from "./components/EventActivity2";
import TextInputActivity1 from "./components/TextInputActivity1";
import Fail from "./components/Fail";
import Explanation4 from "./components/Explanation4";
import Explanation5 from "./components/Explanation5";
import Explanation6 from "./components/Explanation6";
import Explanation7 from "./components/Explanation7";
import WaitingActivity1 from "./components/WaitingActivity1";
import FinalScoreActivity1 from "./components/FinalScoreActivity1";
import WaitingActivity2 from "./components/WaitingActivity2";
import Explanation8 from "./components/Explanation8";
import Main from "./components/Main";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|login1)">
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
            x13Props={explanation2Data.x13Props}
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
            hooderStandardProps={photochoose1Data.hooderStandardProps}
          />
        </Route>
        <Route path="/eventactivity2">
          <EventActivity2 {...eventActivity2Data} />
        </Route>
        <Route path="/textinputactivity1">
          <TextInputActivity1 {...textInputActivity1Data} />
        </Route>
        <Route path="/fail">
          <Fail
            tryAgain="Try again!"
            simplifiedHeaderProps={failData.simplifiedHeaderProps}
            hooderStandardProps={failData.hooderStandardProps}
          />
        </Route>
        <Route path="/explanation4">
          <Explanation4
            text8="Check out your score."
            x19="/img/file---19@1x.png"
            x13Props={explanation4Data.x13Props}
            simplifiedHeaderProps={explanation4Data.simplifiedHeaderProps}
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
        <Route path="/waitingactivity1">
          <WaitingActivity1
            heart="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heart-gif-brown.gif"
            simplifiedHeaderProps={waitingActivity1Data.simplifiedHeaderProps}
            hooderStandardProps={waitingActivity1Data.hooderStandardProps}
          />
        </Route>
        <Route path="/finalscoreactivity-1">
          <FinalScoreActivity1 {...finalScoreActivity1Data} />
        </Route>
        <Route path="/waitingactivity2">
          <WaitingActivity2
            heart="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heartbeats.gif"
            simplifiedHeaderProps={waitingActivity2Data.simplifiedHeaderProps}
            loadingProps={waitingActivity2Data.loadingProps}
            hooderStandardProps={waitingActivity2Data.hooderStandardProps}
          />
        </Route>
        <Route path="/explanation8">
          <Explanation8 {...explanation8Data} />
        </Route>
        <Route path="/main">
          <Main {...mainData} />
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

const simplifiedHeaderData = {
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
    simplifiedHeaderProps: simplifiedHeaderData,
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

const simplifiedHeader2Data = {
    className: "simplified-header-1",
    detailedHeaderProps: detailedHeader2Data,
};

const x68Data = {
    x6: "/img/file---6@1x.png",
    className: "",
};

const hooderStandardData = {
    x68Props: x68Data,
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
    simplifiedHeaderProps: simplifiedHeader2Data,
    hooderStandardProps: hooderStandardData,
};

const avatar23Data = {
    src: "/img/file-3@1x.png",
};

const avatar10Data = {
    className: "avatar-1",
};

const x13Data = {
    avatar2Props: avatar23Data,
    avatarProps: avatar10Data,
};

const detailedHeader3Data = {
    children: "Kozipro",
};

const simplifiedHeader3Data = {
    className: "simplified-header-2",
    detailedHeaderProps: detailedHeader3Data,
};

const explanation2Data = {
    x13Props: x13Data,
    simplifiedHeaderProps: simplifiedHeader3Data,
};

const avatar24Data = {
    src: "/img/file-3@1x.png",
};

const avatar15Data = {
    className: "avatar-2",
};

const x132Data = {
    avatar2Props: avatar24Data,
    avatarProps: avatar15Data,
};

const detailedHeader4Data = {
    children: "Kozipro",
};

const simplifiedHeader4Data = {
    className: "simplified-header-3",
    detailedHeaderProps: detailedHeader4Data,
};

const x682Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-1",
};

const hooderMessageData = {
    x68Props: x682Data,
};

const explanation3Data = {
    x13Props: x132Data,
    simplifiedHeaderProps: simplifiedHeader4Data,
    hooderMessageProps: hooderMessageData,
};

const detailedHeader5Data = {
    children: "Registration",
    className: "detailed-header-4",
};

const simplifiedHeader22Data = {
    detailedHeaderProps: detailedHeader5Data,
};

const backData = {
    src: "/img/file---30@1x.png",
};

const back2Data = {
    src: "/img/file---29@1x.png",
    className: "forward",
};

const x683Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-2",
};

const x694Data = {
    className: "x69-3",
};

const x703Data = {
    className: "x70-2",
};

const hooderStandard2Data = {
    className: "hooder-standard-1",
    x68Props: x683Data,
    x68Props2: x694Data,
    x68Props3: x703Data,
};

const photochoose1Data = {
    simplifiedHeader2Props: simplifiedHeader22Data,
    backProps: backData,
    back2Props: back2Data,
    hooderStandardProps: hooderStandard2Data,
};

const detailedHeader6Data = {
    children: "Heart Rate",
    className: "detailed-header-5",
};

const simplifiedHeader23Data = {
    className: "simplified-header-11",
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

const putPersonName22Data = {
    className: "put-person-name-4",
};

const putPersonName23Data = {
    className: "put-person-name-4",
};

const putPersonName24Data = {
    className: "put-person-name-4",
};

const x0Data = {
    putPersonName2Props: putPersonName22Data,
    putPersonName22Props: putPersonName23Data,
    putPersonName23Props: putPersonName24Data,
};

const putPersonName26Data = {
    className: "put-person-name-4",
};

const putPersonName27Data = {
    className: "put-person-name-4",
};

const putPersonName28Data = {
    className: "put-person-name-4",
};

const x02Data = {
    className: "x29-item",
    putPersonName2Props: putPersonName26Data,
    putPersonName22Props: putPersonName27Data,
    putPersonName23Props: putPersonName28Data,
};

const putPersonName210Data = {
    className: "put-person-name-4",
};

const putPersonName211Data = {
    className: "put-person-name-4",
};

const putPersonName212Data = {
    className: "put-person-name-4",
};

const x03Data = {
    className: "x29-item",
    putPersonName2Props: putPersonName210Data,
    putPersonName22Props: putPersonName211Data,
    putPersonName23Props: putPersonName212Data,
};

const putPersonName214Data = {
    className: "put-person-name-4",
};

const putPersonName215Data = {
    className: "put-person-name-4",
};

const putPersonName216Data = {
    className: "put-person-name-4",
};

const x04Data = {
    className: "x29-item",
    putPersonName2Props: putPersonName214Data,
    putPersonName22Props: putPersonName215Data,
    putPersonName23Props: putPersonName216Data,
};

const putPersonName3Data = {
    className: "put-person-name-2",
};

const putPersonName4Data = {
    className: "put-person-name",
};

const putPersonName5Data = {
    className: "put-person-name",
};

const putPersonName6Data = {
    className: "put-person-name",
};

const buttonsLabelLightData = {
    children: "Send",
};

const login3Data = {
    white08PtRadius: "/img/white---08pt-radius@1x.png",
    buttonsLabelLightProps: buttonsLabelLightData,
};

const hooderHeartrate2Data = {
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
    text5: "0:00",
    text6: "12:00",
    text7: "23:59",
    title: "Graph",
    graph: "Graph",
    heart_Icon_Palepink: "/img/heart-icon-palepink-10@1x.png",
    ttTt: "TT:TT",
    heart_Icon_Palepink2: "/img/heart-icon-palepink-10@1x.png",
    simplifiedHeader2Props: simplifiedHeader23Data,
    backProps: back3Data,
    back2Props: back4Data,
    x0Props: x0Data,
    x02Props: x02Data,
    x03Props: x03Data,
    x04Props: x04Data,
    putPersonNameProps: putPersonName3Data,
    putPersonName2Props: putPersonName4Data,
    putPersonName3Props: putPersonName5Data,
    putPersonName4Props: putPersonName6Data,
    login3Props: login3Data,
    hooderHeartrateProps: hooderHeartrate2Data,
};

const detailedHeader7Data = {
    children: "Message",
    className: "detailed-header-6",
};

const simplifiedHeader5Data = {
    className: "simplified-header-4",
    detailedHeaderProps: detailedHeader7Data,
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

const putPersonName217Data = {
    className: "put-person-name-5",
};

const putPersonName218Data = {
    className: "put-person-name-5",
};

const putPersonName219Data = {
    className: "put-person-name-5",
};

const putPersonName220Data = {
    className: "put-person-name-5",
};

const buttonsLabelLight2Data = {
    children: "送信",
    className: "buttons-label-light-1-1",
};

const login4Data = {
    buttonsLabelLightProps: buttonsLabelLight2Data,
};

const buttonsLabelLight3Data = {
    children: "送信",
    className: "buttons-label-light-3",
};

const login5Data = {
    buttonsLabelLightProps: buttonsLabelLight3Data,
};

const buttonsLabelLight4Data = {
    children: "送信",
    className: "buttons-label-light-1",
};

const login42Data = {
    className: "login-3",
    buttonsLabelLightProps: buttonsLabelLight4Data,
};

const buttonsLabelLight5Data = {
    children: "Send",
    className: "buttons-label-light-4",
};

const login43Data = {
    className: "login-4",
    buttonsLabelLightProps: buttonsLabelLight5Data,
};

const hooderMessage2Data = {
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
    simplifiedHeaderProps: simplifiedHeader5Data,
    daysProps: days2Data,
    backProps: back5Data,
    back2Props: back6Data,
    putPersonName2Props: putPersonName217Data,
    putPersonName22Props: putPersonName218Data,
    putPersonName23Props: putPersonName219Data,
    putPersonName24Props: putPersonName220Data,
    login4Props: login4Data,
    login5Props: login5Data,
    login42Props: login42Data,
    login43Props: login43Data,
    hooderMessage2Props: hooderMessage2Data,
};

const detailedHeader8Data = {
    children: "Kozipro",
};

const simplifiedHeader6Data = {
    className: "simplified-header-5",
    detailedHeaderProps: detailedHeader8Data,
};

const x684Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-3",
};

const x696Data = {
    className: "x69-5",
};

const x705Data = {
    className: "x70-4",
};

const hooderStandard3Data = {
    className: "hooder-standard-2",
    x68Props: x684Data,
    x68Props2: x696Data,
    x68Props3: x705Data,
};

const failData = {
    simplifiedHeaderProps: simplifiedHeader6Data,
    hooderStandardProps: hooderStandard3Data,
};

const avatar25Data = {
    src: "/img/file-3@1x.png",
};

const avatar20Data = {
    className: "avatar-3",
};

const x133Data = {
    className: "x13-3",
    avatar2Props: avatar25Data,
    avatarProps: avatar20Data,
};

const detailedHeader9Data = {
    children: "Kozipro",
};

const simplifiedHeader7Data = {
    className: "simplified-header-6",
    detailedHeaderProps: detailedHeader9Data,
};

const x685Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-4",
};

const x706Data = {
    className: "x70-5",
};

const hooderScoreData = {
    x68Props: x685Data,
    x70Props: x706Data,
};

const explanation4Data = {
    x13Props: x133Data,
    simplifiedHeaderProps: simplifiedHeader7Data,
    hooderScoreProps: hooderScoreData,
};

const x686Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-5",
};

const x707Data = {
    className: "x70-6",
};

const hooderScore2Data = {
    className: "hooder-score-1",
    x68Props: x686Data,
    x70Props: x707Data,
};

const avatar27Data = {
    src: "/img/file-3@1x.png",
};

const avatar30Data = {
    className: "avatar-4",
};

const x134Data = {
    className: "x13-4",
    avatar2Props: avatar27Data,
    avatarProps: avatar30Data,
};

const detailedHeader10Data = {
    children: "Kozipro",
};

const simplifiedHeader24Data = {
    className: "simplified-header-12",
    detailedHeaderProps: detailedHeader10Data,
};

const explanation5Data = {
    hooderScoreProps: hooderScore2Data,
    x13Props: x134Data,
    simplifiedHeader2Props: simplifiedHeader24Data,
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

const x687Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-6",
};

const x708Data = {
    className: "x70-7",
};

const hooderScore3Data = {
    className: "hooder-score-2",
    x68Props: x687Data,
    x70Props: x708Data,
};

const detailedHeader11Data = {
    children: "Kozipro",
};

const simplifiedHeader8Data = {
    className: "simplified-header-7",
    detailedHeaderProps: detailedHeader11Data,
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
    simplifiedHeaderProps: simplifiedHeader8Data,
};

const detailedHeader12Data = {
    children: "Kozipro",
};

const simplifiedHeader25Data = {
    className: "simplified-header-13",
    detailedHeaderProps: detailedHeader12Data,
};

const x688Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-7",
};

const x709Data = {
    className: "x70-8",
};

const hooderScore4Data = {
    x68Props: x688Data,
    x70Props: x709Data,
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
    text11: <>Register neme and icon of <br />the people that you communicate with.</>,
    simplifiedHeader2Props: simplifiedHeader25Data,
    hooderScoreProps: hooderScore4Data,
    avatar2Props: avatar211Data,
    avatarProps: avatar46Data,
    avatar2Props2: avatar48Data,
};

const detailedHeader13Data = {
    children: "Heart Rate",
    className: "detailed-header-12",
};

const simplifiedHeader9Data = {
    detailedHeaderProps: detailedHeader13Data,
};

const x689Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-8",
};

const x697Data = {
    className: "x69-6",
};

const x7010Data = {
    className: "x70-9",
};

const hooderStandard4Data = {
    className: "hooder-standard-3",
    x68Props: x689Data,
    x68Props2: x697Data,
    x68Props3: x7010Data,
};

const waitingActivity1Data = {
    simplifiedHeaderProps: simplifiedHeader9Data,
    hooderStandardProps: hooderStandard4Data,
};

const detailedHeader22Data = {
    time: "9:41",
    score: "Score",
    cellularConnection: "/img/cellular-connection@1x.png",
    wifi: "/img/wifi@1x.png",
    cap: "/img/cap@1x.png",
    logout: "Logout",
    text12: "􀣌",
};

const avatar52Data = {
    className: "avatar-6-2",
};

const avatar212Data = {
    src: "/img/file-3@1x.png",
};

const avatar213Data = {
    src: "/img/nopath--------7-@1x.png",
    className: "avatar-22",
};

const avatar56Data = {
    className: "avatar-6-3",
};

const jinData = {
    jin: "JIN",
    x1: "/img/file---1@1x.png",
};

const avatar57Data = {
    className: "avatar-6",
};

const x6810Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-9",
};

const x6926Data = {
    className: "x69-11",
};

const x7011Data = {
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
    avatarProps: avatar52Data,
    avatar2Props: avatar212Data,
    avatar22Props: avatar213Data,
    avatar2Props2: avatar56Data,
    jinProps: jinData,
    avatar3Props: avatar57Data,
    x68Props: x6810Data,
    x692Props: x6926Data,
    x70Props: x7011Data,
};

const detailedHeader14Data = {
    children: "Message",
    className: "detailed-header-13",
};

const simplifiedHeader10Data = {
    className: "simplified-header-9",
    detailedHeaderProps: detailedHeader14Data,
};

const loading2Data = {
    className: "loading-2",
};

const x6811Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-10",
};

const x698Data = {
    className: "x69-7",
};

const x7012Data = {
    className: "x70-11",
};

const hooderStandard5Data = {
    className: "hooder-standard-4",
    x68Props: x6811Data,
    x68Props2: x698Data,
    x68Props3: x7012Data,
};

const waitingActivity2Data = {
    simplifiedHeaderProps: simplifiedHeader10Data,
    loadingProps: loading2Data,
    hooderStandardProps: hooderStandard5Data,
};

const detailedHeader15Data = {
    children: "Kozipro",
};

const simplifiedHeader26Data = {
    className: "simplified-header-14",
    detailedHeaderProps: detailedHeader15Data,
};

const x6812Data = {
    x6: "/img/file---6@1x.png",
    className: "x68-11",
};

const x7013Data = {
    className: "x70-12",
};

const hooderScore5Data = {
    x68Props: x6812Data,
    x70Props: x7013Data,
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
    simplifiedHeader2Props: simplifiedHeader26Data,
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

const detailedHeader16Data = {
    children: "Kozipro",
};

const simplifiedHeader27Data = {
    className: "simplified-header-15",
    detailedHeaderProps: detailedHeader16Data,
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
    avatar2Props: avatar215Data,
    avatarProps: avatar73Data,
    avatar2Props2: avatar75Data,
    simplifiedHeader2Props: simplifiedHeader27Data,
    hooderScore2Props: hooderScore22Data,
};

