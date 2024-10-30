import React, { useState } from "react";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import GoBack from "@src/assets/img/goBack.svg";
import SmallWhiteFrame from "@src/assets/img/smallWhiteFrame.svg";
import SmallBlackFrame from "@src/assets/img/smallBlackFrame.svg";
import SmallDsmFrame from "@src/assets/img/smallDsmFrame.svg";
import SmallFigmaFrame from "@src/assets/img/smallFigmaFrame.svg";
import * as S from "./style";
import Button from "../common/Button";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";

const FindFrame = () => {
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const navigate = useNavigate();

  const FrameDetail = [
    { id: 1, img: SmallWhiteFrame },
    { id: 2, img: SmallBlackFrame },
    { id: 3, img: SmallDsmFrame },
    { id: 4, img: SmallFigmaFrame },
  ];

  const handleFrameClick = (img: string) => {
    setSelectedFrame(img);
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout selectedFrame={!!selectedFrame}>
        <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
        <S.MainContainer>
          <S.Title>원하는 프레임을 선택해주세요!</S.Title>
          <S.FrameLayout>
            {FrameDetail.map((detail) => (
              <S.FrameContainer
                key={detail.id}
                onClick={() => handleFrameClick(detail.img)}
              >
                <img src={detail.img} alt="프레임 사진" />
              </S.FrameContainer>
            ))}
          </S.FrameLayout>
          <S.Btn>
            <Button title="다른 프레임 불러오기" />
          </S.Btn>
        </S.MainContainer>
      </S.Layout>
      {selectedFrame && (
        <div>
          <SideBar imgUrl={selectedFrame} />
        </div>
      )}
    </BackGround>
  );
};

export default FindFrame;
