import styled from "styled-components";

export const Layout = styled.main<{ isActive: boolean }>`
  padding: 20px;
  background-color: ${(props) => (props.isActive ? "#efefef" : "white")};
  width: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
  }
`;

export const Title = styled.span`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
