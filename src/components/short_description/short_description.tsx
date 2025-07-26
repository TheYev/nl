import { memo } from "react";
import Image from "next/image";
import { Card } from "@/components/short_description/sections/card";
import styles from "./styles/short_description.module.css";

// Константи
const TEXT = {
  title: "Tired of replying to the same messages?",
  description:
    "Managing multiple fans at once is exhausting. NeuroLover helps you save time, reduce burnout, and never leave money on the table.",
  sectionLabel: "Common challenges creators face",
  imageAlt: "Woman using NeuroLover app",
} as const;

const CARD_TITLES = [
  "😩 Broken energy",
  "⏳ Wasted time",
  "💸 Missed tips",
  "😮‍💨 DM burnout",
] as const;

// Основний компонент
export const ShortDescription = memo(() => {
  return (
    <section className={styles.body} aria-label={TEXT.sectionLabel}>
      <div className={styles.main}>
        <div className={styles.main_info}>
          <header>
            <h1 className={styles.header}>{TEXT.title}</h1>
            <p className={styles.description}>{TEXT.description}</p>
          </header>

          <Image
            className={styles.main_img_mobile}
            src="block_2.svg"
            alt={TEXT.imageAlt}
            width={699}
            height={464}
            priority
          />

          <div
            className={styles.card_collection}
            role="list"
            aria-label="Common challenges"
          >
            {CARD_TITLES.map((title) => (
              <Card key={title} title={title} />
            ))}
          </div>
        </div>

        <div>
          <Image
            className={styles.main_img}
            src="block_2.svg"
            alt={TEXT.imageAlt}
            width={699}
            height={464}
            priority
          />
        </div>
      </div>
    </section>
  );
});

ShortDescription.displayName = "ShortDescription";
