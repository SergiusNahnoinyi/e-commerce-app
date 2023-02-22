import { AiOutlineShopping } from "react-icons/ai";

import clsx from "clsx";

import styles from "./CartButton.module.css";

export default function CartButton({ className, onClick }) {
  return (
    <button
      type="button"
      className={clsx(styles.cart__button, className)}
      aria-label="Go to the list of purchases"
      onClick={onClick}
    >
      <AiOutlineShopping aria-hidden="true" />
      <span className={styles.cart__quantity}>1</span>
    </button>
  );
}
