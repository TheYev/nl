"use client";

import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Banner } from "./sections/banner";
import styles from "./styles/different.module.css";
import "swiper/css";

// Типи
interface BannerData {
  head: string;
  description: string;
  imgPath: string;
  bgColor: string;
}

// Константи
const TEXT = {
  title: "What makes NeuroLover different",
  subtitle:
    "If you're looking to get some good donations, Neurolover is a no-brainer. It will save you some serious time and hassle. But that's not all it's good for.",
  sectionLabel: "Features that make NeuroLover different",
} as const;

const BANNERS_DATA: BannerData[] = [
  {
    head: "Context-Aware Messaging",
    description:
      "NeuroLover remembers the chat so replies always make sense. It picks up where you left off, keeping convos smooth and personal.",
    imgPath: "/banners/banner_1.svg",
    bgColor: "var(--Bento-Blue, #090337)",
  },
  {
    head: "Versatile Dialogue Options",
    description:
      'Seven quick-reply buttons cover everything—from casual hellos to flirty sexts and playful dominance. "Tip Me" makes asking feel fun.',
    imgPath: "/banners/banner_2.svg",
    bgColor: "linear-gradient(180deg, #1D003E 0%, #240048 100%)",
  },
  {
    head: "Safe & Reliable",
    description:
      "NeuroLover uses strong security and smart failover to keep things smooth and private.",
    imgPath: "/banners/banner_3.svg",
    bgColor: "#110025",
  },
  {
    head: "Personalized Suggestions",
    description:
      "Your fans' names are auto-inserted, and messages are tailored to fit. Edit if you like, or just tap and send.",
    imgPath: "/banners/banner_4.svg",
    bgColor: "linear-gradient(180deg, #000527 0%, #000E3F 100%)",
  },
] as const;

// Основний компонент
export const Different = memo(() => {
  return (
    <section className={styles.body} aria-label={TEXT.sectionLabel}>
      <header className={styles.header_texts}>
        <h1 className={styles.head}>{TEXT.title}</h1>
        <p className={styles.subHead}>{TEXT.subtitle}</p>
      </header>

      <div className={styles.banners} role="list" aria-label="Feature banners">
        {BANNERS_DATA.map((banner) => (
          <Banner
            key={banner.head}
            head={banner.head}
            description={banner.description}
            imgPath={banner.imgPath}
            bgColor={banner.bgColor}
          />
        ))}
      </div>

      <div className={styles.slider}>
        <Swiper
          className={styles.swiperSlider}
          slidesPerView="auto"
          spaceBetween={10}
          role="list"
          aria-label="Feature banners carousel"
        >
          {BANNERS_DATA.map((banner, index) => (
            <SwiperSlide
              key={`${banner.head}-${index}`}
              className={styles.slide}
              role="listitem"
              aria-label={`Feature ${index + 1} of ${BANNERS_DATA.length}`}
            >
              <Banner
                head={banner.head}
                description={banner.description}
                imgPath={banner.imgPath}
                bgColor={banner.bgColor}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

Different.displayName = "Different";
