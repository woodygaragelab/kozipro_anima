import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login";
import Main from "./components/Main";
import WaitingActivity1 from "./components/WaitingActivity1";
import Fail from "./components/Fail";
import Photochoose1 from "./components/Photochoose1";
import EventActivity2 from "./components/EventActivity2";
import TextInputActivity1 from "./components/TextInputActivity1";
import WaitingActivity2 from "./components/WaitingActivity2";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|login1)">
          <Login {...loginData} />
        </Route>
        <Route path="/main">
          <Main {...mainData} />
        </Route>
        <Route path="/waitingactivity1">
          <WaitingActivity1
            heart="https://anima-uploads.s3.amazonaws.com/projects/618616dc64d833887f149d69/files/loadingimage.gif"
            heart2="https://anima-uploads.s3.amazonaws.com/projects/61558e45ee42a07e6b5724d6/files/heart-gif-brown.gif"
            simplifiedHeaderProps={waitingActivity1Data.simplifiedHeaderProps}
            hooderStandardProps={waitingActivity1Data.hooderStandardProps}
          />
        </Route>
        <Route path="/fail">
          <Fail
            tryAgain="Try again!"
            simplifiedHeaderProps={failData.simplifiedHeaderProps}
            hooderStandardProps={failData.hooderStandardProps}
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
        <Route path="/waitingactivity2">
          <WaitingActivity2
            heart="https://anima-uploads.s3.amazonaws.com/projects/618616dc64d833887f149d69/files/loadingimage.gif"
            simplifiedHeaderProps={waitingActivity2Data.simplifiedHeaderProps}
            loadingProps={waitingActivity2Data.loadingProps}
            hooderStandardProps={waitingActivity2Data.hooderStandardProps}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const login2Data = {
    children: "Login",
};

const loginData = {
    x20: "/img/file----20@1x.png",
    x19: "/img/file----19@1x.png",
    x5: "/img/file--5@1x.png",
    inputType: "email",
    inputPlaceholder: "ID",
    inputType2: "password",
    inputPlaceholder2: "Password",
    x202: "/img/file---20@1x.png",
    text1: "Forget your password?",
    clickHere: "Click here",
    login2Props: login2Data,
};

const x2712Data = {
    className: "x270",
};

const x2713Data = {
    className: "x266",
};

const x2714Data = {
    className: "x267",
};

const avatar22Data = {
    src: "/img/file-3@1x.png",
};

const x2715Data = {
    className: "x265",
};

const x2716Data = {
    className: "x264",
};

const avatar7Data = {
    className: "avatar-7",
};

const x268Data = {
    avatarProps: avatar7Data,
};

const x2717Data = {
    className: "x272",
};

const avatar9Data = {
    className: "avatar",
};

const x2682Data = {
    className: "x269",
    avatarProps: avatar9Data,
};

const detailedHeader2Data = {
    className: "detailed-header-1",
};

const simplifiedHeaderData = {
    detailedHeaderProps: detailedHeader2Data,
};

const hooderScoreData = {
    x6: "/img/file---6@1x.png",
    x7: "/img/file---7@1x.png",
    score: "Score",
    x8: "/img/file---8@1x.png",
};

const mainData = {
    me: "Me",
    x271Props: x2712Data,
    x2712Props: x2713Data,
    x2713Props: x2714Data,
    avatar2Props: avatar22Data,
    x2714Props: x2715Data,
    x2715Props: x2716Data,
    x268Props: x268Data,
    x2716Props: x2717Data,
    x2682Props: x2682Data,
    simplifiedHeaderProps: simplifiedHeaderData,
    hooderScoreProps: hooderScoreData,
};

const detailedHeader3Data = {
    className: "detailed-header-2",
};

const simplifiedHeader2Data = {
    className: "simplified-header-1",
    detailedHeaderProps: detailedHeader3Data,
};

const x68Data = {
    x6: "/img/file---6@1x.png",
};

const x69Data = {
    className: "",
};

const x70Data = {
    className: "",
};

const hooderStandardData = {
    x68Props: x68Data,
    x69Props: x69Data,
    x70Props: x70Data,
};

const waitingActivity1Data = {
    simplifiedHeaderProps: simplifiedHeader2Data,
    hooderStandardProps: hooderStandardData,
};

const detailedHeader4Data = {
    className: "detailed-header-3",
};

const simplifiedHeader3Data = {
    className: "simplified-header-2",
    detailedHeaderProps: detailedHeader4Data,
};

const x682Data = {
    x6: "/img/file---6@1x.png",
};

