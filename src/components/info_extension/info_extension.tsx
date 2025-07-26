"use client";

import { memo, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import cx from "classnames";
import { ToolsInfo } from "./sections/tools_info";
import { Urls } from "@/utils/Urls";
import { InfoExtentionImg } from "@/utils/Urls";
import styles from "./styles/info_extentions.module.css";
import "swiper/css";

// Типи
interface ToolData {
  head: string;
  desciption: string;
  img: string;
}

// Константи
const TEXT = {
  title: "Let AI do the heavy lifting — you stay in control",
  subtitle:
    "NeuroLover works directly inside your OnlyFans and Fansly page. No switching tabs, no setup — just smart, context-aware replies where you already work.",
  installButton: "Install Extension",
  browsers: "Chrome, dolphin",
  sectionLabel: "AI-powered tools for content creators",
  toolImageAlt: "Image of the",
  tool: "tool",
} as const;

const TOOLS_DATA: ToolData[] = [
  {
    head: "Tone Selector UI",
    desciption: "Pick the vibe from 7 different options",
    img: InfoExtentionImg.TONESELECTORUI,
  },
  {
    head: "📏 Message Length Control",
    desciption:
      "Choose short, long, or adaptive replies. NeuroLover remembers your preference.",
    img: InfoExtentionImg.MESSAGELENGTHCONTROL,
  },
  {
    head: "🧲 Floating Mode",
    desciption: "Move the panel anywhere. Collapse or expand it as you like.",
    img: InfoExtentionImg.FLOATINGMODE,
  },
  {
    head: "📌 Pinned Mode",
    desciption: "Pin the tool next to your input box — vertical or horizontal.",
    img: InfoExtentionImg.PINNEDMODE,
  },
  {
    head: "🌗 Light or Dark Mode",
    desciption: "Use whatever matches your vibe or screen setup.",
    img: InfoExtentionImg.LIGHTORDARKMODE,
  },
] as const;

// Основний компонент
export const InfoExtension = memo(() => {
  const [activeTool, setActiveTool] = useState(TOOLS_DATA[0].head);

  const currentImg = useMemo(
    () =>
      TOOLS_DATA.find((tool) => tool.head === activeTool)?.img ||
      TOOLS_DATA[0].img,
    [activeTool]
  );

  const handleToolClick = useCallback((toolHead: string) => {
    setActiveTool(toolHead);
  }, []);

  const getToolImageAlt = (toolHead: string) =>
    `${TEXT.toolImageAlt} ${toolHead} ${TEXT.tool}`;

  return (
    <section className={styles.main} aria-label={TEXT.sectionLabel}>
      <div className={styles.background} aria-hidden="true" />

      <header className={styles.head_block}>
        <h1 className={styles.head}>{TEXT.title}</h1>
        <p className={styles.subHead}>{TEXT.subtitle}</p>
      </header>

      {/* Мобільна версія (до 1132px) */}
      <div className={styles.info_block_mobile}>
        <div className={styles.info_mobile}>
          <Swiper
            slidesPerView="auto"
            spaceBetween={4}
            className={`${styles.slider} ${styles.sliderShadow}`}
            role="list"
            aria-label="Tools carousel"
          >
            {TOOLS_DATA.map((tool, index) => (
              <SwiperSlide
                key={`${tool.head}-${index}`}
                className={cx(styles.mobile_bg, styles.swiperSlide)}
                role="listitem"
                aria-current={tool.head === activeTool ? "true" : "false"}
                aria-label={`Tool ${index + 1} of ${TOOLS_DATA.length}`}
              >
                <ToolsInfo
                  head={tool.head}
                  desciption={tool.desciption}
                  isActive={tool.head === activeTool}
                  onClick={() => handleToolClick(tool.head)}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.img_mobile}>
          <Image
            src={currentImg}
            alt={getToolImageAlt(activeTool)}
            width={1024}
            height={644}
            className={styles.toolImg_mobile}
            priority
          />
        </div>
      </div>

      {/* Десктопна версія */}
      <div className={styles.info_block}>
        <div className={styles.info} role="list" aria-label="Tools list">
          {TOOLS_DATA.map((tool) => (
            <ToolsInfo
              key={tool.head}
              head={tool.head}
              desciption={tool.desciption}
              isActive={tool.head === activeTool}
              onClick={() => handleToolClick(tool.head)}
            />
          ))}
        </div>

        <div className={styles.img}>
          <Image
            src={currentImg}
            alt={getToolImageAlt(activeTool)}
            width={1344}
            height={845}
            className={styles.toolImg}
            priority
          />
        </div>
      </div>

      <footer className={styles.extension}>
        <a
          href={Urls.INSTALL_EXTENTION}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Install NeuroLover extension"
        >
          <button className={styles.extention_bttn} type="button">
            {TEXT.installButton}
          </button>
        </a>
        <p className={styles.bttn_description}>
          Works with <span className={styles.browsers}>{TEXT.browsers}</span>
        </p>
      </footer>
    </section>
  );
});

InfoExtension.displayName = "InfoExtension";
