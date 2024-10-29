import styled from "styled-components";

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
  text-align: center;
`;
export const Frame = styled.div`
  display: flex;
  padding-top: 50px;
  gap: 20px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
  gap: 50px;
`;