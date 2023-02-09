import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">E-commerce</Link>
      <button
        type="button"
        className={styles.cart__button}
        aria-label="Go to the list of purchases"
        onClick={() => console.log("Click")}
      >
        <AiOutlineShopping aria-hidden="true" />
        <span className={styles.cart__quantity}>1</span>
      </button>
    </header>
  );
}
