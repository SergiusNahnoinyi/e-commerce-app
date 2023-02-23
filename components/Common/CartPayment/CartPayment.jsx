import Button from "../Button";

import styles from "./CartPayment.module.css";

export default function CartPayment({ totalPrice, handlePayment }) {
  return (
    <div className={styles.cart__payment}>
      <h3>Subtotal: {totalPrice}$</h3>
      <Button
        title="Pay with Stripe"
        variant="secondary"
        white
        outlined
        onClick={handlePayment}
      />
    </div>
  );
}
