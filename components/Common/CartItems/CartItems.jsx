import { AiOutlineShopping } from "react-icons/ai";

import Button from "../Button";
import CartItem from "../CartItem";

import { useStateContext } from "@/context/StateContext";

import clsx from "clsx";
import styles from "./CartItems.module.css";

export default function CartItems({ items, className }) {
  const { setShowCart } = useStateContext();

  if (!items || items.length === 0)
    return (
      <div style={{ textAlign: "center" }}>
        <AiOutlineShopping size={150} />
        <h2 style={{ marginBottom: "20px" }}>Your shopping bag is empty</h2>
        <Button
          title="Back to shop"
          variant="primary"
          onClick={() => setShowCart(false)}
        />
      </div>
    );

  return (
    <>
      <ul className={clsx(styles.cart__items, className)}>
        {items.map((item) => (
          <CartItem key={item._id} item={item} />
        ))}
      </ul>
      <Button
        title="Back to shop"
        variant="primary"
        onClick={() => setShowCart(false)}
      />
    </>
  );
}
