import Link from "next/link";

import Container from "../Container";
import CartButton from "../CartButton";
import Cart from "../Cart";

import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <Container className={styles.header__container}>
        <Link href="/">E-commerce</Link>
        <CartButton onClick={() => console.log("Click")} />
        <Cart />
      </Container>
    </header>
  );
}
