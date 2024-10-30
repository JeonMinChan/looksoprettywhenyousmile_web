import React from "react";
import GoBack from "@src/assets/img/goBack.svg";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { mokFrame2 } from "@src/assets/images";
import { DownLoadIcon } from "@src/assets/svg";

const DecoratorFrame = () => {
  const navigate = useNavigate();
  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
      <S.Layout>
        <S.MainContainer>
          <img src={mokFrame2} />
        </S.MainContainer>
      </S.Layout>
      <S.SlideContainer>
        <img src={mokFrame2} width={160} height={503} />
        <S.Orange>
          <DownLoadIcon />
        </S.Orange>
      </S.SlideContainer>
    </BackGround>
  );
};

export default DecoratorFrame;
