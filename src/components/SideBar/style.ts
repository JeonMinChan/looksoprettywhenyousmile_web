import styled, { keyframes } from 'styled-components';

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
  background: white;
  box-shadow: 0rem 0.625rem 2.5rem 1.25rem rgba(0, 0, 0, 0.25);
  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in-out forwards;
`;

export const Img = styled.img`
  width: 15.9375rem;
  height: 50.0625rem;
  box-shadow: 0.25rem 0.3125rem 0.625rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
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
`;
