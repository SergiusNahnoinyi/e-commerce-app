import Button from "@/components/Common/Button/Button";

import { useStateContext } from "@/context/StateContext";

import clsx from "clsx";
import styles from "./BuyBlock.module.css";

export default function BuyBlock({ product, className }) {
  const { qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  return (
    <ul className={clsx(styles.buy, className)}>
      <li>
        <Button
          title="Add to Cart"
          variant="secondary"
          outlined
          white
          onClick={() => onAdd(product, qty)}
        />
      </li>
      <li>
        <Button title="Buy Now" variant="secondary" onClick={handleBuyNow} />
      </li>
    </ul>
  );
}
