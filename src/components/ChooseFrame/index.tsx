import React, { useState } from "react";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import WhiteFrame from "@src/assets/img/whiteFrame.svg";
import BlackFrame from "@src/assets/img/blackFrame.svg";
import DsmFrame from "@src/assets/img/dsmFrame.svg";
import * as S from "./style";

interface Frame {
  id: number;
  title: string;
  img: string;
}

const ChooseFrame = () => {
  const [selectedFrameId, setSelectedFrameId] = useState<number | null>(null);

  const frameDetail: Frame[] = [
    { id: 1, title: "기본 흰색 프레임", img: WhiteFrame },
    { id: 2, title: "기본 검정색 프레임", img: BlackFrame },
    { id: 3, title: "기본 DSM 프레임", img: DsmFrame },
  ];

  const handleFrameClick = (id: number) => {
    setSelectedFrameId(id);
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.WhiteLayout>
          <S.Title>프레임을 선택해주세요</S.Title>
          <S.Frame>
            {frameDetail.map((item) => (
              <S.FrameContainer
                key={item.id}
                isSelected={item.id === selectedFrameId}
                onClick={() => handleFrameClick(item.id)}
              >
                <S.FrameTitle>{item.title}</S.FrameTitle>
                <img src={item.img} alt="Frame" />
              </S.FrameContainer>
            ))}
            <S.BtnContainer>
              <S.Btn>AI로 생성하기</S.Btn>
              <S.Btn>사진 찍기</S.Btn>
            </S.BtnContainer>
          </S.Frame>
        </S.WhiteLayout>
      </S.Layout>
    </BackGround>
  );
};

export default ChooseFrame;
