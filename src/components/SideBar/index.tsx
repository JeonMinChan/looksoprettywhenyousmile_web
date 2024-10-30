import React, { useEffect, useState } from "react";

import * as S from "./style";
import { CameraIcon, DownLoadIcon, EditIcon, ShareIcon } from "@src/assets/svg";
import { useLocation } from "react-router-dom";

interface SideBarProps {
  imgUrl: string;
}

const SideBar = ({ imgUrl }: SideBarProps) => {
  const { pathname } = useLocation();
  const [path, setPath] = useState<string>("");
  useEffect(() => {
    if (pathname.includes("frame-input")) {
      setPath("frame-input");
      return;
    } else if (pathname.includes("choose")) {
      setPath("choose");
      return;
    } else if (pathname.includes("/image-input")) {
      setPath("image-input");
      return;
    }
  }, [pathname]);

  return (
    <S.Wrapper>
      <S.Img src={imgUrl} />
      <S.ButtonContainer path={path}>
        <S.Button>{path === "frame-input" ? <CameraIcon /> : <EditIcon />}</S.Button>
        {path !== "choose" && <S.Button>{path === "frame-input" ? <ShareIcon /> : <DownLoadIcon />}</S.Button>}
      </S.ButtonContainer>
    </S.Wrapper>
  );
};

export default SideBar;
