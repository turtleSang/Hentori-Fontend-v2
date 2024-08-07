import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { FormContext } from "@/libs/context";

export default function ButtonForward({ title }: { title: string }) {
  let formContext = useContext(FormContext);

  return (
    <span
      className="cursor-pointer text-brown-1 transition-all duration-200 hover:underline py-2 px-5 hover:text-yellow-base"
      onClick={() => formContext?.handleForm(true)}
    >
      {title} <FontAwesomeIcon icon={faArrowRight} />
    </span>
  );
}
