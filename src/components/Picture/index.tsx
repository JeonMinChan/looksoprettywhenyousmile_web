import React from "react";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import GoBack from "@src/assets/img/goBack.svg";
import WhiteCamara from "@src/assets/img/whiteCamara.svg";
import * as S from "./style";
import Webcam from "react-webcam";

const Picture: React.FC = () => {
  return (
    <S.Layout>
      <BackGround backgroundImgUrl={BackGRoundImg}>
        <S.Container>
          <S.GoBack src={GoBack} alt="뒤로가기" />
          <S.Camera>
            <Webcam width={1280} height={880} mirrored={true} />
          </S.Camera>
          <S.PictureDetailContainer>
            <S.PictureNum>1/8</S.PictureNum>
            <S.WhiteCamara src={WhiteCamara} alt="하얀색카메라" />
          </S.PictureDetailContainer>
        </S.Container>
      </BackGround>
    </S.Layout>
  );
};

export default Picture;
