import React from "react";
import * as S from "./style";

interface BackGroundProps {
  backgroundImgUrl: string;
  children: React.ReactNode;
}

const BackGround = ({ backgroundImgUrl, children }: BackGroundProps) => {
  return (
    <S.BackGround backgroundImgUrl={backgroundImgUrl}>{children}</S.BackGround>
  );
};

export default BackGround;
