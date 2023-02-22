import Hero from "@/components/HomePage/Hero";

import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import Products from "@/components/Common/Products";

import { client } from "@/services/sanity";

import styles from "./index.module.css";

export default function Home({ products, banner }) {
  return (
    <>
      <section className={styles.hero}>
        <Hero hero={banner[0]} />
      </section>
      <section className={styles.products}>
        <Container>
          <Heading
            title="Best Seller Products"
            subtitle="Choose the best for you"
          />
          <Products products={products} className={styles.products__list} />
        </Container>
      </section>
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
