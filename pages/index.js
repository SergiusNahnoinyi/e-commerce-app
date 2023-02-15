import Heading from "@/components/Common/Heading";
import Hero from "@/components/HomePage/Hero";
import Products from "@/components/Common/Products";

import { client } from "@/services/sanity";

export default function Home({ products, banner }) {
  return (
    <>
      <Hero hero={banner[0]} />
      <Heading
        title="Best Seller Products"
        subtitle="Choose the best for you"
      />
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
