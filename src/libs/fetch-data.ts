'use client'
import axios, { AxiosError } from "axios"
import { useContext, useEffect, useState } from "react";

enum typeMethod {
    GET, POST, PUT, DELETE
}

let rootUrl: string = "http://localhost:8080/api";

// Admin url
let adminUrl: string = `${rootUrl}/admin`;

export let urlLogin: string = `${adminUrl}/login`;
export let urlCheckLogin: string = `${adminUrl}/check`;
export let urlRegister: string = `${adminUrl}/register`

export interface CheckLogin {
    isLogin: boolean,
    username: string,
    listAuthorize: { authority: string }[]
    erros: AxiosError | null,
}

export interface BodyResponse {
    username: string,
    listAuthorize: { authority: string }[]
}

export function useLogin() {
    let [data, setData] = useState<CheckLogin>({ isLogin: false, listAuthorize: [{ authority: "" }], username: "", erros: null });
    useEffect(() => {
        async function checkLogin() {
            try {
                let res = await axios({ method: "get", url: urlCheckLogin, withCredentials: true })
                let { username, listAuthorize } = res.data as BodyResponse;
                data = { ...data, username, listAuthorize, isLogin: true }
                setData(data);
            } catch (err: any) {
                let erro = err as AxiosError;
                if (erro) {
                    data = { ...data, erros: erro }
                }
            }
        }
        checkLogin();
    }, [])
    return data;

}