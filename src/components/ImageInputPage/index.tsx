import React, { useRef, useState } from "react";
import * as S from "./style";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import { mokFrame4 } from "@src/assets/images";
import { DUMMY_PHOTO } from "@src/constants/Picture/picture.constants";
import SideBar from "../SideBar";

const ImageInput = () => {
  const [copiedImages, setCopiedImages] = useState<{ src: string; top: number; left: number }[]>([]);
  const idRef = useRef<number>(0);

  const handleImageClick = (src: string, idx: number, imageIdx: number) => {
    const newPosition = {
      src,
      top: 71,
      left: 1446 + imageIdx + idx,
    };
    setCopiedImages((prev) => [...prev, newPosition]);
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.Container>
          <S.Title>4장의 사진을 선택해주세요.</S.Title>
          <S.ImageContainer>
            {DUMMY_PHOTO.map((item) => (
              <S.Picture
                key={item.id}
                src={item.img}
                onClick={() => handleImageClick(item.img, idRef.current + 1, item.id)}
                style={{ cursor: "pointer" }}
              />
            ))}
            {copiedImages.map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={`복사본-${index}`}
                style={{
                  position: "absolute",
                  top: image.top,
                  left: image.left,
                  width: "165px",
                  height: "111px",
                  cursor: "pointer",
                  zIndex: 5,
                }}
              />
            ))}
          </S.ImageContainer>
        </S.Container>
        <SideBar imgUrl={mokFrame4} />
      </S.Layout>
    </BackGround>
  );
};

export default ImageInput;
