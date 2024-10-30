import React, { useCallback, useRef, useState, useEffect } from 'react';
import BackGround from '../common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import GoBack from '@src/assets/img/goBack.svg';
import WhiteCamara from '@src/assets/img/whiteCamara.svg';
import * as S from './style';
import Webcam from 'react-webcam';
import { pictureStore } from '@src/stores/Picture/picture.stores';
import { useNavigate } from 'react-router-dom';

const Picture = () => {
  const webcamRef = useRef<Webcam>(null);
  const [isTakingPictures, setIsTakingPictures] = useState(false);
  const [pictureCount, setPictureCount] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [flash, setFlash] = useState(false);
  // const formDataRef = useRef(new FormData());

  const setImageStore = pictureStore((state) => state.addPhoto);
  const navigate = useNavigate();

  const capturePhoto = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) {
        const blob = dataURLtoBlob(imageSrc);
        setImageStore(blob, pictureCount);
        setPictureCount((prevCount) => prevCount + 1);
      }
    }
    setFlash(true);
    setTimeout(() => setFlash(false), 500);
  }, [pictureCount]);

  const startTakingPictures = () => {
    setIsTakingPictures(true);
    setPictureCount(0);
    setCountdown(0);
  };

  useEffect(() => {
    let countdownTimer: NodeJS.Timeout;
    if (isTakingPictures && pictureCount < 8) {
      if (countdown === null) {
        setCountdown(0);
      } else if (countdown > 0) {
        countdownTimer = setTimeout(() => setCountdown((prev) => (prev as number) - 1), 1000);
      } else if (countdown === 0) {
        capturePhoto();
        setCountdown(0);
      }
    } else if (pictureCount === 8) {
      setIsTakingPictures(false);
      setCountdown(null);
      navigate('/image-input');
    }

    return () => clearTimeout(countdownTimer);
  }, [isTakingPictures, pictureCount, countdown, capturePhoto]);

  const dataURLtoBlob = (dataURL: string) => {
    const byteString = atob(dataURL.split(',')[1]);
    const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  return (
    <S.Layout>
      <BackGround backgroundImgUrl={BackGRoundImg}>
        <S.Container>
          <S.GoBack src={GoBack} alt="뒤로가기" onClick={() => navigate('/frame-input')} />
          <S.Camera flash={flash}>
            <Webcam ref={webcamRef} width={1280} height={880} mirrored={true} screenshotFormat="image/png" />
            {countdown !== null && <S.Timer>{countdown}</S.Timer>}
          </S.Camera>
          <S.PictureDetailContainer>
            <S.PictureNum>{pictureCount}/8</S.PictureNum>
            <S.WhiteCamara src={WhiteCamara} alt="하얀색카메라" onClick={startTakingPictures} />
          </S.PictureDetailContainer>
        </S.Container>
      </BackGround>
    </S.Layout>
  );
};

export default Picture;
