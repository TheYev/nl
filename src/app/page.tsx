import { Intro } from "@/components/intro/intro";
import { ShortDescription } from "@/components/short_description/short_description";
import { Different } from "@/components/different/different";
import { InfoExtension } from "@/components/info_extension/info_extension";
import { Preference } from "@/components/preference/preference";
import { CreatorSlider } from "@/components/creator_slider/creator_slider";

import "@/styles/globals.css"
import styles from "./app.module.css";
import { Payment } from "@/components/payment/payment";
import { Seo } from "@/components/seo/seo";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Seo
        title="NEUROLOVER"
        description="NEUROLOVER landing page."
        keywords="NEUROLOVER, onlyfans, extension"
      />
      <Intro />
      <ShortDescription />
      <Different />
      <InfoExtension />
      <Preference />
      <CreatorSlider />
      <Payment />
    </div>
  );
}
