import { inputLoginList } from "@/libs/constance";
import InputLogin from "../components/input-login";
import ButtonAccept from "../components/button-accept";
import ButtonForward from "../components/button-forward-login";
import { urlLogin } from "@/libs/fetch-data";
import { useContext, useState } from "react";
import { UserRequest } from "@/libs/type-request";
import axios, { AxiosError } from "axios";
import { HomePageContext } from "@/libs/context";
import { loginUrl } from "@/libs/defination";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { TypeNoffication } from "./noffication";

export default function FormLogin() {
  let [user, setUser] = useState<UserRequest>({ username: "", password: "" });
  let homePageContext = useContext(HomePageContext);

  function handleUsername(username: string) {
    setUser((val) => {
      return { ...val, username };
    });
  }

  function handlePassword(password: string) {
    setUser((val) => {
      return { ...val, password };
    });
  }

  async function handleLogin() {
    homePageContext?.handleLoadding(true);
    axios({
      url: loginUrl,
      method: "POST",
      withCredentials: true,
      data: user,
    })
      .then((res) => {
        homePageContext?.handleLogin(true);
        homePageContext?.handleLoadding(false);
      })
      .catch((err: AxiosError) => {
        type Data = { messenger: string };

        homePageContext?.handleLogin(false);
        let { messenger } = err.response?.data as Data;
        let nofi = {
          active: true,
          title: messenger,
          icon: faX,
          typeNoffication: TypeNoffication.ERROS,
        };
        homePageContext?.handleNofi(nofi);
        homePageContext?.handleLoadding(false);
        setTimeout(() => {
          nofi = { ...nofi, active: false };
          homePageContext?.handleNofi(nofi);
        }, 3000);
      });
  }

  return (
    <form className="mb-8" action={handleLogin}>
      <InputLogin
        txtLable="Tên đăng nhập"
        handleUser={handleUsername}
        typeInput="text"
        value={user.username}
      />
      <InputLogin
        txtLable="Mật khẩu"
        handleUser={handlePassword}
        typeInput="password"
        value={user.password}
      />
      <div className="flex flex-row justify-evenly mt-6">
        <ButtonAccept title="Đăng nhập" />
        <ButtonForward title="Đăng ký" />
      </div>
    </form>
  );
}
