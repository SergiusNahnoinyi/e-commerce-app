import Img from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/services/sanity";

import Button from "@/components/Common/Button";
import Container from "@/components/Common/Container";

import QuantityButton from "../QuantityButton";

import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  const imageProps = useNextSanityImage(client, product.image[0]);

  if (!product)
    return <h2 style={{ textAlign: "center" }}>No data provided</h2>;

  return (
    <Container className={styles.description}>
      <Img
        {...imageProps}
        style={{ maxWidth: "100%", height: "auto" }}
        placeholder="blur"
        blurDataURL={product.image[0].asset._ref}
        className={styles.description__image}
        alt={product.name}
      />
      <aside>
        <h2>{product.name}</h2>
        <p className={styles.reviews}>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
          (20)
        </p>
        <h3>Details:</h3>
        <p>{product.details}</p>
        <h4 className={styles.price}>${product.price}</h4>
        <div className={styles.quantity}>
          <h5>Quantity:</h5>
          <div className={styles.quantity__widget}>
            <QuantityButton variant="minus" onClick={() => console.log("-1")} />
            <span className={styles.quantity__num}>0</span>
            <QuantityButton variant="plus" onClick={() => console.log("+1")} />
          </div>
        </div>
        <ul className={styles.buttons}>
          <li>
            <Button
              title="Add to Cart"
              variant="secondary"
              outlined
              white
              onClick={() => console.log("Add to Cart")}
            />
          </li>
          <li>
            <Button
              title="Buy Now"
              variant="secondary"
              onClick={() => console.log("Buy Now")}
            />
          </li>
        </ul>
      </aside>
    </Container>
  );
}
