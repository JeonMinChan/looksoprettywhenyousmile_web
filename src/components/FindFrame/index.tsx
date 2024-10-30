import React, { useState } from 'react';
import BackGround from '../common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import GoBack from '@src/assets/img/goBack.svg';
import { mokFrame1, mokFrame2, mokFrame3, mokFrame4 } from '@src/assets/images';
import * as S from './style';
import SideBar from '../SideBar';
import { useNavigate } from 'react-router-dom';

const FindFrame = () => {
  const [selectedFrame, setSelectedFrame] = useState<string | null>(null);
  const navigate = useNavigate();

  const FrameDetail = [
    { id: 1, img: mokFrame1 },
    { id: 2, img: mokFrame2 },
    { id: 3, img: mokFrame3 },
    { id: 4, img: mokFrame4 },
  ];

  const handleFrameClick = (img: string) => {
    setSelectedFrame(img);
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
        <S.MainContainer>
          <S.Title>원하는 프레임을 선택해주세요!</S.Title>
          <S.FrameLayout>
            {FrameDetail.map((detail) => (
              <S.FrameContainer key={detail.id} onClick={() => handleFrameClick(detail.img)}>
                <S.FrameImg src={detail.img} alt="프레임 사진" />
              </S.FrameContainer>
            ))}
          </S.FrameLayout>
          <S.Btn>더 찾아보기</S.Btn>
        </S.MainContainer>
      </S.Layout>
      <S.SlideContainer show={Boolean(selectedFrame)}>
        {selectedFrame && (
          <SideBar
            imgUrl={selectedFrame}
            setIsShowModal={() => false}
            setIsSideBarOpen={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        )}
      </S.SlideContainer>
    </BackGround>
  );
};

export default FindFrame;
