import QuantityButton from "../QuantityButton";

import clsx from "clsx";

import styles from "./QuantityBlock.module.css";

export default function QuantityBlock({ className }) {
  return (
    <div className={clsx(styles.quantity, className)}>
      <h5>Quantity:</h5>
      <div className={styles.quantity__widget}>
        <QuantityButton variant="minus" onClick={() => console.log("-1")} />
        <span className={styles.quantity__num}>0</span>
        <QuantityButton variant="plus" onClick={() => console.log("+1")} />
      </div>
    </div>
  );
}
