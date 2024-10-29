import styled, { css } from 'styled-components';

interface BackGroundProps {
  backgroundImgUrl: string;
}

export const BackGround = styled.div<BackGroundProps>`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;

  ${({ backgroundImgUrl }) => css`
    background-image: url(${backgroundImgUrl});
  `}
  display: flex;
  justify-content: center;
  align-items: center;
`;