const x692Data = {
    className: "x69-2",
};

const x702Data = {
    className: "x70-2",
};

const hooderStandard2Data = {
    className: "hooder-standard-1",
    x68Props: x682Data,
    x69Props: x692Data,
    x70Props: x702Data,
};

const failData = {
    simplifiedHeaderProps: simplifiedHeader3Data,
    hooderStandardProps: hooderStandard2Data,
};

const detailedHeader5Data = {
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
};

const x693Data = {
    className: "",
};

const x703Data = {
    className: "x70-3",
};

const hooderStandard3Data = {
    className: "hooder-standard-2",
    x68Props: x683Data,
    x69Props: x693Data,
    x70Props: x703Data,
};

const photochoose1Data = {
    simplifiedHeader2Props: simplifiedHeader22Data,
    backProps: backData,
    back2Props: back2Data,
    hooderStandardProps: hooderStandard3Data,
};

const detailedHeader6Data = {
    className: "detailed-header-5",
};

const simplifiedHeader23Data = {
    className: "simplified-header-6",
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

const x02Data = {
    className: "x29-item",
};

const x03Data = {
    className: "x29-item",
};

const x04Data = {
    className: "x29-item",
};

const putPersonName3Data = {
    className: "put-person-name",
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

const login3Data = {
    white08PtRadius: "/img/white---08pt-radius@1x.png",
    label: "Send",
};

const x694Data = {
    className: "x69-4",
};

const x704Data = {
    className: "x70-4",
};

const hooderHeartrateData = {
    x6: "/img/file---6@1x.png",
    heartRate: "Heart rate",
    x69Props: x694Data,
    x70Props: x704Data,
};

const eventActivity2Data = {
    number: "186",
    number2: "117",
    number3: "48",
    x8: "/img/file--10@1x.png",
    x9: "/img/file--10@1x.png",
    x10: "/img/file--10@1x.png",
    x24: "/img/file---24@1x.png",
    text2: "0:00",
    text3: "12:00",
    text4: "23:59",
    title: "Graph",
    graph: "Graph",
    heart_Icon_Palepink: "/img/heart-icon-palepink-10@1x.png",
    ttTt: "TT:TT",
    heart_Icon_Palepink2: "/img/heart-icon-palepink-10@1x.png",
    simplifiedHeader2Props: simplifiedHeader23Data,
    backProps: back3Data,
    back2Props: back4Data,
    x0Props: x02Data,
    x02Props: x03Data,
    x03Props: x04Data,
    putPersonNameProps: putPersonName3Data,
    putPersonName2Props: putPersonName4Data,
    putPersonName3Props: putPersonName5Data,
    putPersonName4Props: putPersonName6Data,
    login3Props: login3Data,
    hooderHeartrateProps: hooderHeartrateData,
};

const detailedHeader7Data = {
    className: "detailed-header-6",
};

const simplifiedHeader4Data = {
    className: "simplified-header-3",
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
    className: "put-person-name-3",
};

const putPersonName218Data = {
    className: "put-person-name-3",
};

const putPersonName219Data = {
    className: "put-person-name-3",
};

const putPersonName220Data = {
    className: "put-person-name-3",
};

const login4Data = {
    children: "送信",
};

const login5Data = {
    children: "送信",
};

const login42Data = {
    children: "送信",
    className: "login-3",
};

const login43Data = {
    children: "Send",
    className: "login-4",
};

const hooderMessageData = {
    x6: "/img/file---6@1x.png",
    x7: "/img/file---7@1x.png",
    x8: "/img/file---8@1x.png",
    message: "Message",
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
    simplifiedHeaderProps: simplifiedHeader4Data,
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
    hooderMessageProps: hooderMessageData,
};

const detailedHeader8Data = {
    className: "detailed-header-7",
};

const simplifiedHeader5Data = {
    className: "simplified-header-4",
    detailedHeaderProps: detailedHeader8Data,
};

const loading2Data = {
    className: "loading-2",
};

const x684Data = {
    x6: "/img/file---6@1x.png",
};

const x695Data = {
    className: "",
};

const x705Data = {
    className: "x70-5",
};

const hooderStandard4Data = {
    className: "hooder-standard-3",
    x68Props: x684Data,
    x69Props: x695Data,
    x70Props: x705Data,
};

const waitingActivity2Data = {
    simplifiedHeaderProps: simplifiedHeader5Data,
    loadingProps: loading2Data,
    hooderStandardProps: hooderStandard4Data,
};

