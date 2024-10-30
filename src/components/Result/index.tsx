import React, { useEffect } from 'react';
import BackGround from '../common/BackGround';
import BackGRoundImg from '@src/assets/img/defaultBackground.svg';
import GoBack from '@src/assets/img/goBack.svg';
import { QRCodeSVG } from 'qrcode.react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './style';
// import { useLinkPost } from "@src/queries/DownloadLink/downloadLink.query";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { imageUrl } = location.state || {};
  // const [downloadUrl, setDownloadUrl] = useState<string | null>(null); // 서버 응답으로 받은 URL 저장

  // const postLinkMutation = useLinkPost();
  // useEffect(() => {
  //   console.log(downloadUrl);
  // }, [downloadUrl]);

  useEffect(() => {
    // const handleImageUpload = async () => {
    //   try {
    //     const response = await fetch(mokFrame2);
    //     const blob = await response.blob();
    //     const file = new File([blob], "image.png", { type: blob.type });
    //     const formData = new FormData();
    //     formData.append("image", file);
    //     postLinkMutation.mutate(formData.get("image")!, {
    //       onSuccess: (response) => {
    //         setDownloadUrl(response.url);
    //       },
    //     });
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };
    // handleImageUpload();
  }, []);

  // console.log(imageUrl);

  return (
    <BackGround backgroundImgUrl={BackGRoundImg}>
      <S.Layout>
        <S.GoBack src={GoBack} onClick={() => navigate(-1)} alt="뒤로가기" />
        <S.MainLayout>
          <S.Title>스티커 사진이 완성되었어요!</S.Title>
          <S.MainContainer>
            <S.Frame src={imageUrl} alt="프레임" />
            <S.QrContainer>
              <S.QrTitle>다운로드 QR코드</S.QrTitle>
              <QRCodeSVG value={'https://www.naver.com'} width={200} height={200} />
              <S.TextContainer>
                <S.Text1>사진이 자동으로 다운로드되지 않으면</S.Text1>
                <S.UnderTextContainer>
                  {/* {downloadUrl ? (
                    <S.BoldText as="a" href={downloadUrl} download>
                      여기
                    </S.BoldText>
                  ) : ( */}
                  <S.BoldText>
                    <span>여기</span>
                  </S.BoldText>
                  {/* )} */}
                  <>를 눌러주세요.</>
                </S.UnderTextContainer>
              </S.TextContainer>
            </S.QrContainer>
          </S.MainContainer>
        </S.MainLayout>
      </S.Layout>
    </BackGround>
  );
};

export default Result;
