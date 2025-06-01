import { Card } from "./sections/card"
import styles from "./styles/preference.module.css"

export const Preference = () => {
    const tips = [10, 45, 25, 50, 25];
    const opacityVal = [0.05, 0.1, 0.2, 0.4, 1]

    return (
        <div className={styles.main}>
            <div className={styles.body}>
                <div className={styles.texts}>
       
                    <div className={styles.cards}>
                        <Card headPercent="-80%" headText="DM Time" description="Let AI handle the repetitive replies so you don’t have to." />
                        <Card headPercent="+35%" headText="Tips & Sales" description="Faster replies and playful nudges = more fans spending." />
                        <Card headPercent="x3" headText="Conversations" description="AI keeps fans engaged — no dead ends, no ghosting." />
                        <Card headPercent="-60%" headText="Response Time" description="Instant replies = happier, tipping fans." />
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