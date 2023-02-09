import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>2023 All rights reserverd</p>
      <ul className={styles.footer__icons}>
        <li>
          <AiFillInstagram />
        </li>
        <li>
          <AiOutlineTwitter />
        </li>
      </ul>
    </footer>
  );
}
