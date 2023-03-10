import Link from "next/link";

import Container from "../Container";
import CartButton from "../CartButton";
import Cart from "@/components/CartMenu/Cart";

import { useStateContext } from "@/context/StateContext";

import styles from "./Header.module.css";

export default function Header() {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <header>
      <Container className={styles.header__container}>
        <Link href="/">E-commerce</Link>
        <CartButton
          onClick={() => setShowCart(true)}
          quantity={totalQuantities}
        />
        {showCart && <Cart />}
      </Container>
    </header>
  );
}
