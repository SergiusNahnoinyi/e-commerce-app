import Head from "next/head";

import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>E-commerce</title>
        <meta
          name="description"
          content="This is a modern e-commerce application that includes ability to add and edit
          products, advanced carts, checkout functionalities, so you can cover real payments"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>Header</header>
      <main className={styles.main}>
        <hgroup className={styles.heading}>
          <h1>Best Seller Products</h1>
          <p>Choose the best for you</p>
        </hgroup>
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}
