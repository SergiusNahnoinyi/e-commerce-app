import Button from "../Button";

import clsx from "clsx";
import styles from "./Cart.module.css";

export default function Cart({ className }) {
  return (
    <section className={clsx(styles.cart, className)}>
      <div className={styles.cart__container}>
        <Button
          title="Back to shop"
          variant="primary"
          onClick={() => console.log("sdsd")}
        />
      </div>
    </section>
  );
}
