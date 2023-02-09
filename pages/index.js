import Hero from "@/components/Hero/Hero";
import Heading from "@/components/Heading/Heading";
import Products from "@/components/Products/Products";

import { client } from "@/services/sanity";

export default function Home({ products, banner }) {
  return (
    <>
      <Hero hero={banner[0]} />
      <Heading />
      <Products products={products} />
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
