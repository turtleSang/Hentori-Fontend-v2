import { NofficationInfo } from "@/app/ui/layouts/noffication";
import { createContext, useState } from "react";

type contextType = {
    handleForm: (setForm: boolean) => void
}

export let FormContext = createContext<contextType | undefined>(undefined)

type LoginContextType = {
    login: boolean,
    handleLogin: (setLogin: boolean) => void
    handleNofi: (nofiInfo: NofficationInfo) => void
    handleLoadding: (setLoadding: boolean) => void
}

export let HomePageContext = createContext<LoginContextType | undefined>(undefined)