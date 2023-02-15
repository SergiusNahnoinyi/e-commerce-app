import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/services/sanity";

import Button from "../Button/Button";

import styles from "./Hero.module.css";

export default function Hero({ hero }) {
  const imageProps = useNextSanityImage(client, hero.image);

  return (
    <div className={styles.hero}>
      <div className={styles.hero__cta}>
        <h2>{hero.model}</h2>
        <h1>{hero.saleTime}</h1>
        <Button
          title="Shop Now"
          variant="primary"
          className={styles.hero__button}
        />
      </div>
      <Img
        className={styles.hero__banner}
        loader={imageProps.loader}
        src={imageProps.src}
        alt="Headphones"
        priority
        fill
      />
      <div className={styles.hero__desc}>
        <h3>Description</h3>
        <p>{hero.desc}</p>
      </div>
    </div>
  );
}
