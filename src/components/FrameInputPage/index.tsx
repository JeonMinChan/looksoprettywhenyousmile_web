import React from 'react';
import * as S from './style';

const FrameInputPage = () => {
  return (
    <S.Container>
      <S.InputContainer>
        <S.InputText>원하는 프레임을 적어주세요</S.InputText>
      </S.InputContainer>
      <S.InputBox>
        <S.Input placeholder="| 산뜻한 바다 느낌 나게 해줘!" />
      </S.InputBox>
    </S.Container>
  );
};

export default FrameInputPage;
