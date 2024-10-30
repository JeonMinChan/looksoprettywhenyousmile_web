import React, { useEffect, useState } from "react";
import * as S from "./style";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import { completePictureStore, pictureStore } from "@src/stores/Picture/picture.stores";

interface ImageInputProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarRef: React.RefObject<HTMLDivElement>;
}

const ImageInput = ({ setIsSideBarOpen, sideBarRef }: ImageInputProps) => {
  const [copiedImages, setCopiedImages] = useState<{ src: string; top: number; left: number }[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [availablePositions, setAvailablePositions] = useState<{ index: number; top: number; left: number }[]>([]);
  const formData = pictureStore((state) => state.formData);
  const formDataObject = Object.fromEntries(formData.entries());
  const setPictureStore = completePictureStore((state) => state.setPicture);

  useEffect(() => {
    setIsSideBarOpen(true);
  }, [setIsSideBarOpen]);

  const handleImageClick = (index: number, src: string) => {
    setSelectedIndexes((prev) => {
      const isAlreadySelected = prev.includes(index);

      if (isAlreadySelected) {
        const removedImagePosition = copiedImages.find((image) => image.src === src);

        if (removedImagePosition) {
          setAvailablePositions((positions) => [
            ...positions,
            { index, top: removedImagePosition.top, left: removedImagePosition.left },
          ]);
        }

        setCopiedImages((images) => images.filter((image) => image.src !== src));
        return prev.filter((i) => i !== index);
      }

      if (prev.length < 4) {
        const newPosition = { src, top: 0, left: 0 };

        if (availablePositions.length > 0) {
          const position = availablePositions[0];
          newPosition.top = position.top;
          newPosition.left = position.left;

          setAvailablePositions((positions) => positions.slice(1));
        } else {
          if (sideBarRef.current) {
            const sidebarRect = sideBarRef.current.getBoundingClientRect();
            newPosition.top = sidebarRect.top + 65 + prev.length * 99.5;
            newPosition.left = sidebarRect.left + 46.5;
          }
        }

        setCopiedImages((images) => [...images, newPosition]);
        setPictureStore(copiedImages);
        return [...prev, index];
      }

      return prev;
    });
  };

  const pictures = Object.entries(formDataObject).map(([key, value], index) => {
    if (value instanceof Blob) {
      const imageUrl = URL.createObjectURL(value);
      return (
        <S.Picture
          key={key}
          src={imageUrl}
          onClick={() => handleImageClick(index, imageUrl)}
          style={{
            cursor: "pointer",
            outline: selectedIndexes.includes(index) ? "0.4375rem solid #777" : "none",
          }}
        />
      );
    }
    return null;
  });

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.Container>
          <S.Title>4장의 사진을 선택해주세요!</S.Title>
          <S.ImageContainer>{pictures.slice(0, 4)}</S.ImageContainer>

          <S.ImageContainer>
            {pictures.slice(4, 8)}
            {copiedImages.map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={`복사본-${index}`}
                style={{
                  position: "absolute",
                  top: image.top,
                  left: image.left,
                  width: "7.9375rem",
                  height: "5.5rem",
                  cursor: "pointer",
                  zIndex: 5,
                }}
              />
            ))}
          </S.ImageContainer>
        </S.Container>
      </S.Layout>
    </BackGround>
  );
};

export default ImageInput;
