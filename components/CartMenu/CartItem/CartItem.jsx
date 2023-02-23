import Img from "next/image";

import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/services/sanity";

import RemoveButton from "../RemoveButton";

import styles from "./CartItem.module.css";

export default function CartItem({ item }) {
  const imageProps = useNextSanityImage(client, item.image[0]);

  return (
    <li className={styles.item}>
      <Img
        {...imageProps}
        placeholder="blur"
        blurDataURL={item.image[0].asset._ref}
        className={styles.item__image}
        alt={item.name}
      />
      <aside className={styles.item__description}>
        <h3>{item.name}</h3>
        <p>{item.price}$</p>
        <p>{item.quantity} item(s)</p>
      </aside>
      <RemoveButton item={item} />
    </li>
  );
}
