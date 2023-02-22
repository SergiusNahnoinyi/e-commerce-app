import Container from "@/components/Common/Container";
import CustomImage from "@/components/Common/CustomImage";

import ReviewsBlock from "@/components/ProductDetailsPage/ReviewsBlock";
import QuantityBlock from "@/components/ProductDetailsPage/QuantityBlock";
import BuyBlock from "@/components/ProductDetailsPage/BuyBlock";

import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  if (!product)
    return <h2 style={{ textAlign: "center" }}>No data provided</h2>;

  return (
    <Container className={styles.description}>
      <CustomImage
        className={styles.description__image}
        src={product.image[0].asset._ref}
        alt={product.name}
        width={200}
        height={200}
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
