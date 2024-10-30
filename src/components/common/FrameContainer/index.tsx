import React from 'react';
import * as S from './style';
import WhiteFrame from '@src/assets/img/whiteFrame.svg';
import BlackFrame from '@src/assets/img/blackFrame.svg';
import DsmFrame from '@src/assets/img/dsmFrame.svg';

interface FrameProps {
  frameType: string;
  isSelected: boolean;
  onSelect: () => void;
  onFrameChange: () => void;
}

const FrameContainer = ({ frameType, isSelected, onSelect, onFrameChange }: FrameProps) => {
  const FrameDetail = [
    { id: 1, title: '흰색 프레임', img: WhiteFrame },
    { id: 2, title: '검정색 프레임', img: BlackFrame },
    { id: 3, title: 'DSM 프레임', img: DsmFrame },
  ];

  const selectedFrame = FrameDetail.find((frame) => frame.title === frameType);

  return (
    <S.Layout
      isActive={isSelected}
      onClick={() => {
        onSelect();
        onFrameChange();
      }}
    >
      {selectedFrame ? (
        <>
          <S.Title>{selectedFrame.title}</S.Title>
          <img src={selectedFrame.img} alt={selectedFrame.title} />
        </>
      ) : (
        <S.Title>선택한 프레임이 없습니다.</S.Title>
      )}
    </S.Layout>
  );
};

export default FrameContainer;
