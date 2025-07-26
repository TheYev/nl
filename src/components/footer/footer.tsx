"use client";

import Image from "next/image";
import { useState, memo } from "react";
import styles from "./styles/footer.module.css";
import { Urls } from "@/utils/Urls";
import { PreregistrationModal } from "../modal/PreregistrationModal";

const SOCIAL_ICONS = [
  { src: "/footer/discord.svg", href: Urls.DISCORD, label: "Discord" },
  { src: "/footer/instagram.svg", href: Urls.INSTAGRAM, label: "Instagram" },
  { src: "/footer/reddit.svg", href: Urls.REDDIT, label: "Reddit" },
  { src: "/footer/x.svg", href: Urls.X, label: "X (Twitter)" },
  { src: "/footer/telegram.svg", href: Urls.TELEGRAM, label: "Telegram" },
];

const TEXT = {
  beta: "Beta access is limited — grab your spot today",
  button: "Get Early Access",
  description:
    "No credit card required. Cancel anytime. Start growing your income with less effort.",
  copyright: "© 2025 Neurolover",
  privacy: "Privacy Policy",
  terms: "Terms Of Service",
  contact: "Contact Us",
  companyInfo: "Company information",
  nav: "Footer navigation",
};

export const Footer = memo(function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={styles.image}>
        <Image
          src="/footer/footer.svg"
          width={214}
          height={214}
          alt="Woman illustration Neurolover"
        />
        <div className={styles.images_midle}>
          {SOCIAL_ICONS.map((icon) => (
            <a
              key={icon.href}
              href={icon.href}
              aria-label={icon.label}
              rel="noopener noreferrer"
              target="_blank"
              tabIndex={0}
            >
              <Image src={icon.src} width={20} height={20} alt={icon.label} />
            </a>
          ))}
        </div>
        <div className={styles.info_desciption_midle}>
          <div className={styles.resume}>
            <p className={styles.company_name}>{TEXT.copyright}</p>
          </div>
        </div>
      </div>

      <div className={styles.info}>
        <section className={styles.footer_header} aria-label="Beta access">
          <div className={styles.access}>
            <p className={styles.access_text}>{TEXT.beta}</p>
            <button
              className={styles.access_bttn}
              onClick={handleOpenModal}
              aria-label={TEXT.button}
              tabIndex={0}
            >
              {TEXT.button}
            </button>
          </div>
          <p className={styles.description}>{TEXT.description}</p>
        </section>

        <section
          className={styles.social}
          aria-label="Footer social and navigation"
        >
          <nav className={styles.info_desciption} aria-label={TEXT.companyInfo}>
            <div className={styles.resume}>
              <p className={styles.company_name}>{TEXT.copyright}</p>
            </div>
          </nav>

          <nav className={styles.link} aria-label={TEXT.nav}>
            <a href="/privacy-policy" className={styles.links} tabIndex={0}>
              {TEXT.privacy}
            </a>
            <a href="/terms-of-service" className={styles.links} tabIndex={0}>
              {TEXT.terms}
            </a>
            <a href="/contact" className={styles.links} tabIndex={0}>
              {TEXT.contact}
            </a>
          </nav>

          <div className={styles.images}>
            {SOCIAL_ICONS.map((icon) => (
              <a
                key={icon.href}
                href={icon.href}
                aria-label={icon.label}
                rel="noopener noreferrer"
                target="_blank"
                tabIndex={0}
              >
                <Image src={icon.src} width={20} height={20} alt={icon.label} />
              </a>
            ))}
          </div>
        </section>
      </div>
      <PreregistrationModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </footer>
  );
});
