import Link from "next/link";

import Container from "../Container";

import { socialMedia } from "@/constants/socialMediaLinks";

import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer>
      <Container className={styles.footer__container}>
        <p>Follow us on social media for more info</p>
        <ul className={styles.footer__icons}>
          {socialMedia.links.map((link) => (
            <Link key={link.name} href={link.href} target="_blank">
              <link.icon aria-hidden="true" />
            </Link>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
