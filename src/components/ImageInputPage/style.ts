import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;

  justify-content: space-between;
  align-items: center;

  padding: 20px 30px;
`;

export const Container = styled.div`
  width: calc(80% - 60px);
  height: calc(100% - 40px);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  color: #000;
  text-align: center;
  font-size: 64px;
  font-weight: 600;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 40%;
  gap: 10px;

  img {
    width: 220px;
    height: 200px;

    border: none;
    border-radius: 20px;

    cursor: pointer;
  }
`;

export const FrameContainer = styled.div`
  display: flex;
  width: calc(20% - 60px);
  height: calc(90% - 40px);
  padding: 50px;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  border: none;
  border-radius: 30px;

  background: white;

  box-shadow: 4px 5px 10px 4px rgba(0, 0, 0, 0.25);

  img {
    width: 255px;
    height: 700px;
  }
`;
