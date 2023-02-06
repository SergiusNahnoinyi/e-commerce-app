import Head from "next/head";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta
          name="description"
          content="This is a modern e-commerce application that includes ability to add and edit
products, advanced carts, checkout functionalities, so you can cover real
payments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>Main</main>
    </>
  );
}
