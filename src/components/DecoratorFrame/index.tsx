import React, { useState } from "react";
import GoBack from "@src/assets/img/goBack.svg";
import BackGround from "../common/BackGround";
import BackGRoundImg from "@src/assets/img/defaultBackground.svg";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { mokFrame2 } from "@src/assets/images";
import { DownLoadIcon } from "@src/assets/svg";
import Draggable, { DraggableData } from "react-draggable";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Resizable styles

const DecoratorFrame: React.FC = () => {
  const navigate = useNavigate();
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [imageSize, setImageSize] = useState({ width: 200, height: 200 });
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });

  const trackPos = (data: DraggableData) => {
    setImagePosition({ x: data.x, y: data.y });
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedImage(URL.createObjectURL(file));
    }
  };

  const handleResize = (
    event: React.SyntheticEvent,
    data: { size: { width: number; height: number } },
  ) => {
    setImageSize(data.size);
    console.log(event);
  };

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
      <S.Layout>
        <S.MainContainer>
          <Draggable>
            <S.Frame src={mokFrame2} alt="Main frame" />
          </Draggable>
          {uploadedImage && (
            <Draggable
              bounds="parent"
              position={imagePosition}
              onDrag={(_, data) => trackPos(data)}
            >
              <ResizableBox
                width={imageSize.width}
                height={imageSize.height}
                minConstraints={[50, 50]}
                maxConstraints={[500, 500]}
                onResize={handleResize}
                resizeHandles={["ne", "se", "sw", "nw"]}
                style={{ position: "absolute", zIndex: 110 }}
              >
                <S.UploadedImage
                  src={uploadedImage}
                  alt="Uploaded image"
                  style={{
                    width: `${imageSize.width}px`,
                    height: `${imageSize.height}px`,
                    objectFit: "cover",
                  }}
                />
              </ResizableBox>
            </Draggable>
          )}
        </S.MainContainer>
      </S.Layout>
      <S.SlideContainer>
        <img src={mokFrame2} width={160} height={503} alt="Draggable frame" />
        <S.Orange>
          <label htmlFor="upload-input">
            <DownLoadIcon />
          </label>
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={{ display: "none" }}
          />
        </S.Orange>
      </S.SlideContainer>
    </BackGround>
  );
};

export default DecoratorFrame;
