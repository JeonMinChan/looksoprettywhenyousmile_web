import { useFramePost } from "@src/queries/ChooseFrame/chooseFrame.query";
import { showToast } from "@src/libs/swal/toast";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState, forwardRef } from "react";
import html2canvas from "html2canvas";
import * as S from "./style";
import { CameraIcon, DownLoadIcon, EditIcon, ShareIcon } from "@src/assets/svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useImgStore } from "@src/stores/img.store";

interface SideBarProps {
  imgUrl: string;
  setIsSideBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(({ setIsSideBarOpen, setIsShowModal }, ref) => {
  const navigate = useNavigate();

  const imgUrl = useImgStore((state) => state.imgUrl);

  const { pathname } = useLocation();
  const [path, setPath] = useState<string>("");
  // const [_, setResultUrl] = useState<string>("");

  useEffect(() => {
    if (pathname.includes("frame-input")) {
      setPath("frame-input");
    } else if (pathname.includes("choose")) {
      setPath("choose");
      return;
    } else if (pathname.includes("image-input")) {
      setPath("image-input");
    }
  }, [pathname]);

  function captureSpecificArea(x: number, y: number, width: number, height: number) {
    html2canvas(document.body, {
      x,
      y,
      width,
      height,
      scale: 2,
    }).then(async (canvas) => {
      const base64Image = canvas.toDataURL("image/png", 1);
      console.log(base64Image);

      // Blob 객체 생성
      const response = await fetch(base64Image);
      const blob = await response.blob();

      // URL 생성
      const url = URL.createObjectURL(blob);

      // 다운로드 링크 생성
      const link = document.createElement("a");
      link.href = url;
      link.download = "specific-area.png";
      link.click();

      const cutIndex = url.indexOf("http://");
      const image_url = url.substring(cutIndex + 7);
      const formData = new FormData();
      formData.append("size", "auto");
      formData.append("image_url", image_url);
      await axios.post(
        "https://api.remove.bg/v1.0/removebg",
        { image_url, size: "auto" },
        {
          headers: {
            "X-API-Key": "v7FC1qsayvqzPRcEEwA4psjM",
          },
        },
      );
    });
  }

  const createImageFile = async (): Promise<File> => {
    const response = await fetch(imgUrl);
    const blob = await response.blob();
    const file = new File([blob], "frame.png", { type: blob.type });
    console.log(file);

    return file;
  };

  const postFrameMutation = useFramePost();
  const formData = new FormData();
  const handleButtonClick = async () => {
    if (path === "frame-input") {
      const imageFile = await createImageFile();
      setIsShowModal(true);
      formData.append("image", imageFile);
      postFrameMutation.mutate(formData.get("image")!, {
        onSuccess: () => {
          showToast("success", "이미지 공유 성공!");
        },
        onError: (error) => {
          showToast("error", (error as AxiosError).message!);
        },
      });
    }
  };

  return (
    <S.Wrapper ref={ref}>
      <S.Img src={imgUrl} alt={imgUrl} />
      <S.ButtonContainer path={path}>
        <S.Button
          onClick={() => {
            if (path === "frame-input") {
              navigate("/photo");
              if (setIsSideBarOpen) {
                setIsSideBarOpen(false);
              }
            } else {
              navigate("/background-change");
              if (setIsSideBarOpen) {
                setIsSideBarOpen(false);
              }
            }
          }}
        >
          {path === "frame-input" ? <CameraIcon /> : <EditIcon />}
        </S.Button>
        {path !== "choose" && (
          <S.Button
            onClick={() => {
              if (path === "frame-input") {
                setIsShowModal(true);
                handleButtonClick();
              } else if (path !== "frame-input") {
                captureSpecificArea(1630, 240, 160, 502.588);
              }
            }}
          >
            {path === "frame-input" ? <ShareIcon /> : <DownLoadIcon />}
          </S.Button>
        )}
      </S.ButtonContainer>
    </S.Wrapper>
  );
});

export default SideBar;
