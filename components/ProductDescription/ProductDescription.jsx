import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  if (!product)
    return <div style={{ textAlign: "center" }}>No data provided</div>;

  return <h1 className={styles.product}>{product.name}</h1>;
}
