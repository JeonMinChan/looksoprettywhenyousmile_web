import styled, { keyframes, css } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(100%);
    opacity: 0;
  }
`;

export const Wrapper = styled.div<{ isVisible: boolean }>`
  position: absolute;
  bottom: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 8.125rem;
  padding: 0rem 3.125rem;
  gap: 3.125rem;
  border-radius: 3.125rem;
  background: #feb580;
  animation: ${({ isVisible }) =>
    isVisible
      ? css`
          ${slideUp} 0.5s forwards
        `
      : css`
          ${slideDown} 0.5s forwards
        `};
  animation-delay: ${({ isVisible }) => (isVisible ? '0s' : '1s')};
`;

export const Text = styled.p`
  font-size: 3rem;
  font-weight: 500;
  line-height: normal;
`;
