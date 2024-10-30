import styled from 'styled-components';

export const Layout = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: 28.875rem;
  background-color: ${({ isActive }) => (isActive ? '#efefef' : 'white')};
  cursor: pointer;
  transition: border-color 0.3s;
  border-radius: 10px;
  &:hover {
    background-color: #efefef;
  }
`;

export const Title = styled.span`
  text-align: center;
  font-size: 20px;
  color: black;
`;
