import styled from "styled-components";

export const Layout = styled.main`
  padding: 50px 145px 60px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  position: relative;
  transition: all 0.3s ease-in-out;
`;

export const GoBack = styled.img`
  padding-right: 50px;
  width: 40px;
  height: 40px;
  margin-bottom: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.span`
  color: var(--Text-Black, #000);
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;

export const FrameLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

export const FrameImg = styled.img`
  width: 100px;
  height: 318px;
  background: url(<path-to-image>) lightgray 50% / cover no-repeat;
  box-shadow: 3px 4px 10px 3px rgba(0, 0, 0, 0.25);
`;

export const FrameContainer = styled.div`
  width: fit-content;
  padding: 20px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #efefef;
  }
`;

export const Btn = styled.button`
  cursor: pointer;
  padding: 20px;
  width: fit-content;
  font-size: 20px;
  border-radius: 10px;
  background-color: #ff7a1b;
  color: var(--Text-Black, #000);
  font-weight: 600;
`;

export const SlideContainer = styled.div<{ show: boolean }>`
  position: absolute;
  right: 0;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  z-index: 10;
`;
