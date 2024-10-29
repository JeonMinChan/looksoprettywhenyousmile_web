import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const flashAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
`;

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const GoBack = styled.img`
  padding: 100px 0 0 100px;
  margin-bottom: auto;
  margin-right: auto;
`;

export const Camera = styled.div<{ flash: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ flash }) =>
    flash &&
    css`
      animation: ${flashAnimation} 0.5s ease;
    `}
  filter: brightness(1.1) contrast(1.05) saturate(1.2);
`;

export const Timer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 100px;
  color: white;
  font-weight: bold;
  z-index: 1;
`;

export const PictureDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 76px 0 20px;
  gap: 50px;
`;

export const PictureNum = styled.span`
  font-size: 64px;
  font-weight: 300;
`;

export const WhiteCamara = styled.img`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
