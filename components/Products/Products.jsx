import Product from "../Product/Product";

import styles from "./Products.module.css";

export default function Products() {
  return (
    <ul className={styles.products}>
      <Product />
    </ul>
  );
}
