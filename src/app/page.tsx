"use client";
import { useEffect, useState, createContext } from "react";
import clsx from "clsx";
import HomePage from "./ui/page/homePage";
import { LoginContext } from "@/libs/context";

export default function Home() {
  let [login, setLogin] = useState(false);

  function handleLogin(isLogin: boolean) {
    setLogin(isLogin);
  }

  return (
    <LoginContext.Provider value={{ login, handleLogin }}>
      <div className="h-[100vh] w-[100vw] relative">
        <HomePage />
      </div>
    </LoginContext.Provider>
  );
}
