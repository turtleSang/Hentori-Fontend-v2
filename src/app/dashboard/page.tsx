"use client";

import { useLogin } from "@/libs/fetch-data";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

export default function Dashboard() {
  let { data, loadding } = useLogin();

  useEffect(() => {
    console.log(data);
  }, []);

  return <h1>This is dashboard</h1>;
}
