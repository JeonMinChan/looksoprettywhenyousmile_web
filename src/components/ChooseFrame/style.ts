import styled from "styled-components";

interface FrameContainerProps {
  isSelected: boolean;
}

export const Layout = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;
export const WhiteLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 73px 132px;
  border-radius: 30px;
`;
export const Title = styled.span`
  color: #000;
  font-size: 50px;
  font-weight: 600;
`;
export const Frame = styled.div`
  display: flex;
  padding-top: 50px;
  gap: 20px;
`;

export const FrameContainer = styled.div<FrameContainerProps>`
  padding: 20px;
  gap: 20px;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${({ isSelected }) =>
    isSelected ? "#EFEFEF" : "transparent"};
`;
export const FrameTitle = styled.main`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  gap: 50px;
`;
export const Btn = styled.button`
  width: 200px;
  height: 60px;
  padding: 20px 30px;
  gap: 10px;
  border-radius: 10px;
  background-color: #ff7a1b;
  border: none;
  color: var(--Text-Black, #000);
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;
