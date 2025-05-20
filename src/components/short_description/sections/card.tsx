import styles from "../styles/card.module.css"
import Image from "next/image"

export const Card = (props: { title: string }) => {
    return (
        <div className={styles.card}>
            <Image
                src="red_cros.svg"
                alt="red cros"
                width={24}
                height={24}
            />
            {props.title}
        </div>
    )
}