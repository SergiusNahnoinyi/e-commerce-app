import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import clsx from "clsx";

import styles from "./ReviewsBlock.module.css";

export default function ReviewsBlock({ className }) {
  return (
    <p className={clsx(styles.reviews, className)}>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
      (20)
    </p>
  );
}
