import { useMutation } from "react-query";
import { instance } from "../../instance";
import { loginState } from "../../../stores/loginState";
import { useRecoilValue } from "recoil";
import { Dispatch, SetStateAction } from "react";
import {
  IAppPaymentUserData,
  IAppPaymentUserResponse,
  IPaymentFilter,
} from "../../../types/appSet/appPaymentUser.types";

export const getPaymentUserList = (
  page: number,
  setTotal: Dispatch<SetStateAction<number>>,
  paymentFilter: IPaymentFilter,
  setPaymentUserList: Dispatch<SetStateAction<IAppPaymentUserData[]>>,
) => {
  const login = useRecoilValue(loginState);

  return useMutation<IAppPaymentUserResponse, unknown, void, unknown>(
    "getPaymentUserList",
    () =>
      instance.post("/payment_user/list", {
        company: login.company,
        page,
        user_id: paymentFilter.userId,
        phone_no: paymentFilter.phoneNumber,
        free_user: paymentFilter.isFreeUser,
      }),
    {
      onSuccess: (data) => {
        if (data.result === "00") {
          setPaymentUserList(data.list);
          setTotal(data.lastPage);
        }
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );
};