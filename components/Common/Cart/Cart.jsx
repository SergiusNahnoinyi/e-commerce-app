import clsx from "clsx";

import styles from "./Cart.module.css";

export default function Cart({ className }) {
  return <div className={clsx(styles.cart, className)}>Cart</div>;
}
