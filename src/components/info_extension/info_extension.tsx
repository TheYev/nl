"use client"

import Image from "next/image"
import styles from "./styles/info_extentions.module.css"
import { ToolsInfo } from "./sections/tools_info"
import { Urls } from "@/utils/Urls"
import { useState } from "react"
import { InfoExtentionImg } from "@/utils/Urls"

/*

Fix image size

*/
export const InfoExtension = () => {
    const [imgPath, setImgPath] = useState("/extention/info_extensions.svg")

    return (
        <div className={styles.main}>
            <div className={styles.head_block}>
                <h1 className={styles.head}>Let AI do the heavy lifting — you stay in control</h1>
                <p className={styles.subHead}>NeuroLover works directly inside your OnlyFans and Fansly page. No switching tabs, no setup — just smart, context-aware replies where you already work.</p>
            </div>

            <div className={styles.info_block}>
                <div className={styles.info}>
                    <ToolsInfo
                        head="Tone Selector UI"
                        desciption="Pick the vibe from 7 different options"
                        onClick={() => setImgPath(InfoExtentionImg.TONESELECTORUI)}
                    />
                    <ToolsInfo
                        head="📏 Message Length Control"
                        desciption="Choose short, long, or adaptive replies. NeuroLover remembers your preference."
                        onClick={() => setImgPath(InfoExtentionImg.MESSAGELENGTHCONTROL)}
                    />
                    <ToolsInfo
                        head="🧲 Floating Mode"
                        desciption="Move the panel anywhere. Collapse or expand it as you like."
                        onClick={() => setImgPath(InfoExtentionImg.FLOATINGMODE)}
                    />
                    <ToolsInfo
                        head="📌 Pinned Mode"
                        desciption="Pin the tool next to your input box — vertical or horizontal."
                        onClick={() => setImgPath(InfoExtentionImg.PINNEDMODE)}
                    />
                    <ToolsInfo
                        head="🌗 Light or Dark Mode"
                        desciption="Use whatever matches your vibe or screen setup."
                        onClick={() => setImgPath(InfoExtentionImg.LIGHTORDARKMODE)}
                    />
                </div>

                <div className={styles.img}>
                    <Image
                        src={imgPath}
                        alt="Tool image"
                        width={850}
                        height={535}
                    />
                </div>
            </div>

            <div className={styles.extension}>
                <a href={Urls.INSTALL_EXTENTION}>
                    <button className={styles.extention_bttn}>Install  Extension</button>
                </a>
                <p className={styles.bttn_description}>Works with Chrome, dolphin</p>
            </div>
        </div>
    )
}