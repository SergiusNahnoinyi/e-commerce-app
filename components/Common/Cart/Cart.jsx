import CartItems from "../CartItems";

import { useStateContext } from "@/context/StateContext";

import clsx from "clsx";
import styles from "./Cart.module.css";

export default function Cart({ className }) {
  const { cartItems, setShowCart } = useStateContext();

  return (
    <section className={clsx(styles.cart, className)}>
      <div className={styles.cart__container}>
        <CartItems items={cartItems} setShowCart={setShowCart} />
      </div>
    </section>
  );
}
