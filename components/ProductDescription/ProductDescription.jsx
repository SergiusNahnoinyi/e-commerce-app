import Img from "next/image";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/services/sanity";

import Button from "../Button/Button";

import styles from "./ProductDescription.module.css";

export default function ProductDescription({ product }) {
  const imageProps = useNextSanityImage(client, product.image[0]);

  if (!product)
    return <h2 style={{ textAlign: "center" }}>No data provided</h2>;

  return (
    <section className={styles.description}>
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
    </section>
  );
}
