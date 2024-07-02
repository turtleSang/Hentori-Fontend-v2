import ButtonAccept from "../components/button-accept";
import ButtonBack from "../components/button-back-login";
import InputLogin from "../components/input-login";
import { inputRegisterList } from "@/libs/constance";

export default function FormRegister() {
  return (
    <form action="">
      {inputRegisterList.map((val, index) => {
        return (
          <InputLogin
            txtLable={val.txtLable}
            typeInput={val.typeInput}
            handleValidate={val.handleValidate}
            key={index}
          />
        );
      })}
      <div className="flex flex-row justify-evenly mt-6">
        <ButtonBack title="Trở lại" />
        <ButtonAccept title="Đăng ký" />
      </div>
    </form>
  );
}
