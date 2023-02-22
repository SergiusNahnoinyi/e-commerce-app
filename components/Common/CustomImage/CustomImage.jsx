import Image from "next/image";

import { imageBuilder } from "@/services/sanity";

import clsx from "clsx";

import styles from "./CustomImage.module.css";

export default function CustomImage({
  src,
  alt,
  quality = 100,
  className,
  ...props
}) {
  const baseURL = "https://cdn.sanity.io/images/";

  const cutomLoader = ({ width: srcWidth }) => {
    const url =
      imageBuilder
        .image(src)
        .width(Number(props.width) || srcWidth || 256)
        .height(Number(props.height) || 256)
        .auto("format")
        .quality(quality)
        .fit("clip")
        .url() ?? "";

    return url;
  };

  return (
    <Image
      className={clsx(styles.image, className)}
      loader={cutomLoader}
      src={imageBuilder.image(src).url()?.toString().replace(baseURL, "") ?? ""}
      alt={alt}
      {...props}
    />
  );
}
