import Link from "next/link";
import Img from "next/image";
import { useNextSanityImage } from "next-sanity-image";

import { client } from "@/services/sanity";

import Button from "@/components/Common/Button/Button";
import Container from "@/components/Common/Container";

import styles from "./Hero.module.css";

export default function Hero({ hero }) {
  const imageProps = useNextSanityImage(client, hero.image);

  return (
    <Container className={styles.hero__container}>
      <Img
        {...imageProps}
        placeholder="blur"
        blurDataURL={hero.image.asset._ref}
        className={styles.hero__banner}
        alt="Headphones"
      />
      <div className={styles.hero__description}>
        <h1 className={styles.hero__title}>{hero.saleTime}</h1>
        <h2 className={styles.hero__subtitle}>{hero.desc}</h2>
        <Link href="/product/headphones">
          <Button title="Shop Now" variant="primary" />
        </Link>
      </div>
    </Container>
  );
}
