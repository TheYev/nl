import { Card } from "@/components/short_description/sections/card"
import styles from "./styles/short_description.module.css"
import Image from "next/image"

export const ShortDescription = () => {
    return (
        <div className={styles.body}>
            <div className={styles.main}>
                <div className={styles.main_info}>
                    <h1 className={styles.header}>Tired of replying to the same messages?</h1>
                    <p className={styles.description}>Managing multiple fans at once is exhausting. NeuroLover helps you save time, reduce burnout, and never leave money on the table.</p>
 
                    <div className={styles.card_collection}>
                        <Card title="😩 Broken energy"/>
                        <Card title="⏳ Wasted time"/>
                        <Card title="💸 Missed tips"/>
                        <Card title="😮‍💨 DM burnout"/>
                    </div>
                </div>

                <div>
                    <Image
                        className={styles.main_img}
                        src="block_2.svg"
                        alt="Woman 2"
                        width={699}
                        height={466}
                    />
                </div>
            </div>

        </div>
    )
}