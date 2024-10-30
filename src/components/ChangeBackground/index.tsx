import React, { useState } from "react";
import * as S from "./style";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import { ArrowIcon, DownLoadIcon } from "@src/assets/svg";
import { completePictureStore } from "@src/stores/Picture/picture.stores";
import { useLinkPost } from "@src/queries/DownloadLink/downloadLink.query";
import axios from "axios";

const ChagneBackground = () => {
  const [keyword, setKeyword] = useState<string>("");
  const [isEmpty] = useState<boolean>(true);
  const [_, setImage] = useState<string>();
  const [deleteImage, setDeletedImage] = useState<any>();
  const [, setIsClicked] = useState<boolean>(false);
  const [, setIsFirstRender] = useState<boolean>(false);
  const pictureStore = completePictureStore((state) => state.picture);
  const formData = new FormData();

  const linkPostMutation = useLinkPost();

  const linkPost = async (src: string) => {
    const response = await fetch(src);
    const blob = await response.blob();
    const file = new File([blob], "image.png", { type: blob.type });
    formData.append("image", file);
    linkPostMutation.mutate(formData.get("image")!, {
      onSuccess: (response) => {
        setImage(response.url);

        setTimeout(() => {
          deleteBackGround(response.url);
        }, 500);
      },
    });
  };
  const deleteBackGround = (image_url: string) => {
    axios
      .post(
        "https://api.remove.bg/v1.0/removebg",
        {
          image_url: image_url,
          size: "auto",
        },
        {
          headers: {
            "X-Api-Key": "v7FC1qsayvqzPRcEEwA4psjM",
          },
          responseType: "arraybuffer",
        },
      )
      .then((res) => {
        const base64String = btoa(
          new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ""),
        );

        const imgSrc = `data:image/png;base64,${base64String}`;
        setDeletedImage(imgSrc);
      });
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.Container>
          {deleteImage ? (
            <img src={deleteImage} alt="곰" style={{ width: "576px", height: "396px" }} />
          ) : (
            <span>선택된 사진 없음</span>
          )}
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
        <S.ImageContainer>
          {pictureStore.map((image, index) => (
            <img
              key={`${image.src}-${index}`}
              src={image.src}
              alt={`복사본-${index}`}
              style={{
                position: "absolute",
                top: image.top,
                left: image.left,
                width: "7.9375rem",
                height: "5.5rem",
                cursor: "pointer",
                zIndex: 5,
              }}
              onClick={() => {
                linkPost(image.src);
              }}
            />
          ))}
          <S.IconWrap>
            <DownLoadIcon />
          </S.IconWrap>
        </S.ImageContainer>
      </S.Layout>
    </BackGround>
  );
};

export default ChagneBackground;
