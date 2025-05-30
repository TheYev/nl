import styles from "../styles/banner.module.css";

type BannerProps = {
    head: string;
    subHead?: string;
    description: string;
    imgPath: string;
    bgColor: string;
};

export const Banner = (props: BannerProps) => {
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `url(${props.imgPath})`,
                // background: props.bgColor,
                // backgroundImage: `url(${props.imgPath})`,
                // backgroundRepeat: "no-repeat",
                // backgroundPosition: "right center",
                // backgroundSize: "contain",
            }}
        >
            <div className={styles.main}>
                <h1 className={styles.head}>{props.head}</h1>
                {props.subHead && <h2 className={styles.subHead}>{props.subHead}</h2>}
                <p className={styles.description}>{props.description}</p>
            </div>
        </div>
    );
};
