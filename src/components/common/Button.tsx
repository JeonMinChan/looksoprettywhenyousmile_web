import React from 'react';
import styled from 'styled-components';

const Btn = styled.button<{ disabled?: boolean }>`
  width: 230px;
  height: 60px;
  background-color: ${({ disabled }) => (disabled ? '#FEB580' : '#ff7a1b')};
  border-radius: 10px;
  border: none;
  color: black;
  font-size: 24px;
  font-weight: 600;
  z-index: 5;
  &:hover {
    background-color: #feb580;
  }
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`;

interface ButtonProps {
  title: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ title, onClick, disabled = false }: ButtonProps) => {
  return (
    <Btn onClick={disabled ? undefined : onClick} disabled={disabled}>
      {title}
    </Btn>
  );
};

export default Button;
