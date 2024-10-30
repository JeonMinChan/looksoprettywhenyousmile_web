import React from "react";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import GoBack from "@src/assets/img/goBack.svg";
import { mokFrame2 } from "@src/assets/images";
import { QRCodeSVG } from "qrcode.react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const Result = () => {
  const navigate = useNavigate();
  const qrData = "https://www.naver.com";
  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
        <S.MainLayout>
          <S.Title>프레임을 선택해주세요</S.Title>
          <S.MainContainer>
            <S.Frame src={mokFrame2} alt="프레임" />
            <S.QrContainer>
              <S.QrTitle>다운로드 QR코드</S.QrTitle>
              <QRCodeSVG value={qrData} width={200} height={200} />
              <S.TextContainer>
                <S.Text1>사진이 자동으로 다운로드되지 않으면</S.Text1>
                <S.UnderTextContainer>
                  <S.BoldText>여기</S.BoldText>
                  <>를 눌러주세요.</>
                </S.UnderTextContainer>
              </S.TextContainer>
            </S.QrContainer>
          </S.MainContainer>
        </S.MainLayout>
      </S.Layout>
    </BackGround>
  );
};

export default Result;
