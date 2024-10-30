import React, { useState, useEffect } from "react";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import GoBack from "@src/assets/img/goBack.svg";
import * as S from "./style";
import Button from "../common/Button";
import SideBar from "../SideBar";
import { useNavigate } from "react-router-dom";
import { useGetRandomFrame } from "@src/queries/ChooseFrame/chooseFrame.query";

const FindFrame = () => {
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);
  const navigate = useNavigate();

  const { data: sharedFrame, refetch } = useGetRandomFrame(shouldFetch);

  useEffect(() => {
    if (shouldFetch) {
      refetch();
      setShouldFetch(false);
    }
  }, [shouldFetch, refetch]);

  const handleFrameClick = (img: string) => {
    setSelectedFrame(img);
  };

  const handleReloadFrames = () => {
    setShouldFetch(true);
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout selectedFrame={!!selectedFrame}>
        <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
        <S.MainContainer>
          <S.Title>원하는 프레임을 선택해주세요!</S.Title>
          <S.FrameLayout>
            {sharedFrame?.frames.map((detail) => (
              <S.FrameContainer key={detail} onClick={() => handleFrameClick(detail)}>
                <img src={detail} alt="프레임 사진" style={{ width: 120 }} />
              </S.FrameContainer>
            ))}
          </S.FrameLayout>
          <S.Btn>
            <Button title="다른 프레임 불러오기" onClick={handleReloadFrames} />
          </S.Btn>
        </S.MainContainer>
      </S.Layout>
      {selectedFrame && (
        <div>
          <SideBar imgUrl={selectedFrame} setIsShowModal={() => false} />
        </div>
      )}
    </BackGround>
  );
};

export default FindFrame;
