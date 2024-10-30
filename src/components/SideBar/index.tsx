import React, { useEffect, useState, forwardRef } from 'react';

import * as S from './style';
import { CameraIcon, DownLoadIcon, EditIcon, ShareIcon } from '@src/assets/svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { mokFrame4 } from '@src/assets/images';

interface SideBarProps {
  imgUrl: string;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(({ imgUrl, setIsSideBarOpen }, ref) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [path, setPath] = useState<string>('');

  useEffect(() => {
    if (pathname.includes('frame-input')) {
      setPath('frame-input');
    } else if (pathname.includes('choose')) {
      setPath('choose');
    } else if (pathname.includes('/image-input')) {
      setPath('image-input');
    }
  }, [pathname]);

  return (
    <S.Wrapper ref={ref}>
      <S.Img src={mokFrame4} alt={imgUrl} />
      <S.ButtonContainer path={path}>
        <S.Button
          onClick={() => {
            if (path === 'frame-input') {
              navigate('/photo');
              setIsSideBarOpen(false);
            }
          }}
        >
          {path === 'frame-input' ? <CameraIcon /> : <EditIcon />}
        </S.Button>
        {path !== 'choose' && <S.Button>{path === 'frame-input' ? <ShareIcon /> : <DownLoadIcon />}</S.Button>}
      </S.ButtonContainer>
    </S.Wrapper>
  );
});

export default SideBar;
