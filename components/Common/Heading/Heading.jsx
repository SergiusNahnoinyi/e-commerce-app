import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <hgroup className={styles.heading}>
      <h2>Best Seller Products</h2>
      <p>Choose the best for you</p>
    </hgroup>
  );
}
