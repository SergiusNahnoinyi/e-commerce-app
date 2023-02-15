import Button from "../Button/Button";

import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  if (!product)
    return <div style={{ textAlign: "center" }}>No data provided</div>;

  return (
    <>
      <h1 className={styles.product}>{product.name}</h1>
      <ul className={styles.buttons}>
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
    </>
  );
}
