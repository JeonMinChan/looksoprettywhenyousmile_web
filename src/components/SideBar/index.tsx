import React from 'react';

import * as S from './style';
import { CameraIcon, SaveIcon } from '@src/assets/svg';

interface SideBarProps {
  imgUrl: string;
}

const SideBar = ({ imgUrl }: SideBarProps) => {
  return (
    <S.Wrapper>
      <S.Img src={imgUrl} />
      <S.ButtonContainer>
        <S.Button>
          <CameraIcon />
        </S.Button>
        <S.Button>
          <SaveIcon />
        </S.Button>
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SideBar;
