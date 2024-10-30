import BackGround from '../common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import GoBack from '@src/assets/img/goBack.svg';
import * as S from './style';
import SideBar from '../SideBar';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useGetRandomFrame } from '@src/queries/ChooseFrame/chooseFrame.query';

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
      <S.Layout>
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
          <S.Btn onClick={handleReloadFrames}>더 찾아보기</S.Btn>
        </S.MainContainer>
      </S.Layout>
      {selectedFrame && (
        <div>
          <SideBar imgUrl={selectedFrame} setIsShowModal={() => false} />
        </div>
      )}
      <S.SlideContainer show={Boolean(selectedFrame)}>
        {selectedFrame && <SideBar imgUrl={selectedFrame} setIsShowModal={() => false} />}
      </S.SlideContainer>
    </BackGround>
  );
};

export default FindFrame;
