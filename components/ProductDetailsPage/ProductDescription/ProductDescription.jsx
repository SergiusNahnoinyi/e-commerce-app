import { useState } from "react";

import Container from "@/components/Common/Container";
import CustomImage from "@/components/Common/CustomImage";

import ReviewsBlock from "@/components/ProductDetailsPage/ReviewsBlock";
import QuantityBlock from "@/components/ProductDetailsPage/QuantityBlock";
import BuyBlock from "@/components/ProductDetailsPage/BuyBlock";

import clsx from "clsx";
import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  const [index, setIndex] = useState(0);

  if (!product)
    return <h2 style={{ textAlign: "center" }}>No data provided</h2>;

  return (
    <Container className={styles.description}>
      <figure>
        <CustomImage
          className={styles.description__image}
          src={product.image[0].asset._ref && product.image[index].asset._ref}
          alt={product.name}
          width={200}
          height={200}
        />
        <figcaption className={styles.description__images}>
          {product.image.map((image, idx) => (
            <CustomImage
              onMouseEnter={() => setIndex(idx)}
              className={clsx(styles.images, {
                [styles["isSelected"]]: idx === index
              })}
              src={image.asset._ref}
              alt={product.name}
              key={image._key}
              width={100}
              height={100}
            />
          ))}
        </figcaption>
      </figure>
      <aside className={styles.aside}>
        <h2>{product.name}</h2>
        <ReviewsBlock />
        <h3>Details:</h3>
        <p>{product.details}</p>
        <h4 className={styles.price}>${product.price}</h4>
        <QuantityBlock />
        <BuyBlock product={product} />
      </aside>
    </Container>
  );
}
