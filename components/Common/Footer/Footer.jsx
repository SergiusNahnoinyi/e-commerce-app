import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

import Container from "../Container";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Container className={styles.footer__container}>
        <p>2023 All rights reserverd</p>
        <ul className={styles.footer__icons}>
          <li>
            <AiFillInstagram />
          </li>
          <li>
            <AiOutlineTwitter />
          </li>
        </ul>
      </Container>
    </footer>
  );
}
