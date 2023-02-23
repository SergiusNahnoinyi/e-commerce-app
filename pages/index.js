import Hero from "@/components/HomePage/Hero";

import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import Products from "@/components/Common/Products";

import { client } from "@/services/sanity";

import styles from "./index.module.css";

export default function Home({ products, banner }) {
  if (!products || !banner)
    return <h2 style={{ textAlign: "center" }}>Loading products ...</h2>;

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
          <Products products={products} />
        </Container>
      </section>
    </>
  );
}

export const getStaticProps = async () => {
  const query = '*[_type == "product"]';
  const bannerQuery = '*[_type == "banner"]';

  try {
    const products = await client.fetch(query);
    const banner = await client.fetch(bannerQuery);

    return {
      props: { products, banner },
      revalidate: 5
    };
  } catch (error) {
    console.log(error);

    return {
      props: {}
    };
  }
};
