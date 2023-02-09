import Head from "next/head";

import Hero from "@/components/Hero/Hero";
import Heading from "@/components/Heading/Heading";
import Products from "@/components/Products/Products";

import { client } from "@/services/sanity";

import styles from "./index.module.css";

export default function Home({ products, banner }) {
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
        <Hero hero={banner[0]} />
        <Heading />
        <Products products={products} />
      </main>
      <footer className={styles.footer}>Footer</footer>
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';

  try {
    const products = await client.fetch(query);
    const banner = await client.fetch(bannerQuery);

    return {
      props: { products, banner }
    };
  } catch (error) {
    console.log(error);

    return {
      props: {}
    };
  }
};
