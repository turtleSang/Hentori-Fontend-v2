import Image from "next/image";

export default function LogoMobile() {
  return (
    <Image
      className="md:hidden"
      src="/Logo.png"
      width={150}
      height={150}
      alt="Logo Hentori"
    />
  );
}
