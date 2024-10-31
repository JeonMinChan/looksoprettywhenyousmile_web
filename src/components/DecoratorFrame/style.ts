import styled from "styled-components";

export const GoBack = styled.img`
  position: fixed;
  top: 60px;
  left: 60px;
  width: 40px;
  height: 40px;
  z-index: 1;
  cursor: pointer;
`;

export const Layout = styled.main`
  position: relative;
  overflow: hidden;
  width: 1000px;
  height: 720px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 42px 0;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Frame = styled.img`
  position: relative;
  cursor: pointer;
  z-index: 100;
  cursor: move;
`;

export const UploadedImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  cursor: move;
  z-index: 105;
`;

export const SlideContainer = styled.div`
  position: absolute;
  width: 220px;
  height: 720px;
  right: 80px;
  background-color: white;
  transition: transform 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const Orange = styled.div`
  border-radius: 50%;
  background-color: #ff7a1b;
  padding: 17px;
  cursor: pointer;
`;
