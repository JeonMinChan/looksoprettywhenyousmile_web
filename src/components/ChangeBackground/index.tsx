import React, { useState } from "react";
import * as S from "./style";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import { bear1 } from "@src/assets/images";
import { ArrowIcon } from "@src/assets/svg";

const ChagneBackground = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [isEmpty] = useState<boolean>(true);
  const [, setIsClicked] = useState<boolean>(false);
  const [, setIsFirstRender] = useState<boolean>(false);

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.Container>
          <img src={bear1} alt="곰" style={{ width: "576px", height: "396px" }} />
          <S.InputBox>
            <S.Input
              onChange={(e) => setKeyword(e.target.value)}
              value={keyword}
              placeholder="| 산뜻한 바다 느낌 나게 해줘!"
            />
            <S.IconButton
              isEmpty={isEmpty}
              onClick={() => {
                if (isEmpty) {
                  setIsClicked(false);
                } else {
                  setIsClicked(true);
                  setIsFirstRender(true);
                }
              }}
            >
              <ArrowIcon />
            </S.IconButton>
          </S.InputBox>
        </S.Container>
        <S.ImageContainer>{/* <img src={pictureStore} alt="" width={120} /> */}</S.ImageContainer>
      </S.Layout>
    </BackGround>
  );
};

export default ChagneBackground;
