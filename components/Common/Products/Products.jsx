import Product from "../Product";

import clsx from "clsx";

import styles from "./Products.module.css";

export default function Products({ products, className }) {
  if (!products || products.length === 0)
    return <h2 style={{ textAlign: "center" }}>No data provided</h2>;

  return (
    <ul className={clsx(styles.products, className)}>
      {products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </ul>
  );
}
