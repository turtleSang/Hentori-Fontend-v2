"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition, faCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { useEffect, useState } from "react";

export enum TypeNoffication {
  ERROS,
  WARNING,
  SUCESSFUL,
}

export interface NofficationInfo {
  title: string;
  typeNoffication: TypeNoffication;
  icon: IconDefinition;
  active: boolean;
}

export default function Noffication({
  title,
  typeNoffication,
  icon,
  active,
}: NofficationInfo) {
  let color: string;
  let border: string;
  switch (typeNoffication) {
    case TypeNoffication.ERROS:
      color = "text-red-500";
      border = "border-red-500";
      break;
    case TypeNoffication.SUCESSFUL:
      color = "text-green-500";
      border = "border-green-500";
      break;
    default:
      color = "text-yellow-500";
      border = "border-green-500";
      break;
  }

  return (
    <div
      className={clsx(
        "fixed bg-slate-50  rounded-md text-center min-h-14 max-h-28 w-3/4 left-1/2 -translate-x-1/2 flex flex-row justify-around items-center duration-200 z-50",
        active ? "translate-y-0 top-3" : "top-0 -translate-y-full"
      )}
    >
      <div
        className={clsx(
          "border-[1px] w-8 h-8 text-lg rounded-full leading-8",
          border
        )}
      >
        <FontAwesomeIcon className={clsx(color)} icon={icon} />
      </div>
      <h1 className={clsx("font-medium text-base", color)}>{title}</h1>
    </div>
  );
}
