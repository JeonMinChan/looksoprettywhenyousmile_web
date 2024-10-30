import React, { useEffect, useState, forwardRef } from 'react';
import html2canvas from 'html2canvas';
import * as S from './style';
import { CameraIcon, DownLoadIcon, ShareIcon } from '@src/assets/svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFramePost } from '@src/queries/ChooseFrame/chooseFrame.query';
import { showToast } from '@src/libs/swal/toast';
import { AxiosError } from 'axios';
import { useImgStore } from '@src/stores/img.store';

interface SideBarProps {
  imgUrl: string;
  setIsSideBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(({ setIsSideBarOpen, setIsShowModal }, ref) => {
  const navigate = useNavigate();
  const imgUrl = useImgStore((state) => state.imgUrl);
  const { pathname } = useLocation();
  const [path, setPath] = useState<string>('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (pathname.includes('frame-input')) {
      setPath('frame-input');
    } else if (pathname.includes('choose')) {
      setPath('choose');
      return;
    } else if (pathname.includes('image-input')) {
      setPath('image-input');
    }
  }, [pathname]);

  function captureSpecificArea(x: number, y: number, width: number, height: number) {
    return html2canvas(document.body, {
      x,
      y,
      width,
      height,
      scale: 2,
    }).then((canvas) => {
      const link = document.createElement('a');
      const imageUrl = canvas.toDataURL('image/png', 1);
      setUrl(imageUrl);
      link.href = imageUrl;
      link.download = 'specific-area.png';
      link.click();
      return imageUrl;
    });
  }

  const createImageFile = async (): Promise<File> => {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const file = new File([blob], 'frame.png', { type: blob.type });
    return file;
  };

  const postFrameMutation = useFramePost();
  const formData = new FormData();

  const handleButtonClick = async () => {
    const imageFile = await createImageFile();
    setIsShowModal(true);
    formData.append('image', imageFile);
    postFrameMutation.mutate(formData.get('image')!, {
      onSuccess: () => {
        showToast('success', '이미지 공유 성공!');
      },
      onError: (error) => {
        showToast('error', (error as AxiosError).message!);
      },
    });
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Img src={imgUrl} alt={imgUrl} />
      <S.ButtonContainer path={path}>
        {path === 'frame-input' && (
          <S.Button
            onClick={() => {
              if (path === 'frame-input') {
                navigate('/photo');
                if (setIsSideBarOpen) {
                  setIsSideBarOpen(false);
                }
              }
            }}
          >
            {path === 'frame-input' && <CameraIcon />}
          </S.Button>
        )}
        {path !== 'choose' && (
          <S.Button
            onClick={async () => {
              if (path === 'frame-input') {
                setIsShowModal(true);
                await handleButtonClick();
              } else if (path !== 'frame-input') {
                if (setIsSideBarOpen) {
                  const capturedUrl = await captureSpecificArea(1530, 207.5, 160, 502.588);
                  navigate('/result', { state: { imageUrl: capturedUrl } });
                  setIsSideBarOpen(false);
                }
              }
            }}
          >
            {path === 'frame-input' ? <ShareIcon /> : <DownLoadIcon />}
          </S.Button>
        )}
        {url && <img src={url} alt="Captured Area" />}
      </S.ButtonContainer>
    </S.Wrapper>
  );
});

export default SideBar;
