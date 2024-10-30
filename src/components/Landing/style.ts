import styled from "styled-components";

export const Layout = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }
`;

export const Title = styled.span`
  position: absolute;
  z-index: 2;
  top: 30%;
  color: var(--Text-White, #eee);
  text-align: center;
  text-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
  font-family: Pretendard;
  font-size: 128px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const SubTitle = styled.span`
  position: absolute;
  z-index: 2;
  top: 50%;
  color: var(--Text-White, #eee);
  text-align: center;
  text-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);
  font-family: Pretendard;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StartBtn = styled.button`
  position: absolute;
  top: 70%;
  z-index: 2;
  border-radius: 20px;
  background-color: #fe6b01;
  cursor: pointer;
  font-size: 30px;
  font-weight: 600;
`;
