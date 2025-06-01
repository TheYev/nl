import Image from "next/image"
import styles from "../styles/banner.module.css";

type BannerProps = {
    head: string;
    description: string;
    imgPath: string;
    bgColor: string;
};

export const Banner = (props: BannerProps) => {
    return (
        <div
            className={styles.banner}
        style={{
            background: props.bgColor
        }}
        >
            <div className={styles.main}>
                <h1 className={styles.head}>{props.head}</h1>
                <p className={styles.description}>{props.description}</p>
            </div>

            <Image
            className={styles.image}
                src={props.imgPath}
                width={254}
                height={254}
                alt="IMG"
            />
        </div>
    );
};
