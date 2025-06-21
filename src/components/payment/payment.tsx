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

                // Тимчасова емуляція
                setPrice(accounts * months * 39)
            } catch (error) {
                console.error('Error fetching price:', error)
                setPrice(null)
            }
        }

        fetchPrice()
    }, [accounts, months])

    const handleAccountsChange = (event: any) => {
        const value = parseInt(event.target.value)
        setAccounts(value > 0 ? value : 1)
    }

    const handleMonthsChange = (event: any) => {
        const value = parseInt(event.target.value)
        setMonths(value > 0 ? value : 1)
    }

    return (
        <div className={styles.main}>
            <div className={styles.payment_card}>
                
                <div className={styles.info}>
                    <h1 className={styles.head}>Affordable Price</h1>
                    <div className={styles.description}>
                        Subscribe to our premium plan and enjoy exclusive benefits.
                        Prices are calculated based on account quantity and billing duration.
                    </div>
                </div>

                <div className={styles.counters}>
                    <div className={styles.counter}>
                        <label className={styles.counters_info_text}>Accounts Number</label>
                        <input
                            type="number"
                            value={accounts}
                            min={1}
                            onChange={handleAccountsChange}
                            className={styles.input}
                        />
                    </div>

                    <div className={styles.counter}>
                        <label className={styles.counters_info_text}>Billing Period</label>
                        <input
                            type="number"
                            value={months}
                            min={1}
                            onChange={handleMonthsChange}
                            className={styles.input}
                        />
                    </div>
                </div>

                <div className={styles.price_info}>
                    <div className={styles.price_time}>Price per account / per month</div>
                    <div className={styles.price}>
                        {price !== null ? `$${price}` : 'Error'}
                    </div>
                </div>
            </div>
        </div>
    )
}
