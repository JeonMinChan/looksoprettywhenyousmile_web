import React, { useEffect, useState, forwardRef } from "react";

import html2canvas from "html2canvas";
import * as S from "./style";
import { CameraIcon, DownLoadIcon, EditIcon, ShareIcon } from "@src/assets/svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useFramePost } from "@src/queries/ChooseFrame/chooseFrame.query";
import { showToast } from "@src/libs/swal/toast";
import { AxiosError } from "axios";

interface SideBarProps {
  imgUrl: string;
  setIsSideBarOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = forwardRef<HTMLDivElement, SideBarProps>(
  ({ imgUrl, setIsSideBarOpen, setIsShowModal }, ref) => {
    const navigate = useNavigate();

    const { pathname } = useLocation();
    const [path, setPath] = useState<string>("");

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

    function captureSpecificArea(
      x: number,
      y: number,
      width: number,
      height: number,
    ) {
      html2canvas(document.body, {
        x,
        y,
        width,
        height,
        scale: 2,
      }).then((canvas) => {
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png", 1);
        link.download = "specific-area.png";
        link.click();
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
                  captureSpecificArea(1530, 207.5, 160, 502.588);
                }
              }}
            >
              {path === "frame-input" ? <ShareIcon /> : <DownLoadIcon />}
            </S.Button>
          )}
        </S.ButtonContainer>
      </S.Wrapper>
    );
  },
);

export default SideBar;
