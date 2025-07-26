import { memo } from "react";
import styles from "../styles/card.module.css";

// Типи
interface CardProps {
  headPercent: string;
  headText: string;
  description: string;
}

// Основний компонент
export const Card = memo(
  ({ headPercent, headText, description }: CardProps) => {
    return (
      <article className={styles.card} role="listitem">
        <header className={styles.head}>
          <h3 className={styles.headText}>{headText}</h3>
          <p className={styles.headText} aria-label={`${headText} value`}>
            {headPercent}
          </p>
        </header>
        <p className={styles.description}>{description}</p>
      </article>
    );
  }
);

Card.displayName = "Card";
