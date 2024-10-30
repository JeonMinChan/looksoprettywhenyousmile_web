import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
  display: inline-flex;
  padding: 3.125rem;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  border-radius: 1.875rem;
  height: calc(100% - 6.25rem);
  background: white;
  box-shadow: 0rem 0.625rem 2.5rem 1.25rem rgba(0, 0, 0, 0.25);
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards;
`;

export const Img = styled.img`
  width: calc(15.9375rem - 3.125rem);

  height: calc(50.0625rem -3.125rem);
  box-shadow: 0.25rem 0.3125rem 0.625rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const ButtonContainer = styled.div<{ path: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ path }) => (path !== "choose" ? "100%" : "")};
`;

export const Button = styled.button`
  display: flex;
  width: 6.25rem;
  height: 6.25rem;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: #ff7a1b;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #feb580;
  }
`;
