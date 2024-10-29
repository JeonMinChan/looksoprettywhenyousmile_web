import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 230px;
  height: 60px;
  background-color: #ff7a1b;
  border-radius: 10px;
  border: none;
  font-size: 24px;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: #feb580;
  }
`;

interface ButtonProps {
  title: string;
  onClick?: () => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{title}</Btn>;
};

export default Button;
