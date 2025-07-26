"use client";

import Image from "next/image";
import { useState, memo } from "react";
import styles from "./styles/intro.module.css";
import { PreregistrationModal } from "../modal/PreregistrationModal";

const TEXT = {
  h1: "Turn More Chats into Cash — AI Messaging for OnlyFans & Fansly",
  description:
    "Trusted by top 1% creators to boost revenue and save time. Our AI assistant keeps fans engaged, increases tips, and drives sales — all through seamless Chrome extension integration.",
  button: "Get Early Access",
  beta: "Beta access is limited — reserve your spot now.",
  imageAlt: "Woman using AI messaging tool for OnlyFans and Fansly",
};

export const Intro = memo(function Intro() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section
      className={styles.intro}
      aria-label="AI Messaging for OnlyFans and Fansly"
      role="region"
      tabIndex={-1}
    >
      <Image
        src="block_1.svg"
        alt={TEXT.imageAlt}
        className={styles.image}
        width={710}
        height={710}
        priority
      />
      <div className={styles.info_block}>
        <h1 className={styles.head}>{TEXT.h1}</h1>
        <p className={styles.info}>{TEXT.description}</p>
        <div className={styles.bttn_info}>
          <button
            className={styles.bttn}
            onClick={handleOpenModal}
            aria-label={TEXT.button}
            tabIndex={0}
          >
            {TEXT.button}
          </button>
          <p className={styles.bttn_description} aria-live="polite">
            {TEXT.beta}
          </p>
        </div>
      </div>
      <div className={styles.bttn_info_mobile}>
        <button
          className={styles.bttn}
          onClick={handleOpenModal}
          aria-label={TEXT.button}
          tabIndex={0}
        >
          {TEXT.button}
        </button>
        <p className={styles.bttn_description} aria-live="polite">
          {TEXT.beta}
        </p>
      </div>
      <PreregistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </section>
  );
});
