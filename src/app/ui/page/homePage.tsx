"use client";
import { useState } from "react";
import FormLogin from "../layouts/form-login";
import FormRegister from "../layouts/form-register";
import Logo from "../layouts/logo";
import clsx from "clsx";

import { FormContext } from "@/libs/context";

export default function () {
  let [activeRegisterForm, setRegisterForm] = useState(false);

  const handleRegisterForm = (activeRegister: boolean) => {
    setRegisterForm(activeRegister);
  };

  return (
    <div className="bg-slate-50 rounded-md w-4/5 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 absolute top-1/2 md:flex md:flex-row md:justify-around md:items-center md:w-3/5">
      <Logo />
      <div
        className={clsx(
          "relative overflow-y-hidden w-full duration-200",
          activeRegisterForm ? "h-64" : "h-48"
        )}
      >
        <FormContext.Provider value={{ handleForm: handleRegisterForm }}>
          <div
            className={clsx(
              activeRegisterForm && "-translate-y-48",
              "absolute duration-500 w-full"
            )}
          >
            <FormLogin />
            <FormRegister />
          </div>
        </FormContext.Provider>
      </div>
    </div>
  );
}
