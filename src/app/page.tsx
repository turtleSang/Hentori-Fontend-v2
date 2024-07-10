"use client";
import { useEffect, useState, createContext, useContext } from "react";
import HomePage from "./ui/page/homePage";
import { HomePageContext } from "@/libs/context";
import { useRouter } from "next/navigation";
import Noffication, {
  NofficationInfo,
  TypeNoffication,
} from "./ui/layouts/noffication";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import LoadingFullPage from "./ui/components/loading-full-page";
import { useLogin } from "@/libs/fetch-data";

export default function Home() {
  let router = useRouter();
  let [login, setLogin] = useState(false);
  let [nofiInfo, setInfo] = useState<NofficationInfo>({
    icon: faArrowAltCircleDown,
    active: false,
    title: "No noffication",
    typeNoffication: TypeNoffication.ERROS,
  });
  let [loadding, setLoadding] = useState(false);

  let data = useLogin();

  function handleLogin(checkLogin: boolean) {
    setLogin(checkLogin);
  }

  function handleNofi(nofiInfo: NofficationInfo) {
    setInfo(nofiInfo);
  }

  function handleLoadding(load: boolean) {
    setLoadding(load);
  }

  useEffect(() => {
    if (login || data.isLogin) {
      router.push("/dashboard");
    } else {
      router.push("/");
    }
  }, [login, data]);

  return (
    <HomePageContext.Provider
      value={{ login, handleLogin, handleNofi, handleLoadding }}
    >
      <Noffication
        icon={nofiInfo?.icon}
        title={nofiInfo?.title}
        typeNoffication={TypeNoffication.ERROS}
        active={nofiInfo.active}
      />
      {loadding && <LoadingFullPage />}
      <div className="h-[100vh] w-[100vw] relative">
        <HomePage />
      </div>
    </HomePageContext.Provider>
  );
}
