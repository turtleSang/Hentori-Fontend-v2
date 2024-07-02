import { createContext } from "react";

type contextType = {
    handleForm: (setForm: boolean) => void
}

export let FormContext = createContext<contextType | undefined>(undefined)

type LoginContextType = {
    login: boolean,
    handleLogin: (setLogin: boolean) => void
}

export let LoginContext = createContext<LoginContextType | undefined>(undefined)