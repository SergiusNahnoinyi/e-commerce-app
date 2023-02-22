import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";

import Container from "../Container";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Container className={styles.header__container}>
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
      </Container>
    </header>
  );
}
