import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const Container = styled.div`
  width: 83.875rem;
  height: 45rem;

  margin-left: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 1.875rem;
  background: #fff;
  box-shadow: 0px 10px 40px 20px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 20%;
  gap: 1.875rem;

  background: white;
`;

export const Picture = styled.img`
  width: 18rem;
  height: 12.375rem;

  border: none;
  border-radius: 20px;

  cursor: pointer;

  &:hover {
    outline: 0.4375rem solid #777;
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

export const NumberCircle = styled.div`
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 1.625rem;
  background: #ffe1cc;
`;

export const NumberText = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: normal;
`;

export const InputBox = styled.div`
  display: flex;
  width: 50rem;
  height: 5rem;
  padding-right: 1.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 3.125rem;
  border: 5px solid #333;
  background: #343434;
`;

export const Input = styled.input`
  display: flex;
  width: 90%;
  padding-left: 3.125rem;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  background: #343434;
  outline: none;

  ::placeholder {
    color: #888;
  }
`;

export const IconButton = styled.button<{ isEmpty: boolean }>`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  background: ${({ isEmpty }) => (isEmpty ? "#888" : "#CCC")};
  cursor: pointer;
`;
