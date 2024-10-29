import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/globalStyle';
import { FrameInputPage } from './components';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/frame-input" element={<FrameInputPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
