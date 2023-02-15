import { client } from "@/services/sanity";

import ProductDescription from "@/components/ProductDetailsPage/ProductDescription";
import Heading from "@/components/Common/Heading";
import Products from "@/components/Common/Products";

export default function ProductDetails({ product, products }) {
  return (
    <>
      <ProductDescription product={product} />
      <Heading title="Perfect match" subtitle="You may also like" />
      <Products products={products} />
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
      fallback: "blocking"
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

    return {
      props: { product, products }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
};
