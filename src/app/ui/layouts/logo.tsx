import LogoDesktop from "../components/logo-desktop";
import LogoMobile from "../components/logo-mobile";

export default function Logo() {
  return (
    <div>
      <div className="flex flex-row justify-center bg-brown-1 rounded-lg md:mr-3">
        <LogoMobile />
        <LogoDesktop />
      </div>
    </div>
  );
}
