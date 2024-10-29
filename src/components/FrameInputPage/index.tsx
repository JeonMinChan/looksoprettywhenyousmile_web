import React, { useEffect, useState } from 'react';
import * as S from './style';
import { useDebounce } from '@src/hooks';
import { ArrowIcon, PreviousIcon } from '@src/assets/svg';
import { useNavigate } from 'react-router-dom';

const FrameInputPage = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const debouncedKeyword = useDebounce(keyword, 1000);

  useEffect(() => {
    if (keyword !== '') {
      setIsEmpty(false);
      return;
    } else if (keyword === '') {
      setIsEmpty(true);
      return;
    }
  }, [debouncedKeyword]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isClicked) {
      timer = setTimeout(() => {
        setIsClicked(false);
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [isClicked]);

  return (
    <S.Container>
      <S.InputContainer isClicked={isClicked}>
        <S.InputText>원하는 프레임을 적어주세요</S.InputText>
        <S.InputBox>
          <S.Input
            onChange={(e) => setKeyword(e.target.value)}
            value={keyword}
            placeholder="| 산뜻한 바다 느낌 나게 해줘!"
          />
          <S.IconButton isEmpty={isEmpty} onClick={() => (isEmpty ? setIsClicked(false) : setIsClicked(true))}>
            <ArrowIcon />
          </S.IconButton>
        </S.InputBox>
      </S.InputContainer>
      {isClicked && <S.Spinner />}
      <S.PreviousButton onClick={() => navigate(-1)}>
        <PreviousIcon />
      </S.PreviousButton>
    </S.Container>
  );
};

export default FrameInputPage;
