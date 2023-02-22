import Button from "@/components/Common/Button/Button";

import clsx from "clsx";

import styles from "./BuyBlock.module.css";

export default function BuyBlock({ className }) {
  return (
    <ul className={clsx(styles.buy, className)}>
      <li>
        <Button
          title="Add to Cart"
          variant="secondary"
          outlined
          white
          onClick={() => console.log("Add to Cart")}
        />
      </li>
      <li>
        <Button
          title="Buy Now"
          variant="secondary"
          onClick={() => console.log("Buy Now")}
        />
      </li>
    </ul>
  );
}
