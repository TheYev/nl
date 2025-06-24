import Image from "next/image";
import styles from "./styles/intro.module.css";
import { Urls } from "@/utils/Urls";

export const Intro = () => {
  return (
    <section className={styles.intro} aria-label="AI Messaging for OnlyFans and Fansly">
      <Image
        src="block_1.svg"
        alt="Woman using AI messaging tool"
        className={styles.image}
        width={510}
        height={510}
        priority
      />
      <div className={styles.info_block}>
        <h1 className={styles.head}>
          Turn More Chats into Cash — <br className={styles.spacer} />
          AI Messaging for OnlyFans & Fansly
        </h1>
        <p className={styles.info}>
          Trusted by top 1% creators to boost revenue and save time. Our AI
          assistant keeps fans engaged, increases tips, and drives sales — all
          through seamless Chrome extension integration.
        </p>
        <div className={styles.bttn_info}>
          <a href={Urls.GET_EARLY_ACCESS}>
            <button className={styles.bttn}>Get Early Access</button>
          </a>
          <p className={styles.bttn_description}>
            Beta access is limited — reserve your spot now.
          </p>
        </div>
      </div>
      <div className={styles.bttn_info_mobile}>
        <a href={Urls.GET_EARLY_ACCESS}>
          <button className={styles.bttn}>Get Early Access</button>
        </a>
        <p className={styles.bttn_description}>
          Beta access is limited — reserve your spot now.
        </p>
      </div>
    </section>
  );
};
