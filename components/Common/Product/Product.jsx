import Link from "next/link";
import Img from "next/image";

import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/services/sanity";

import styles from "./Product.module.css";

export default function Product({ product }) {
  const imageProps = useNextSanityImage(client, product.image[0]);

  return (
    <li className={styles.product}>
      <Link
        href={`/product/${product.slug.current}`}
        className={styles.product__link}
      >
        <Img
          {...imageProps}
          placeholder="blur"
          blurDataURL={product.image[0].asset._ref}
          className={styles.product__image}
          alt={product.name}
        />
      </Link>
      <h3 className={styles.product__name}>{product.name}</h3>
      <p className={styles.product__price}>{product.price}$</p>
    </li>
  );
}
