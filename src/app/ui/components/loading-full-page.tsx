import Image from "next/image";

export default function LoadingFullPage() {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-10 bg-slate-500 bg-opacity-60">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
        <div className="absolute top-0 left-0 w-full h-[132px] border-4 border-transparent border-t-yellow-base rounded-full animate-spin"></div>
        <Image
          className=""
          src="/Logo.png"
          alt="Logo Hentori PNG"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
