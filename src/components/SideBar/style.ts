import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  right: 5rem;
  display: flex;
  padding: 3.125rem 1.875rem;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
  border-radius: 1.875rem;
  background: white;
  box-shadow: 0rem 0.625rem 2.5rem 1.25rem rgba(0, 0, 0, 0.25);
`;

export const Img = styled.img`
  width: 10rem;

  height: 31.41175rem;
  box-shadow: 0.25rem 0.3125rem 0.625rem 0.25rem rgba(0, 0, 0, 0.25);
`;

export const ButtonContainer = styled.div<{ path: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${({ path }) => (path !== 'choose' ? '100%' : '')};
`;

export const Button = styled.button`
  display: flex;
  width: 4.375rem;
  height: 4.375rem;
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
