import { useContext, useState } from "react";
import ButtonAccept from "../components/button-accept";
import ButtonBack from "../components/button-back-login";
import InputLogin from "../components/input-login";
import { checkPassword, checkUsername } from "@/libs/validation";
import OptionLogin from "../components/option-login";
import axios, { AxiosError } from "axios";
import { HomePageContext } from "@/libs/context";
import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { NofficationInfo, TypeNoffication } from "./noffication";
import { urlRegister } from "@/libs/fetch-data";

export interface RequestRegister {
  username: string;
  password: string;
  confirmPassword: string;
  roleCode: string;
}

export default function FormRegister() {
  let [userRegister, setUserRegister] = useState<RequestRegister>({
    username: "",
    password: "",
    confirmPassword: "",
    roleCode: "",
  });

  let homePageContext = useContext(HomePageContext);

  function handleUsername(username: string) {
    setUserRegister(() => {
      return { ...userRegister, username };
    });
  }

  function handlePassword(password: string) {
    setUserRegister(() => {
      return { ...userRegister, password };
    });
  }

  function handleConfirm(confirmPassword: string) {
    setUserRegister(() => {
      return { ...userRegister, confirmPassword };
    });
  }

  function handleRole(roleCode: string) {
    setUserRegister(() => {
      return { ...userRegister, roleCode };
    });
  }

  function handleConfirmPassword(txtInput: string) {
    return {
      check: txtInput === userRegister.password,
      txtArlert: "Mật khẩu và mật khẩu xác nhận không đúng",
    };
  }

  function handleSubmitRegister() {
    let nofi: NofficationInfo;
    if (userRegister.password != userRegister.confirmPassword) {
      nofi = {
        active: true,
        icon: faExclamation,
        title: "Xác nhận mật khẩu và mật khẩu không đúng",
        typeNoffication: TypeNoffication.WARNING,
      };
      homePageContext?.handleNofi(nofi);

      setTimeout(() => {
        nofi = { ...nofi, active: false };
        homePageContext?.handleNofi(nofi);
      }, 3000);
      return;
    }
    let { username, password, roleCode } = userRegister;
    homePageContext?.handleLoadding(true);
    axios({
      url: urlRegister,
      method: "POST",
      data: { username, password, roleCode },
    })
      .then((res) => {
        console.log(res);
        homePageContext?.handleLoadding(false);
      })
      .catch((err: AxiosError) => {
        type data = { mess: string; status: boolean };
        let res = err.response?.data as data;
        nofi = {
          active: true,
          icon: faExclamation,
          title: res.mess,
          typeNoffication: TypeNoffication.ERROS,
        };
        homePageContext?.handleNofi(nofi);
        homePageContext?.handleLoadding(false);

        setTimeout(() => {
          nofi = { ...nofi, active: false };
          homePageContext?.handleNofi(nofi);
        }, 3000);
        return;
      });
  }

  return (
    <form
      className="h-[400px] flex flex-col justify-center mt-2"
      action={handleSubmitRegister}
    >
      <InputLogin
        txtLable="Tên đăng nhập"
        typeInput="text"
        value={userRegister.username}
        handleUser={handleUsername}
        handleValidate={checkUsername}
      />
      <InputLogin
        txtLable="Mật khẩu"
        handleUser={handlePassword}
        typeInput="password"
        value={userRegister.password}
        handleValidate={checkPassword}
      />

      <InputLogin
        txtLable="Xác nhận mật khẩu"
        typeInput="password"
        handleUser={handleConfirm}
        handleValidate={handleConfirmPassword}
        value={userRegister.confirmPassword}
      />

      <OptionLogin handleOption={handleRole} />
      <div className="flex flex-row justify-evenly mt-6">
        <ButtonBack title="Trở lại" />
        <ButtonAccept title="Đăng ký" />
      </div>
    </form>
  );
}
