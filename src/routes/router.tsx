import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import NoticeList from "../pages/notice/NoticeList";
import NoticeWrite from "../pages/notice/NoticeWrite";
import AppTitle from "../pages/appSet/appScan/AppTitle";
import AppVer from "../pages/appSet/AppVer";
import AppScan from "../pages/appSet/appScan/AppScan";
import AppVideo from "../pages/appSet/appVideo/AppVideo";
import MMSSend from "../pages/mms/mmsSend/MMSSend";
import TalkSend from "../pages/mms/talkSend/TalkSend";
import PhotoCheck from "../pages/photo/PhotoCheck";
import UserEdit from "../pages/UserEdit";
import Layout from "../components/layout";
import NoticeDetail from "../pages/notice/NoticeDetail";
import AppScanDetail from "../pages/appSet/appScan/AppScanDetail";
import MMSSendDetail from "../pages/mms/mmsSend/MMSSendDetail";
import AppVideoDetail from "../pages/appSet/appVideo/AppVideoDetail";
import AppVideoWrite from "../pages/appSet/appVideo/AppVideoWrite";
import TalkSendDetail from "../pages/mms/talkSend/TalkSendDetail";
import TalkSendPhoto from "../pages/mms/talkSend/TalkSendPhoto";
import AppDeliveryTime from "../pages/appSet/appDeliveryTime";
import AppPaymentUser from "../pages/appSet/appPaymentUser";
import AppProduct from "../pages/appSet/appProduct";

export const router = createBrowserRouter([
  { path: "/", element: <Login /> },

  {
    path: "/notice",
    element: <Layout />,
    children: [
      { path: "/notice/list", element: <NoticeList /> },
      { path: "/notice/:noticeId", element: <NoticeDetail /> },
      { path: "/notice/write", element: <NoticeWrite /> },
      { path: "/notice/:noticeId/edit", element: <NoticeWrite /> },
    ],
  },

  {
    path: "/app",
    element: <Layout />,
    children: [
      { path: "/app/title", element: <AppTitle /> },
      { path: "/app/ver", element: <AppVer /> },
      { path: "/app/scan", element: <AppScan /> },
      { path: "/app/scan/:scanDate", element: <AppScanDetail /> },
      { path: "/app/deliveryTime", element: <AppDeliveryTime /> },
      { path: "/app/paymentUser", element: <AppPaymentUser /> },
      { path: "/app/product", element: <AppProduct /> },
      { path: "/app/video", element: <AppVideo /> },
      { path: "/app/video/:videoId", element: <AppVideoDetail /> },
      { path: "/app/video/write", element: <AppVideoWrite /> },
    ],
  },

  {
    path: "/mms",
    element: <Layout />,
    children: [
      { path: "/mms/mmsSend", element: <MMSSend /> },
      { path: "/mms/mmsSend/:id/:page", element: <MMSSendDetail /> },
      { path: "/mms/talkSend", element: <TalkSend /> },
      { path: "/mms/talkSend/photo/:id", element: <TalkSendPhoto /> },
      {
        path: "/mms/talkSend/detail/:id/:page/:limit",
        element: <TalkSendDetail />,
      },
    ],
  },

  {
    path: "/photoCheck",
    element: <Layout />,
    children: [{ path: "/photoCheck", element: <PhotoCheck /> }],
  },

  {
    path: "/userEdit",
    element: <Layout />,
    children: [{ path: "/userEdit", element: <UserEdit /> }],
  },
]);