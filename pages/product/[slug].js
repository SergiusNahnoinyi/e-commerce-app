import { client } from "@/services/sanity";

export default function ProductDetails({ product }) {
  return <h2 style={{ textAlign: "center" }}>{product.name}</h2>;
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
