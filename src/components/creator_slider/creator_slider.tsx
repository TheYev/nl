"use client"

import { useState } from "react"
import { Comment } from "./sections/Comment"
import styles from "./styles/creator_slider.module.css"

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

export const CreatorSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const slides = [
        { creator: "Jax", creatorPosition: "Verified Fansly Creator", comment: "“I doubled my tips in two weeks. This thing flirts better than I do.”" },
        { creator: "Aria V.", creatorPosition: "Full-time Creator", comment: "“Honestly a game-changer. I finally have time to focus on my content again.”" },
        { creator: "Mia", creatorPosition: "Top 2% OnlyFans", comment: "“It sounds exactly like me — fans didn’t even notice I wasn’t typing!”" },
    ]

    return (
        <div className={styles.main}>
            <h1 className={styles.head}>Loved by top 1% creators</h1>
            <div className={styles.slyderBody}>
                <Swiper
                    centeredSlides={true}
                    slidesPerView="auto"
                    spaceBetween={16}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className={styles.slider}
                >
                    {slides.map((slide, index) => {
                        return (
                            <SwiperSlide key={index} className={styles.slide}>
                                <Comment
                                    creator={slide.creator}
                                    creatorPosition={slide.creatorPosition}
                                    comment={slide.comment}
                                    isActive={index === activeIndex}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}