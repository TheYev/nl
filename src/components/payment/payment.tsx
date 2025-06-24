'use client'

import styles from './styles/payment.module.css'
import { useState, useEffect } from 'react'

export const Payment = () => {
    const [accounts, setAccounts] = useState(1)
    const [months, setMonths] = useState(1)
    const [price, setPrice] = useState<number | null>(39)

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                // const response = await fetch('/api/calculate-price', { ... })
                // const data = await response.json()
                // setPrice(data.price)

                setPrice(accounts * months * 39)
            } catch (error) {
                console.error('Error fetching price:', error)
                setPrice(null)
            }
        }

        fetchPrice()
    }, [accounts, months])

    const handleAccountsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value)
        setAccounts(value > 0 ? value : 1)
    }

    const handleMonthsChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(event.target.value)
        setMonths(value > 0 ? value : 1)
    }

    return (
        <section className={styles.main} aria-label="Subscription payment options">
            <article className={styles.payment_card}>

                <header className={styles.info}>
                    <h1 className={styles.head}>Affordable Price</h1>
                    <p className={styles.description}>
                        Subscribe to our premium plan and enjoy exclusive benefits.
                        Prices are calculated based on account quantity and billing duration.
                    </p>
                </header>

                <form className={styles.counters} aria-label="Pricing options form">
                    <div className={styles.counter}>
                        <label htmlFor="accounts" className={styles.counters_info_text}>Accounts Number</label>
                        <input
                            id="accounts"
                            type="number"
                            value={accounts}
                            min={1}
                            onChange={handleAccountsChange}
                            className={styles.input}
                            aria-describedby="accounts-desc"
                        />
                    </div>

                    <div className={styles.counter}>
                        <label htmlFor="billingPeriod" className={styles.counters_info_text}>Billing Period</label>
                        <select
                            id="billingPeriod"
                            value={months}
                            onChange={handleMonthsChange}
                            className={styles.input}
                            aria-describedby="billing-desc"
                        >
                            <option className={styles.some} value={1}>1 Month</option>
                            <option className={styles.some} value={3}>3 Months</option>
                            <option className={styles.some} value={6}>6 Months</option>
                            <option className={styles.some} value={12}>12 Months</option>
                        </select>
                    </div>
                </form>

                <section className={styles.price_info} aria-live="polite" aria-atomic="true">
                    <div className={styles.price_time}>Price per account / per month</div>
                    <div className={styles.price}>
                        {price !== null ? `$${price}` : 'Error'}
                    </div>
                </section>
            </article>
        </section>
    )
}
