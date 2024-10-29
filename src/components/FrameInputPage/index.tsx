import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useDebounce } from '@src/hooks';
import { ArrowIcon, PreviousIcon } from '@src/assets/svg';
import { useNavigate } from 'react-router-dom';
import mokFrame1 from '@src/assets/images/mokFrame1.png';
import mokFrame2 from '@src/assets/images/mokFrame2.png';
import mokFrame3 from '@src/assets/images/mokFrame3.png';
import mokFrame4 from '@src/assets/images/mokFrame4.png';

interface FrameInputProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FrameInputPage = ({ setIsSideBarOpen }: FrameInputProps) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showFrames, setShowFrames] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(false);
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null);

  const debouncedKeyword = useDebounce(keyword, 1000);

  const frames = [mokFrame1, mokFrame2, mokFrame3, mokFrame4]; //추후 api 연결 시 바뀔 수 있게끔 제작

  useEffect(() => {
    setIsEmpty(keyword === '');
  }, [debouncedKeyword]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClicked) {
      setShowFrames(false);
      timer = setTimeout(() => {
        setShowFrames(true);
        setIsClicked(false);
        setIsFirstRender(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isClicked]);

  const handleImageClick = (index: number) => {
    setSelectedFrame(index);
    setIsSideBarOpen(true);
  };

  return (
    <S.Container>
      <S.InputContainer isClicked={isClicked} isFirstRender={isFirstRender}>
        <S.InputText>원하는 프레임을 적어주세요</S.InputText>
        <S.InputBox>
          <S.Input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            placeholder="| 산뜻한 바다 느낌 나게 해줘!"
          />
          <S.IconButton
            isEmpty={isEmpty}
            onClick={() => {
              if (isEmpty) {
                setIsClicked(false);
              } else {
                setIsClicked(true);
                setIsFirstRender(true);
              }
            }}
          >
            <ArrowIcon />
          </S.IconButton>
        </S.InputBox>
      </S.InputContainer>
      {isClicked && <S.Spinner />}
      <S.PreviousButton onClick={() => navigate(-1)}>
        <PreviousIcon />
      </S.PreviousButton>
      {showFrames && (
        <S.FrameBox>
          {frames.map((frame, index) => (
            <img
              key={index}
              src={frame}
              alt={`Frame ${index + 1}`}
              onClick={() => handleImageClick(index)}
              className={selectedFrame === index ? 'selected' : ''}
            />
          ))}
        </S.FrameBox>
      )}
    </S.Container>
  );
};

export default FrameInputPage;
