import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80rem;
  height: 56.25rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  border-radius: 1.875rem;
  background: white;
  box-shadow: 0rem 0.625rem 2.5rem 1.25rem rgba(0, 0, 0, 0.25);
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.75rem;
`;

export const InputText = styled.p`
  font-size: 4rem;
  font-weight: 600;
  line-height: normal;
`;

export const InputBox = styled.div`
  display: flex;
  width: 67.5rem;
  height: 6.25rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 3.125rem;
  border: 5px solid #333;
  background: #343434;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  padding-left: 3.125rem;
  justify-content: space-between;
  align-items: center;
  color: #888;
  font-size: 2rem;
  font-weight: 400;
  line-height: normal;
  background: #343434;
  outline: none;
`;
