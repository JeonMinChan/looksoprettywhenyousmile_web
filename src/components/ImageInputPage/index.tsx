import React from "react";
import * as S from "./style";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import { mokFrame4 } from "@src/assets/images";
import { pictureStore } from "@src/stores/Picture/picture.stores";

const ImageInput = () => {
  const pictureData = pictureStore((state) => state.formData);
  const picture: React.JSX.Element[] = [];
  for (let [key, value] of pictureData.entries()) {
    if (value instanceof Blob) {
      const imageUrl = URL.createObjectURL(value);
      picture.push(<img key={key} src={imageUrl} alt={key} />);
    }
  }

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.Container>
          <S.Title>4장의 사진을 선택해주세요.</S.Title>
          <S.ImageContainer>{picture}</S.ImageContainer>
        </S.Container>
        <S.FrameContainer>
          <img src={mokFrame4} alt="피그마 프레임" />
        </S.FrameContainer>
      </S.Layout>
    </BackGround>
  );
};

export default ImageInput;
