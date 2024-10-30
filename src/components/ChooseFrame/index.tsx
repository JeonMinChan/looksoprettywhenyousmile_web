import React from "react";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import * as S from "./style";
import FrameContainer from "../common/FrameContainer";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";

const ChooseFrame = () => {
  const navigator = useNavigate();
  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.WhiteLayout>
        <S.Title>프레임을 선택해주세요</S.Title>
        <S.Frame>
          <FrameContainer frameType="흰색 프레임" />
          <FrameContainer frameType="검정색 프레임" />
          <FrameContainer frameType="DSM 프레임" />
          <S.BtnContainer>
            <Button title="AI로 생성하기" />
            <Button
              onClick={() => navigator("/find-frame")}
              title="프레임 찾아보기"
            />
            <Button title="사진 찍기" disabled />
          </S.BtnContainer>
        </S.Frame>
      </S.WhiteLayout>
    </BackGround>
  );
};

export default ChooseFrame;
