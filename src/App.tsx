import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { FrameInputPage } from './components';

import BackGround from './components/common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <BackGround backgroundImgUrl={BackGRoundImg}>
        <Routes>
          <Route path="/frame-input" element={<FrameInputPage />} />
        </Routes>
      </BackGround>
    </BrowserRouter>
  );
}

export default App;
