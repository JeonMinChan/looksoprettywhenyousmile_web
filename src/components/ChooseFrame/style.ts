import styled from 'styled-components';

export const MainLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const WhiteLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 67.5rem;
  height: 45rem;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`;
export const Title = styled.span`
  font-size: 3rem;
  font-weight: 600;
  line-height: normal;
`;
export const Frame = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 5rem;
  gap: 50px;
`;
