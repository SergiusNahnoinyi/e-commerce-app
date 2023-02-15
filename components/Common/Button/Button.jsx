import clsx from "clsx";

import styles from "./Button.module.css";

export default function Button({
  title,
  variant,
  outlined,
  white,
  className,
  onClick
}) {
  return (
    <button
      type="button"
      className={clsx(
        styles[variant],
        {
          [styles.isOutlined]: outlined,
          [styles.isWhite]: white
        },
        className
      )}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
