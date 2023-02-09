import Product from "../Product/Product";

import styles from "./Products.module.css";

export default function Products({ products }) {
  if (!products || products.length === 0)
    return <div style={{ textAlign: "center" }}>No data provided</div>;

  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}
