import { memo } from "react";
import { Card } from "./sections/card";
import styles from "./styles/preference.module.css";

// Типи
interface CardData {
  headPercent: string;
  headText: string;
  description: string;
}

interface TipData {
  amount: number;
  opacity: number;
}

// Константи
const TEXT = {
  title: "Boost your income — not your screen time",
  subtitle: "With NeuroLover, creators",
  saveTime: "save up to 80%",
  ofTime: "of their messaging time and",
  seeMore: "see up to 65% more",
  inTips: "in tips and sales.",
  sectionLabel: "Income boost and messaging efficiency benefits",
  tipsLabel: "Tips received by creators",
  testimonial: "“I doubled my tips in just two weeks.”",
  verifiedCreator: "Verified Creator",
} as const;

const CARDS_DATA: CardData[] = [
  {
    headPercent: "-80%",
    headText: "DM Time",
    description: "Let AI handle the repetitive replies so you don't have to.",
  },
  {
    headPercent: "+35%",
    headText: "Tips & Sales",
    description: "Faster replies and playful nudges = more fans spending.",
  },
  {
    headPercent: "x3",
    headText: "Conversations",
    description: "AI keeps fans engaged — no dead ends, no ghosting.",
  },
  {
    headPercent: "-60%",
    headText: "Response Time",
    description: "Instant replies = happier, tipping fans.",
  },
] as const;

const TIPS_DATA: TipData[] = [
  { amount: 10, opacity: 0.05 },
  { amount: 45, opacity: 0.1 },
  { amount: 25, opacity: 0.2 },
  { amount: 50, opacity: 0.4 },
  { amount: 25, opacity: 1 },
] as const;

// Основний компонент
export const Preference = memo(() => {
  return (
    <section className={styles.main} aria-label={TEXT.sectionLabel}>
      <header className={styles.header}>
        <h1 className={styles.header_text}>{TEXT.title}</h1>
        <h2 className={styles.header_description}>
          {TEXT.subtitle}{" "}
          <span className={styles.header_description_highlighted}>
            {TEXT.saveTime}
          </span>{" "}
          {TEXT.ofTime}{" "}
          <span className={styles.header_description_highlighted}>
            {TEXT.seeMore}
          </span>{" "}
          {TEXT.inTips}
        </h2>
      </header>

      <div className={styles.body}>
        <div className={styles.texts}>
          <div className={styles.cards} role="list" aria-label="Benefits cards">
            {CARDS_DATA.map((card) => (
              <Card
                key={card.headText}
                headPercent={card.headPercent}
                headText={card.headText}
                description={card.description}
              />
            ))}
          </div>
        </div>

        <aside className={styles.tips} aria-label={TEXT.tipsLabel}>
          {TIPS_DATA.map((tip, index) => (
            <p
              key={`tip-${index}`}
              style={{ opacity: tip.opacity }}
              aria-label={`$${tip.amount} tips received`}
            >
              💬 ${tip.amount} tips received
            </p>
          ))}

          <div>
            <blockquote className={styles.tipsText}>
              {TEXT.testimonial}
            </blockquote>
            <p className={styles.highlightedWords}>{TEXT.verifiedCreator}</p>
          </div>
        </aside>
      </div>
    </section>
  );
});

Preference.displayName = "Preference";
