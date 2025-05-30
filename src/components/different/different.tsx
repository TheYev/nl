import { Banner } from "./sections/banner";
import styles from "./styles/different.module.css";

export const Different = () => {
    return (
        <div className={styles.body}>
            <div className={styles.header_texts}>
                <h1 className={styles.head}>What makes NeuroLover different</h1>
                <p className={styles.subHead}>
                    If you’re looking to get some good donations, Neurolover is a no-brainer. It will save you some serious time and hassle. But that’s not all it’s good for.
                </p>
            </div>

            <div className={styles.banners}>
                <Banner
                    head="Context-Aware Messaging"
                    // subHead="Replies that actually follow the convo."
                    description="NeuroLover keeps replies in context, so every message feels smooth and personal."
                    imgPath="/banners/banner_1.svg"
                    bgColor="var(--Bento-Blue, #090337)"
                />
                <Banner
                    head="Versatile Dialogue Options"
                    // subHead="One tap, any vibe."
                    description="Seven quick-reply buttons cover everything—from casual hellos to flirty sexts and playful dominance. “Tip Me” makes asking feel fun."
                    imgPath="/banners/banner_2.svg"
                    bgColor="#1D003E"
                />
                <Banner
                    head="Safe & Reliable"
                    // subHead="Built to perform and protect."
                    description="NeuroLover uses strong security and smart failover to keep things smooth and private."
                    imgPath="/banners/banner_3.svg"
                    bgColor="#110025"
                />
                <Banner
                    head="Personalized Suggestions"
                    // subHead="Each message feels like you wrote it."
                    description="Your fans’ names are auto-inserted, and messages are tailored to fit. Edit if you like, or just tap and send."
                    imgPath="/banners/banner_4.svg"
                    bgColor="#000E3F"
                />
            </div>
        </div>
    );
};
