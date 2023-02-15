import styles from "./Heading.module.css";

export default function Heading({ title, subtitle }) {
  return (
    <hgroup className={styles.heading}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </hgroup>
  );
}
