import Img from "next/image";

import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/services/sanity";

import Container from "@/components/Common/Container";

import ReviewsBlock from "@/components/ProductDetailsPage/ReviewsBlock";
import QuantityBlock from "@/components/ProductDetailsPage/QuantityBlock";
import BuyBlock from "@/components/ProductDetailsPage/BuyBlock";

import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  const imageProps = useNextSanityImage(client, product.image[0]);

  if (!product)
    return <h2 style={{ textAlign: "center" }}>No data provided</h2>;

  return (
    <Container className={styles.description}>
      <Img
        {...imageProps}
        placeholder="blur"
        blurDataURL={product.image[0].asset._ref}
        className={styles.description__image}
        alt={product.name}
      />
      <aside className={styles.aside}>
        <h2>{product.name}</h2>
        <ReviewsBlock />
        <h3>Details:</h3>
        <p>{product.details}</p>
        <h4 className={styles.price}>${product.price}</h4>
        <QuantityBlock />
        <BuyBlock />
      </aside>
    </Container>
  );
}
