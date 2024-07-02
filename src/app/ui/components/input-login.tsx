"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import clsx from "clsx";
import { clearTimeout } from "timers";

export default function InputLogin({
  txtLable,
  typeInput,
  value,
  handleUser,
  handleValidate,
}: {
  txtLable: string;
  typeInput: HTMLInputTypeAttribute;
  value: string;
  handleUser: (txt: string) => void;
  handleValidate?: (txt: string) => boolean;
}) {
  let [allowSee, setAllowSee] = useState(false);
  let [type, setType] = useState(typeInput);

  let [txtAlert, setAlert] = useState("");

  let timeoutId: any;

  function handleAllowsSee() {
    setAllowSee(!allowSee);
  }

  useEffect(() => {
    if (allowSee) {
      setType("text");
    } else {
      setType(typeInput);
    }
  }, [allowSee]);

  function handleInput(txtInput: string) {
    handleUser(txtInput);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    if (handleValidate) {
      timeoutId = setTimeout(() => {
        if (handleValidate(txtInput)) {
          setAlert("");
        } else {
          setAlert(
            txtLable + " chỉ bao gồm chữ và số và chỉ dài 12 ký tự không dấu"
          );
        }
      }, 500);
    }
  }

  return (
    <label className="relative block" htmlFor="">
      <h1>{txtLable}</h1>
      {txtAlert && <p className="bg-red-400 my-1 p-2 rounded-md">{txtAlert}</p>}
      <input
        className="border duration-200 w-full border-brown-1 py-1 px-1 focus:border-yellow-base focus:outline-none rounded-md"
        type={type}
        value={value}
        onChange={(e) => {
          handleInput(e.target.value);
        }}
      />
      {typeInput === "password" && (
        <span
          className="cursor-pointer text-brown-1 absolute bottom-1 right-1"
          onClick={handleAllowsSee}
        >
          <FontAwesomeIcon
            icon={faEye}
            className={clsx(!allowSee && "hidden")}
          />
          <FontAwesomeIcon
            icon={faEyeSlash}
            className={clsx(allowSee && "hidden")}
          />
        </span>
      )}
    </label>
  );
}
