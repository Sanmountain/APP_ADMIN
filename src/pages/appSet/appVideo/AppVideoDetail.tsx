import ReactPlayer from "react-player";
import CommonButton from "../../../components/common/CommonButton";
import * as S from "../../../styles/appSet/AppVideoDetail.styles";
import { useEffect, useState } from "react";
import { IAppVideoDetailResponse } from "../../../types/appSet/appVideoDetail.types";
import { getAppVideoDetail } from "../../../api/appSet/appVideo/getAppVideoDetail";
import { Viewer } from "@toast-ui/react-editor";
import { useNavigate } from "react-router";

export default function AppVideoDetail() {
  const [videoDetail, setVideoDetail] = useState<IAppVideoDetailResponse>();

  const { mutate: videoDetailMutate } = getAppVideoDetail(setVideoDetail);

  const navigate = useNavigate();

  useEffect(() => {
    videoDetailMutate();
  }, []);

  const onClickEdit = () => {
    console.log("ddd");
  };

  const onClickDelete = () => {
    console.log("ddd");
  };

  const onClickMoveToList = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.HeadContainer>
        <S.Title>{videoDetail?.title}</S.Title>
        <S.TopContainer>
          <S.InfoContainer>
            <S.Info>작성자: {videoDetail?.user_name}</S.Info>
            <S.Info>{videoDetail?.reg_date}</S.Info>
          </S.InfoContainer>
          <S.ButtonContainer>
            <CommonButton contents="수정" onClickFn={onClickEdit} />
            <CommonButton contents="삭제" onClickFn={onClickDelete} />
            <CommonButton contents="목록" onClickFn={onClickMoveToList} />
          </S.ButtonContainer>
        </S.TopContainer>
      </S.HeadContainer>
      <S.VideoContainer>
        <ReactPlayer
          url={`${process.env.REACT_APP_API_URL}/images/${videoDetail?.file_name}`}
          controls={true}
          muted={true}
          playing={true}
          width="100%"
          height="100%"
        />
      </S.VideoContainer>
      <S.ContentsContainer>
        <Viewer
          key={videoDetail?.content}
          initialValue={videoDetail?.content}
        />
      </S.ContentsContainer>
    </S.Container>
  );
}