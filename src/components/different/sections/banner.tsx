import { memo } from "react";
import Image from "next/image";
import styles from "../styles/banner.module.css";

// Типи
interface BannerProps {
  head: string;
  description: string;
  imgPath: string;
  bgColor: string;
}

// Основний компонент
export const Banner = memo(
  ({ head, description, imgPath, bgColor }: BannerProps) => {
    return (
      <article
        className={styles.banner}
        style={{ background: bgColor }}
        aria-label={head}
      >
        <div className={styles.main}>
          <h2 className={styles.head}>{head}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <Image
          className={styles.image}
          src={imgPath}
          width={254}
          height={254}
          alt={`${head} illustration`}
          priority
        />
      </article>
    );
  }
);

Banner.displayName = "Banner";
