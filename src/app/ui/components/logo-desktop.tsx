import Image from "next/image";

export default function LogoDesktop() {
  return (
    <Image
      className="hidden md:block"
      width={300}
      height={300}
      alt="Logo hentori desktop"
      src="/Logo.png"
    />
  );
}
