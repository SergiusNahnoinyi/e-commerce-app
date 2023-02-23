import { TiDeleteOutline } from "react-icons/ti";

import { useStateContext } from "@/context/StateContext";

import clsx from "clsx";
import styles from "./RemoveButton.module.css";

export default function RemoveButton({ className, item }) {
  const { onRemove } = useStateContext();

  return (
    <button
      type="button"
      className={clsx(styles.remove, className)}
      onClick={() => onRemove(item)}
    >
      <TiDeleteOutline />
    </button>
  );
}
