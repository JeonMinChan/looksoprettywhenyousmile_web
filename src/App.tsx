import React, { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { QueryClient, QueryClientProvider } from 'react-query';
import { FrameInputPage, SideBar, ChooseFrame, ShareToast, Randing } from './components';

import BackGround from './components/common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import ImageInput from './components/ImageInputPage';
import Picture from './components/Picture';

import FindFrame from './components/FindFrame';

function App() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false);
  const [imgUrl, setImgUrl] = useState<string>('');
  const sideBarRef = useRef<HTMLDivElement | null>(null);

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
            <Route path="/frame-choose" element={<ChooseFrame />} />
            <Route path="/frame-find" element={<FindFrame />} />
            <Route
              path="/frame-input"
              element={<FrameInputPage setIsSideBarOpen={setIsSideBarOpen} setImgUrl={setImgUrl} />}
            />
            <Route path="/photo" element={<Picture />} />
            <Route
              path="/image-input"
              element={<ImageInput setIsSideBarOpen={setIsSideBarOpen} sideBarRef={sideBarRef} />}
            />
          </Routes>
          {isSideBarOpen && (
            <SideBar
              imgUrl={imgUrl}
              ref={sideBarRef}
              setIsShowModal={setIsShowModal}
              setIsSideBarOpen={setIsSideBarOpen}
            />
          )}
          {isShowModal && <ShareToast setIsShowModal={setIsShowModal} />}
        </BackGround>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
