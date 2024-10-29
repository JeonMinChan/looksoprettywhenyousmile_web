import React from "react";
import "./App.css";
import BackGround from "./components/common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";

function App() {
  return (
    <div className="App">
      <BackGround backgroundImgUrl={BackGRoundImg}>asdf</BackGround>
    </div>
  );
}

export default App;
