import type { Metadata } from "next";
import "./globals.css";
import { montsterrat } from "@/libs/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Hentori Manager",
  description: "Manager orders and customer of Hentori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" type="image/ico" href="./hentori.ico" />
      </head>
      <body className={clsx(montsterrat.className, "bg-brown-1")}>
        {children}
      </body>
    </html>
  );
}
