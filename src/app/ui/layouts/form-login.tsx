import { inputLoginList } from "@/libs/constance";
import InputLogin from "../components/input-login";
import ButtonAccept from "../components/button-accept";
import ButtonForward from "../components/button-forward-login";
import { urlLogin, useFetch } from "@/libs/fetch-data";
import { useState } from "react";
import { UserRequest } from "@/libs/type-request";
import { Input } from "postcss";

export default function FormLogin() {
  let [user, setUser] = useState<UserRequest>({ username: "", password: "" });

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

  function handleLogin() {
    let res = useFetch(urlLogin, "post", {}, user);
    console.log(res);
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
