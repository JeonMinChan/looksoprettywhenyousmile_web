import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { FrameInputPage, Randing, SideBar, ChooseFrame } from "./components";

import BackGround from "./components/common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import ImageInput from "./components/ImageInputPage";
import Picture from "./components/Picture";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");

  return (
    <BrowserRouter>
      <GlobalStyle />
      <BackGround backgroundImgUrl={BackGRoundImg}>
        <Routes>
          <Route path="/" element={<Randing />} />
          <Route path="/choose" element={<ChooseFrame />} />
          <Route
            path="/frame-input"
            element={<FrameInputPage setIsSideBarOpen={setIsSideBarOpen} setImgUrl={setImgUrl} />}
          />
          <Route path="photo" element={<Picture />} />
          <Route path="image-input" element={<ImageInput />} />
        </Routes>

        {isSideBarOpen && <SideBar imgUrl={imgUrl} />}
      </BackGround>
    </BrowserRouter>
  );
}

export default App;
