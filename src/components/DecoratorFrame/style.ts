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

export const Title = styled.span`
  color: var(--Text-Black, #000);
  text-align: center;
  font-size: 40px;
  font-weight: 600;
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
