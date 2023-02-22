import { client } from "@/services/sanity";

import ProductDescription from "@/components/ProductDetailsPage/ProductDescription";

import Container from "@/components/Common/Container";
import Heading from "@/components/Common/Heading";
import Products from "@/components/Common/Products";

import styles from "./index.module.css";

export default function ProductDetails({ product, products }) {
  if (!product || !products)
    return <h2 style={{ textAlign: "center" }}>Loading product ...</h2>;

  return (
    <>
      <section className={styles.description}>
        <ProductDescription product={product} />
      </section>
      <section>
        <Container>
          <Heading title="Perfect match" subtitle="You may also like" />
          <Products products={products} />
        </Container>
      </section>
    </>
  );
}

export const getStaticPaths = async () => {
  const query = `*[_type =="product"] {
    slug {
      current
    }
  }
  `;

  try {
    const products = await client.fetch(query);
    const paths = products.map((product) => ({
      params: {
        slug: product.slug.current
      }
    }));

    return {
      paths,
      fallback: true
    };
  } catch (error) {
    return {
      paths: {},
      fallback: false
    };
  }
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  try {
    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    if (!product || !products) {
      return {
        redirect: {
          destination: "/",
          permanent: false
        }
      };
    }

    return {
      props: { product, products },
      revalidate: 5
    };
  } catch (error) {
    return {
      props: {}
    };
  }
};
