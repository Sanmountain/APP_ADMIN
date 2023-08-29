import "../../styles/appSet/appVer.css";
import { ChangeEvent, useEffect, useState } from "react";
import { getAppInfoList } from "../../api/appSet/appVer/getAppInfoList";
import { getAppInfoRegist } from "../../api/appSet/appVer/getAppInfoRegist";
import { getAppInfoDelete } from "../../api/appSet/appVer/getAppInfoDelete";
import { getAppInfoModify } from "../../api/appSet/appVer/getAppInfoModify";
import {
  IAppInfoEdit,
  IAppInfoListData,
} from "../../types/appSet/appInfoList.types";

export default function AppVer() {
  const [isAppVerAuthorized, setIsAppVerAuthorized] = useState(false);
  const [password, setPassword] = useState("");
  const [appInfo, setAppInfo] = useState<IAppInfoListData[]>([]);
  const [appInfoEdit, setAppInfoEdit] = useState<IAppInfoEdit>({});
  const [programInput, setProgramInput] = useState("");
  const [appVerInput, setAppVerInput] = useState("");
  const [urlInput, setUrlInput] = useState("");

  // NOTE list 불러오기
  const { mutate: appInfoListMutate } = getAppInfoList(
    setAppInfo,
    setAppInfoEdit,
  );
  // NOTE 등록
  const { mutate: appInfoRegist } = getAppInfoRegist(
    appVerInput,
    programInput,
    urlInput,
    setProgramInput,
    setAppVerInput,
    setUrlInput,
    appInfoListMutate,
  );
  // NOTE 삭제
  const { mutate: appInfoDeleteMutate } = getAppInfoDelete(appInfoListMutate);
  // NOTE 수정
  const { mutate: appInfoModifyMutate } = getAppInfoModify(
    appInfoEdit,
    appInfoListMutate,
  );

  // NOTE 비밀번호 일치할 경우 버전관리 접근
  useEffect(() => {
    if (password === "qwer!") setIsAppVerAuthorized(true);
  }, [password]);

  // NOTE list 불러오기
  useEffect(() => {
    appInfoListMutate();
  }, []);

  // NOTE 버전관리 비밀번호 onChange
  const handlePasswordInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // NOTE 버전 onChange
  const handleVerInputChange = (item: IAppInfoListData, value: string) => {
    setAppInfoEdit({
      ...appInfoEdit,
      [item.program]: {
        ...appInfoEdit[item.program],
        app_ver: value,
      },
    });
  };

  // NOTE APK 다운로드 onChange
  const handleUrlInputChange = (item: IAppInfoListData, value: string) => {
    setAppInfoEdit({
      ...appInfoEdit,
      [item.program]: {
        ...appInfoEdit[item.program],
        apk_url: value,
      },
    });
  };

  /* 등록 */
  const handleAppRegist = async () => {
    appInfoRegist();
  };

  /* 삭제 */
  const handleAppDelete = async (program: string) => {
    appInfoDeleteMutate(program);
  };

  /* 수정 */
  const handleAppMod = async (program: string) => {
    appInfoModifyMutate(program);
  };

  if (!isAppVerAuthorized)
    return (
      <div className="appInfoPasswordContainer">
        <div className="passwordTitle">앱 버전관리 비밀번호를 입력하세요.</div>
        <input
          className="passwordInput"
          type="password"
          autoFocus
          onChange={handlePasswordInputChange}
        />
      </div>
    );
  else
    return (
      <div className="appInfoFormDiv">
        <div className="appInfoTitle">현재 버전 정보</div>
        <div className="appInfoHeader">
          <div className="headerItem">프로그램</div>
          <div className="headerItem">버전</div>
          <div className="headerItem">APK다운로드</div>
          <div className="headerItem">등록인</div>
        </div>
        {appInfo.map((item) => (
          <div className="appInfoObject" key={item.id}>
            <div className="appInfoInput">
              <input
                type="text"
                className="form-control validate program"
                name="program"
                value={item.program}
                readOnly
              />
              <input
                type="text"
                className="form-control validate app_ver"
                name="app_ver"
                value={appInfoEdit[item.program]?.app_ver}
                onChange={(e) => handleVerInputChange(item, e.target.value)}
              />
              <input
                type="text"
                className="form-control validate apk_url"
                name="apk_url"
                value={appInfoEdit[item.program]?.apk_url}
                onChange={(e) => handleUrlInputChange(item, e.target.value)}
              />
              <input
                type="text"
                className="form-control validate user_id"
                value={item.user_id}
                readOnly
              />
              <button
                className="commonAppBtn"
                onClick={() => handleAppMod(item.program)}
              >
                수정
              </button>
              <button
                className="commonAppBtn"
                onClick={() => handleAppDelete(item.program)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
        <div className="appInfoObject">
          <div className="appInfoInput">
            <input
              type="text"
              className="form-control validate program"
              name="program"
              value={programInput}
              onChange={(e) => setProgramInput(e.target.value)}
            />
            <input
              type="text"
              className="form-control validate app_ver"
              name="app_ver"
              value={appVerInput}
              onChange={(e) => setAppVerInput(e.target.value)}
            />
            <input
              type="text"
              className="form-control validate apk_url"
              name="apk_url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <input className="hiddenUserid" />
            <button className="commonAppBtn" onClick={handleAppRegist}>
              등록
            </button>
          </div>
        </div>
      </div>
    );
}
