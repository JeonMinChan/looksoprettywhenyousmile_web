import React, { useEffect, useState } from 'react';
import * as S from './style';
import { CheckIcon } from '@src/assets/svg';

interface ToastProps {
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShareToast = ({ setIsShowModal }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setIsShowModal(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <S.Wrapper isVisible={isVisible}>
      <CheckIcon />
      <S.Text>프레임이 공유되었어요!</S.Text>
    </S.Wrapper>
  );
};

export default ShareToast;
