import { Card } from "./sections/card"
import styles from "./styles/preference.module.css"

export const Preference = () => {
    const tips = [10, 45, 25, 50, 25];
    const opacityVal = [0.05, 0.1, 0.2, 0.4, 1]

    return (
        <div className={styles.main}>
            <div className={styles.body}>
                <div className={styles.texts}>
                    <h1 className={styles.head}>Boost your income — <br />not your screen time</h1>
                    <p className={styles.subHeda}>
                        With NeuroLover, creators
                        <span className={styles.highlightedWords}>save up to 80%</span>
                        of their messaging time and see up to
                        <span className={styles.highlightedWords}>65% more in tips and sales.</span>
                    </p>


                    <div className={styles.cards}>
                        <Card header="-80%" subHeader="Less DM Time" description="Let AI handle the repetitive{</br>} replies so you don’t have to." />
                        <Card header="3x" subHeader="More Conversations Started" description="AI keeps fans engaged — no dead ends, no ghosting." />
                        <Card header="+35%" subHeader="More Tips & Sales" description="Faster replies and playful nudges = more fans spending." />
                        <Card header="+60%" subHeader="Faster Response Time" description="Instant replies = happier, tipping fans." />
                    </div>
                </div>

                <div className={styles.tips}>
                    {tips.map((amount, index) => (
                        <p style={{ opacity: `${opacityVal[index]}` }} key={index}>💬 ${amount} tips received</p>
                    ))}
                    
                    <div>
                        <p className={styles.highlighted}>
                            <span className={styles.highlightedWords}>“I doubled my tips in just two weeks.” –</span>
                            Verified Creator
                        </p>
                    </div>
                </div>

            </div>
        </div >
    )
}