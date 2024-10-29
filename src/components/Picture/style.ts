import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const GoBack = styled.img`
  padding: 100px 0 0 100px;
  margin-bottom: auto;
  margin-right: auto;
`;

export const Camera = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  filter: brightness(1.1) contrast(1.05) saturate(1.2);
`;

export const PictureDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 76px 0 20px;
`;

export const PictureNum = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;

export const WhiteCamara = styled.img`
  width: 100px;
  height: 100px;
`;
