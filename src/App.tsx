import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import { FrameInputPage, Randing, SideBar, ChooseFrame, ShareToast } from "./components";

import BackGround from "./components/common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import { QueryClient, QueryClientProvider } from "react-query";
import FindFrame from "./components/FindFrame";

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>("");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        retryOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
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
            <Route path="/find-frame" element={<FindFrame />} />
          </Routes>
          {isSideBarOpen && <SideBar imgUrl={imgUrl} setIsShowModal={setIsShowModal} />}
          {isShowModal && <ShareToast setIsShowModal={setIsShowModal} />}
        </BackGround>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
