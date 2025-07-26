"use client";

import { memo, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Comment } from "./sections/Comment";
import styles from "./styles/creator_slider.module.css";
import "swiper/css";
import "./styles/swiper-overrides.css";

// Типи
interface SlideData {
  creator: string;
  creatorPosition: string;
  comment: string;
}

// Константи
const TEXT = {
  title: "Loved by top 1% creators",
  sectionLabel: "Testimonials from top creators",
} as const;

const SLIDES_DATA: SlideData[] = [
  {
    creator: "Jax",
    creatorPosition: "Verified Fansly Creator",
    comment:
      "“I doubled my tips in two weeks. This thing flirts better than I do.”",
  },
  {
    creator: "Aria V.",
    creatorPosition: "Full-time Creator",
    comment:
      "“Honestly a game-changer. I finally have time to focus on my content again.”",
  },
  {
    creator: "Mia",
    creatorPosition: "Top 2% OnlyFans",
    comment:
      "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”",
  },
  {
    creator: "222",
    creatorPosition: "Top 2% OnlyFans",
    comment:
      "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”",
  },
  {
    creator: "222",
    creatorPosition: "Top 2% OnlyFans",
    comment:
      "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”",
  },
] as const;

// Основний компонент
export const CreatorSlider = memo(() => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: { realIndex: number }) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  return (
    <section className={styles.main} aria-label={TEXT.sectionLabel}>
      <h1 className={styles.head}>{TEXT.title}</h1>
      <div className={styles.slyderBody}>
        <Swiper
          centeredSlides={false}
          slidesPerView="auto"
          spaceBetween={1}
          onSlideChange={handleSlideChange}
          className={styles.slider}
          role="list"
          loop={true}
          aria-label="Creator testimonials carousel"
        >
          {SLIDES_DATA.map((slide, index) => (
            <SwiperSlide
              key={`${slide.creator}-${index}`}
              className={styles.slide}
              role="listitem"
              aria-current={index === activeIndex ? "true" : "false"}
              aria-label={`Testimonial ${index + 1} of ${SLIDES_DATA.length}`}
            >
              <Comment
                creator={slide.creator}
                creatorPosition={slide.creatorPosition}
                comment={slide.comment}
                isActive={index === activeIndex}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
});

CreatorSlider.displayName = "CreatorSlider";
