import styled from "styled-components";

export const Layout = styled.main`
  padding: 50px 145px 60px 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
`;

export const GoBack = styled.img`
  padding-right: 50px;
  width: 40px;
  height: 40px;
  margin-bottom: auto;
  margin-right: auto;
  cursor: pointer;
`;

export const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.span`
  color: var(--Text-Black, #000);
  text-align: center;
  font-size: 40px;
  font-weight: 600;
`;
export const MainContainer = styled.div`
  display: flex;
  padding-top: 60px;
  /* gap: 160px; */
`;
export const Frame = styled.img`
  padding: 0 70px;
`;
export const QrContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 40px 0 100px;
  gap: 30px;
`;
export const QrTitle = styled.span`
  color: var(--Text-Black, #000);
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;
export const Text1 = styled.p`
  color: var(--Text-Black, #000);
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const UnderTextContainer = styled.p`
  display: flex;
  color: var(--Text-Black, #000);
  justify-content: center;
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const BoldText = styled.p`
  color: var(--Text-Black, #000);
  font-size: 32px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  text-decoration-line: underline;
`;
