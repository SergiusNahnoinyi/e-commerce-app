import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";

import styles from "./Layout.module.css";

export default function Layout({ children }) {
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
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}
