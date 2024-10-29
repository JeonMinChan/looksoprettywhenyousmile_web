import React from "react";
import * as S from "./style";
import Bear1 from "@src/assets/images/bear1.png";
import Bear2 from "@src/assets/images/bear2.png";
import Bear3 from "@src/assets/images/bear3.png";

const Randing = () => {
  return (
    <S.Layout>
      <S.ImgContainer>
        <img src={Bear1} alt="Bear 1" />
        <img src={Bear2} alt="Bear 2" />
        <img src={Bear3} alt="Bear 3" />
      </S.ImgContainer>
      <S.Title>넌 웃을 때가 예쁘더라</S.Title>
      <S.SubTitle>세계 최고의, 스티커 사진 서비스.</S.SubTitle>
      <S.StartBtn>시작하기</S.StartBtn>
    </S.Layout>
  );
};

export default Randing;
