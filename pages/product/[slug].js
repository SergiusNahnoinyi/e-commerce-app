import { client } from "@/services/sanity";

import ProductDescription from "@/components/ProductDescription/ProductDescription";

export default function ProductDetails({ product }) {
  return <ProductDescription product={product} />;
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

  try {
    const product = await client.fetch(query);

    return {
      props: { product }
    };
  } catch (error) {
    return {
      props: {}
    };
  }
};
