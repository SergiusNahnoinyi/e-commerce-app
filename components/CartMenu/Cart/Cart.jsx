import Heading from "@/components/Common/Heading";

import CartItems from "../CartItems";
import CartPayment from "../CartPayment";

import { useStateContext } from "@/context/StateContext";

import clsx from "clsx";
import styles from "./Cart.module.css";

export default function Cart({ className }) {
  const { totalPrice, totalQuantities, cartItems } = useStateContext();

  return (
    <section className={clsx(styles.cart, className)}>
      <div className={styles.cart__container}>
        <Heading
          title="Your Purchases"
          subtitle={`${totalQuantities} item(s)`}
        />
        <CartItems items={cartItems} />
        <CartPayment totalPrice={totalPrice} />
      </div>
    </section>
  );
}
