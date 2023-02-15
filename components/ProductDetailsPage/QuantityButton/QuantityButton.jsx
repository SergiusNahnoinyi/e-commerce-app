import clsx from "clsx";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import styles from "./QuantityButton.module.css";

export default function QuantityButton({ variant, className, onClick }) {
  return (
    <button
      type="button"
      className={clsx(styles[variant], className)}
      onClick={onClick}
    >
      {variant === "plus" ? <AiOutlinePlus /> : <AiOutlineMinus />}
    </button>
  );
}
