import { Intro } from "@/components/intro/intro";
import { ShortDescription } from "@/components/short_description/short_description";
import { Different } from "@/components/different/different";
import { InfoExtension } from "@/components/info_extension/info_extension";
import { Preference } from "@/components/preference/preference";
import { CreatorSlider } from "@/components/creator_slider/creator_slider";
import { Payment } from "@/components/payment/payment";
import { Seo } from "@/components/seo/seo";

import "@/styles/globals.css";
import styles from "./app.module.css";

// SEO константи
const SEO_DATA = {
  title: "NeuroLover - AI-Powered Messaging for Content Creators",
  description:
    "Boost your income with AI-powered messaging. NeuroLover helps content creators save 80% of messaging time and increase tips by 65%. Works with OnlyFans and Fansly.",
  keywords:
    "AI messaging, content creators, OnlyFans, Fansly, automation, tips, income boost, NeuroLover",
  canonicalUrl: "https://neurolover.com",
} as const;

export default function Home() {
  return (
    <>
      <Seo
        title={SEO_DATA.title}
        description={SEO_DATA.description}
        keywords={SEO_DATA.keywords}
        canonicalUrl={SEO_DATA.canonicalUrl}
      />

      <main className={styles.layout}>
        <Intro />
        <ShortDescription />
        <Different />
        <InfoExtension />
        <Preference />
        <CreatorSlider />
        <Payment />
      </main>
    </>
  );
}
