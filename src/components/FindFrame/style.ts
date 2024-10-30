import styled from "styled-components";

export const Layout = styled.main<{ selectedFrame: boolean }>`
  padding: 50px 145px 100px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.selectedFrame &&
    `
    transform: translateX(0);
  `}
`;

export const GoBack = styled.img`
  padding-right: 50px;
  margin-bottom: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  gap: 30px;
  justify-content: center;
  transition: all 0.3s ease-in-out;
`;

export const Title = styled.span`
  color: var(--Text-Black, #000);
  text-align: center;
  font-size: 50px;
  font-weight: 600;
`;

export const FrameLayout = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const FrameContainer = styled.div`
  width: fit-content;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #efefef;
  }
`;

export const Btn = styled.div`
  display: flex;
  justify-content: center;
`;
