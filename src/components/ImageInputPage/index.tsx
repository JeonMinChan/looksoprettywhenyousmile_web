import React, { useEffect, useState } from 'react';
import * as S from './style';
import BackGround from '../common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import { pictureStore } from '@src/stores/Picture/picture.stores';

interface ImageInputProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarRef: React.RefObject<HTMLDivElement>;
}

const ImageInput = ({ setIsSideBarOpen, sideBarRef }: ImageInputProps) => {
  const [copiedImages, setCopiedImages] = useState<{ src: string; top: number; left: number; originalIndex: number }[]>(
    []
  );
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [availablePositions, setAvailablePositions] = useState<{ index: number; top: number; left: number }[]>([]);

  const formData = pictureStore((state) => state.formData);
  const formDataObject = Object.fromEntries(formData.entries());

  useEffect(() => {
    setIsSideBarOpen(true);
  }, [setIsSideBarOpen]);

  const handleImageClick = (index: number, src: string) => {
    setSelectedIndexes((prevSelectedIndexes) => {
      const isAlreadySelected = prevSelectedIndexes.includes(index);

      if (isAlreadySelected) {
        // 선택 해제 로직
        setCopiedImages((prevCopiedImages) => {
          const removedImage = prevCopiedImages.find((image) => image.originalIndex === index);
          if (removedImage) {
            setAvailablePositions((positions) => [
              ...positions,
              { index, top: removedImage.top, left: removedImage.left },
            ]);
          }
          return prevCopiedImages.filter((image) => image.originalIndex !== index);
        });
        return prevSelectedIndexes.filter((i) => i !== index);
      }

      if (prevSelectedIndexes.length < 4) {
        // 선택 추가 로직
        const newPosition = { src, top: 0, left: 0, originalIndex: index };

        if (availablePositions.length > 0) {
          const position = availablePositions[0];
          newPosition.top = position.top;
          newPosition.left = position.left;
          setAvailablePositions((positions) => positions.slice(1));
        } else if (sideBarRef.current) {
          const sidebarRect = sideBarRef.current.getBoundingClientRect();
          newPosition.top = sidebarRect.top + 65 + prevSelectedIndexes.length * 99.5;
          newPosition.left = sidebarRect.left + 46.5;
        }

        setCopiedImages((images) => [...images, newPosition]);
        return [...prevSelectedIndexes, index];
      }

      return prevSelectedIndexes;
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
            cursor: 'pointer',
            outline: selectedIndexes.includes(index) ? '0.4375rem solid #777' : 'none',
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
                onClick={() => handleImageClick(image.originalIndex, image.src)}
                style={{
                  position: 'absolute',
                  top: image.top,
                  left: image.left,
                  width: '7.9375rem',
                  height: '5.5rem',
                  cursor: 'pointer',
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
