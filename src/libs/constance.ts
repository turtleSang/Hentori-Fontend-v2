import { HTMLInputTypeAttribute } from "react";
import { checkConfirmPassword, checkPassword, checkUsername } from "./validation";

type InputLogin = { txtLable: string; typeInput: HTMLInputTypeAttribute; handleValidate?: (txt: string) => boolean }

export const inputLoginList: InputLogin[] = [
    { txtLable: "Tên Đăng nhập", typeInput: "text" },
    { txtLable: "Mật khẩu", typeInput: "password" },
];
export const inputRegisterList: InputLogin[] = [
    {
        txtLable: "Tên đăng nhập",
        typeInput: "text",
        handleValidate: checkUsername
    },
    {
        txtLable: "Mật khẩu",
        typeInput: "password",
        handleValidate: checkPassword
    },
    {
        txtLable: "Xác nhận mật khẩu",
        typeInput: "password",
    }
]

enum Role {
    Staff, Manager
}

export interface LoginState {
    status: boolean,
}