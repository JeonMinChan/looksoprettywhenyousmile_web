import React from 'react';
import * as S from './style';
import { bear1, bear2, bear3 } from '@src/assets/images';

import { useNavigate } from 'react-router-dom';

const Randing = () => {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.ImgContainer>
        <img src={bear1} alt="Bear 1" />
        <img src={bear2} alt="Bear 2" />
        <img src={bear3} alt="Bear 3" />
      </S.ImgContainer>
      <S.Title>넌 웃을 때가 예쁘더라</S.Title>
      <S.SubTitle>세계 최고의, 스티커 사진 서비스.</S.SubTitle>
      <S.StartBtn onClick={() => navigate('/frame-input')}>시작하기</S.StartBtn>
    </S.Layout>
  );
};

export default Randing;
