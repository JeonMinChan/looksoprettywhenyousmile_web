import React, { useEffect, useState } from 'react';
import * as S from './style';
import BackGround from '../common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import { DUMMY_PHOTO } from '@src/constants/Picture/picture.constants';

interface ImageInputProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideBarRef: React.RefObject<HTMLDivElement>;
}

const ImageInput = ({ setIsSideBarOpen, sideBarRef }: ImageInputProps) => {
  const [copiedImages, setCopiedImages] = useState<{ src: string; top: number; left: number }[]>([]);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [canceledPositions, setCanceledPositions] = useState<number[]>([]);

  useEffect(() => {
    setIsSideBarOpen(true);
  }, []);

  const handleImageClick = (index: number, src: string) => {
    setSelectedIndexes((prev) => {
      if (prev.includes(index)) {
        setCopiedImages((images) => {
          const newImages = images.filter((image) => image.src !== src);
          setCanceledPositions((positions) => [...positions, images.findIndex((image) => image.src === src)]);
          return newImages;
        });
        return prev.filter((i) => i !== index);
      }

      if (prev.length < 4) {
        const canceledPosition = canceledPositions.shift();
        const newPosition = canceledPosition !== undefined ? canceledPosition : prev.length;

        if (sideBarRef.current) {
          const sidebarRect = sideBarRef.current.getBoundingClientRect();
          const position = {
            src,
            top: sidebarRect.top + 65 + newPosition * 99.5,
            left: sidebarRect.left + 46.5,
          };
          setCopiedImages((images) => {
            const updatedImages = [...images];
            updatedImages[newPosition] = position;
            return updatedImages;
          });
        }
        return [...prev, index];
      }
      return prev;
    });
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.Container>
          <S.Title>4장의 사진을 선택해주세요!</S.Title>
          <S.ImageContainer>
            {DUMMY_PHOTO.slice(0, 4).map((item, index) => (
              <S.Picture
                key={item.id}
                src={item.img}
                onClick={() => handleImageClick(index, item.img)}
                style={{
                  cursor: 'pointer',
                  outline: selectedIndexes.includes(index) ? '0.4375rem solid #777' : 'none',
                }}
              />
            ))}
          </S.ImageContainer>

          <S.ImageContainer>
            {DUMMY_PHOTO.slice(4, 8).map((item, index) => (
              <S.Picture
                key={item.id}
                src={item.img}
                onClick={() => handleImageClick(index + 4, item.img)}
                style={{
                  cursor: 'pointer',
                  outline: selectedIndexes.includes(index + 4) ? '0.4375rem solid #777' : 'none',
                }}
              />
            ))}
            {copiedImages.map((image, index) => (
              <img
                key={`${image.src}-${index}`}
                src={image.src}
                alt={`복사본-${index}`}
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
