import Link from "next/link";

import Container from "@/components/Common/Container";
import Button from "@/components/Common/Button";

import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <section>
      <Container className={styles.error__container}>
        <Link href="/">
          <Button title="Go back home" variant="primary" />
        </Link>
        <Link href="https://t.me/sergiusnahnoinyijr" target="_blank">
          <Button title="Contact support" variant="secondary" outlined white />
        </Link>
      </Container>
    </section>
  );
}
