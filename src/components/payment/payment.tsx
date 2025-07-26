"use client";

import styles from "./styles/payment.module.css";
import { useState, useEffect } from "react";
import {
  fetchCostData,
  calculatePrognosis,
  formatPrice,
  type CostData,
  type PrognosisData,
  type BillingPeriod,
} from "../../utils/api";

export const Payment = () => {
  const [accounts, setAccounts] = useState<string | number>("");
  const [selectedBilling, setSelectedBilling] = useState<string>("");
  const [priceData, setPriceData] = useState<PrognosisData | null>(null);
  const [costData, setCostData] = useState<CostData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCostData = async () => {
      try {
        const data = await fetchCostData();
        setCostData(data);
        if (data.billings.length > 0) {
          setSelectedBilling(data.billings[0].code);
        }
      } catch (error) {
        console.error("Error fetching cost data:", error);
        setError("Failed to load pricing information");
      }
    };

    loadCostData();
  }, []);

  useEffect(() => {
    const calculatePrice = async () => {
      if (!accounts || Number(accounts) <= 0 || !selectedBilling) {
        setPriceData(null);
        return;
      }

      setIsLoading(true);
      setError(null);

      try {
        const billingPeriodMap: Record<string, BillingPeriod> = {
          monthly: "MONTHLY",
          "3_months": "THREE_MONTHLY",
          "6_months": "SIX_MONTHLY",
          yearly: "YEARLY",
        };

        const billingPeriod = billingPeriodMap[selectedBilling];
        const data = await calculatePrognosis(billingPeriod, Number(accounts));
        setPriceData(data);
      } catch (error) {
        console.error("Error calculating price:", error);
        setError("Failed to calculate price");
        setPriceData(null);
      } finally {
        setIsLoading(false);
      }
    };

    calculatePrice();
  }, [accounts, selectedBilling]);

  const handleAccountsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < 0 || event.target.value.startsWith("-")) {
      setAccounts("");
      return;
    }
    setAccounts(event.target.value);
  };

  const handleBillingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBilling(event.target.value);
  };

  return (
    <section className={styles.main} aria-label="Subscription payment options">
      <article className={styles.payment_card}>
        <div className={styles.info}>
          <h1 className={styles.head}>Affordable Price</h1>
          <p className={styles.description}>
            Subscribe to our premium plan and enjoy exclusive benefits.
            {costData &&
              ` Base price: ${formatPrice(costData.originalMonthlyPrice)} per account.`}
            Discounts apply for larger bundles and longer subscription periods.
          </p>
        </div>

        <form className={styles.counters} aria-label="Pricing options form">
          <div className={styles.counter}>
            <label htmlFor="accounts" className={styles.counters_info_text}>
              Accounts Number
            </label>
            <div className={styles.input_number_wrapper}>
              <input
                id="accounts"
                type="number"
                value={accounts}
                min={1}
                onChange={handleAccountsChange}
                className={styles.input}
                aria-describedby="accounts-desc"
                placeholder="Enter number of accounts"
                tabIndex={0}
                aria-label="Number of accounts"
              />
            </div>
          </div>

          <div className={styles.counter}>
            <label
              htmlFor="billingPeriod"
              className={styles.counters_info_text}
            >
              Billing Period
            </label>
            <select
              id="billingPeriod"
              value={selectedBilling}
              onChange={handleBillingChange}
              className={styles.input + " " + styles.custom_select}
              aria-describedby="billing-desc"
            >
              {costData?.billings.map((billing) => (
                <option
                  key={billing.code}
                  value={billing.code}
                  className={styles.some}
                >
                  {billing.name}
                </option>
              )) || (
                <>
                  <option className={styles.some} value="monthly">
                    1 month
                  </option>
                  <option className={styles.some} value="3_months">
                    3 months
                  </option>
                  <option className={styles.some} value="6_months">
                    6 months
                  </option>
                  <option className={styles.some} value="yearly">
                    1 year
                  </option>
                </>
              )}
            </select>
          </div>
        </form>

        <section
          className={styles.price_info}
          aria-live="polite"
          aria-atomic="true"
        >
          {isLoading ? (
            <div className={styles.loading}>
              <div className={styles.loading_spinner}></div>
              Calculating price...
            </div>
          ) : error ? (
            <div className={styles.price_time} style={{ color: "#ff6b6b" }}>
              {error}
            </div>
          ) : (
            <>
              <div className={styles.price_time}>
                Price per account / per month
              </div>
              {priceData &&
                "monthlyPriceWithDiscountUSD" in priceData &&
                priceData?.monthlyPriceWithDiscountUSD && (
                  <p className={styles.priceCalculated}>
                    {formatPrice(priceData.monthlyPriceWithDiscountUSD) ||
                      formatPrice(costData?.originalMonthlyPrice || 0)}
                  </p>
                )}
            </>
          )}
        </section>
      </article>
    </section>
  );
};
