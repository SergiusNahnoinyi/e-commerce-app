import QuantityButton from "../QuantityButton";

import { useStateContext } from "@/context/StateContext";

import clsx from "clsx";
import styles from "./QuantityBlock.module.css";

export default function QuantityBlock({ className }) {
  const { decQty, incQty, qty } = useStateContext();

  return (
    <div className={clsx(styles.quantity, className)}>
      <h5>Quantity:</h5>
      <div className={styles.quantity__widget}>
        <QuantityButton variant="minus" onClick={decQty} />
        <span className={styles.quantity__num}>{qty}</span>
        <QuantityButton variant="plus" onClick={incQty} />
      </div>
    </div>
  );
}
