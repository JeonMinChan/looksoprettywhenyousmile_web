import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useDebounce } from '@src/hooks';
import { ArrowIcon, PreviousIcon } from '@src/assets/svg';
import { useNavigate } from 'react-router-dom';
import { mokFrame1, mokFrame2, mokFrame3, mokFrame4 } from '@src/assets/images';
import CONFIG from '@src/config/config.json';
import axios from 'axios';

interface FrameInputProps {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setImgUrl: React.Dispatch<React.SetStateAction<string>>;
}

const FrameInputPage = ({ setIsSideBarOpen }: FrameInputProps) => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [showFrames, setShowFrames] = useState<boolean>(false);
  const [isFirstRender, setIsFirstRender] = useState<boolean>(false);
  const [selectedFrame, setSelectedFrame] = useState<number | null>(null);
  const [aiImg, setAIImg] = useState<string[]>([]);

  const debouncedKeyword = useDebounce(keyword, 1000);

  const frames = [mokFrame1, mokFrame2, mokFrame3, mokFrame4]; //추후 api 연결 시 바뀔 수 있게끔 제작

  useEffect(() => {
    setIsEmpty(keyword === '');
  }, [debouncedKeyword]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClicked) {
      setShowFrames(false);
      timer = setTimeout(() => {}, 5000);
    }
    return () => clearTimeout(timer);
  }, [isClicked]);

  const handleImageClick = (index: number) => {
    setSelectedFrame(index);
    setIsSideBarOpen(true);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${CONFIG.nightServer}/frame/sea`, {
        headers: {
          'ngrok-skip-browser-warning': 'any-value',
        },
      });
      setAIImg(response.data.frames);
    } catch (err) {
    } finally {
      setShowFrames(true);
      setIsClicked(false);
      setIsFirstRender(false);
    }
  };

  // const postConvertedImage = async () => {
  //   try {
  //     const body = {
  //       prompt: debouncedKeyword,
  //       image:
  //         'https://dsm-s3-bucket-info.s3.ap-northeast-2.amazonaws.com/daybreak312/pretty-49e70dc8-26e4-4a74-ac31-15cb93d4a353',
  //       steps: 20,
  //       seed: 46588,
  //       denoise: 0.75,
  //       scheduler: 'simple',
  //       sampler_name: 'euler',
  //       base64: false,
  //     };

  //     const requests = Array(4)
  //       .fill(null)
  //       .map(() =>
  //         fetch(${CONFIG.AIURL}, {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'x-api-key': ${CONFIG.AIKEY},
  //           } as HeadersInit,
  //           body: JSON.stringify(body),
  //         }).then((response) => response.blob().then((blob) => URL.createObjectURL(blob)))
  //       );

  //     const blobImageUrls = await Promise.all(requests);
  //     setAIImg(blobImageUrls);
  //   } catch (error) {
  //     throw error;
  //   } finally {
  //     setShowFrames(true);
  //     setIsClicked(false);
  //     setIsFirstRender(false);
  //   }
  // };

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
                // postConvertedImage();

                fetchData();
              }
            }}
          >
            <ArrowIcon />
          </S.IconButton>
        </S.InputBox>
      </S.InputContainer>
      {isClicked && <S.Spinner />}
      <S.PreviousButton
        onClick={() => {
          navigate('/frame-choose');
          setIsSideBarOpen(false);
        }}
      >
        <PreviousIcon />
      </S.PreviousButton>
      {showFrames && (
        <S.FrameBox>
          {(debouncedKeyword.includes('바다') || debouncedKeyword.includes('시원') ? aiImg : frames).map(
            (frame, index) => (
              <S.ImgBox
                className={selectedFrame === index ? 'selected' : ''}
                onClick={() => {
                  handleImageClick(index);
                  // setImgUrl(frame);
                }}
                key={index}
              >
                <S.Img key={index} src={frame} alt={`Frame ${index + 1}`} />
              </S.ImgBox>
            )
          )}
        </S.FrameBox>
      )}
    </S.Container>
  );
};

export default FrameInputPage;
