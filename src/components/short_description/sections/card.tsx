import { memo } from "react";
import Image from "next/image";
import styles from "../styles/card.module.css";

// Типи
interface CardProps {
  title: string;
}

// Основний компонент
export const Card = memo(({ title }: CardProps) => {
  return (
    <article className={styles.card} role="listitem">
      <Image
        className={styles.cross}
        src="red_cros.svg"
        alt="Red cross icon"
        width={24}
        height={24}
      />
      <span>{title}</span>
    </article>
  );
});

Card.displayName = "Card";
