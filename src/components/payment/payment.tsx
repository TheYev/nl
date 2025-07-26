"use client";

import { memo, useState, useEffect, useCallback } from "react";
import styles from "./styles/payment.module.css";
import {
  fetchCostData,
  calculatePrognosis,
  formatPrice,
  billingCodeToPeriod,
  type CostData,
  type PrognosisData,
} from "../../utils/api";

// Константи
const TEXT = {
  title: "Affordable Price",
  description: "Subscribe to our premium plan and enjoy exclusive benefits.",
  accountsLabel: "Accounts Number",
  billingLabel: "Billing Period",
  accountsPlaceholder: "Enter number of accounts",
  pricePerAccount: "Price per account / per month",
  calculating: "Calculating price...",
  errorLoading: "Failed to load pricing information",
  errorCalculating: "Failed to calculate price",
  basePrice: "Base price:",
  perAccount: "per account.",
  discountsInfo:
    "Discounts apply for larger bundles and longer subscription periods.",
} as const;

const ARIA_LABELS = {
  section: "Subscription payment options",
  form: "Pricing options form",
  accountsInput: "Number of accounts",
  billingSelect: "Billing period selection",
} as const;

const DEFAULT_BILLING_OPTIONS = [
  { code: "monthly", name: "1 month" },
  { code: "3_months", name: "3 months" },
  { code: "6_months", name: "6 months" },
  { code: "yearly", name: "1 year" },
] as const;

// Типи
interface PaymentState {
  accounts: string;
  selectedBilling: string;
  priceData: PrognosisData | null;
  costData: CostData | null;
  isLoading: boolean;
  error: string | null;
}

// Компонент завантаження
const LoadingSpinner = () => (
  <div className={styles.loading}>
    <div className={styles.loading_spinner} aria-hidden="true" />
    {TEXT.calculating}
  </div>
);

// Компонент помилки
const ErrorMessage = ({ message }: { message: string }) => (
  <div className={styles.price_time} style={{ color: "#ff6b6b" }}>
    {message}
  </div>
);

// Компонент ціни
const PriceDisplay = ({
  priceData,
  costData,
}: {
  priceData: PrognosisData | null;
  costData: CostData | null;
}) => (
  <>
    <div className={styles.price_time}>{TEXT.pricePerAccount}</div>
    {priceData?.monthlyPriceWithDiscountUSD && (
      <p className={styles.priceCalculated}>
        {formatPrice(priceData.monthlyPriceWithDiscountUSD)}
      </p>
    )}
  </>
);

// Основний компонент
export const Payment = memo(() => {
  const [state, setState] = useState<PaymentState>({
    accounts: "",
    selectedBilling: "",
    priceData: null,
    costData: null,
    isLoading: false,
    error: null,
  });

  // Завантаження базових даних про вартість
  useEffect(() => {
    const loadCostData = async () => {
      try {
        const data = await fetchCostData();
        setState((prev) => ({
          ...prev,
          costData: data,
          selectedBilling: data.billings[0]?.code || "",
        }));
      } catch (error) {
        console.error("Error fetching cost data:", error);
        setState((prev) => ({ ...prev, error: TEXT.errorLoading }));
      }
    };

    loadCostData();
  }, []);

  // Розрахунок ціни при зміні параметрів
  useEffect(() => {
    const calculatePrice = async () => {
      const { accounts, selectedBilling } = state;

      if (!accounts || Number(accounts) <= 0 || !selectedBilling) {
        setState((prev) => ({ ...prev, priceData: null }));
        return;
      }

      setState((prev) => ({ ...prev, isLoading: true, error: null }));

      try {
        const billingPeriod = billingCodeToPeriod[selectedBilling];
        const data = await calculatePrognosis(billingPeriod, Number(accounts));
        setState((prev) => ({ ...prev, priceData: data, isLoading: false }));
      } catch (error) {
        console.error("Error calculating price:", error);
        setState((prev) => ({
          ...prev,
          error: TEXT.errorCalculating,
          priceData: null,
          isLoading: false,
        }));
      }
    };

    calculatePrice();
  }, [state.accounts, state.selectedBilling]);

  // Обробники подій
  const handleAccountsChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (Number(value) < 0 || value.startsWith("-")) {
        setState((prev) => ({ ...prev, accounts: "" }));
        return;
      }
      setState((prev) => ({ ...prev, accounts: value }));
    },
    []
  );

  const handleBillingChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      setState((prev) => ({ ...prev, selectedBilling: event.target.value }));
    },
    []
  );

  // Формування опису з базовою ціною
  const getDescription = () => {
    const basePriceText = state.costData
      ? `${TEXT.basePrice} ${formatPrice(state.costData.originalMonthlyPrice)} ${TEXT.perAccount}`
      : "";

    return `${TEXT.description} ${basePriceText} ${TEXT.discountsInfo}`;
  };

  return (
    <section className={styles.main} aria-label={ARIA_LABELS.section}>
      <article className={styles.payment_card}>
        <header className={styles.info}>
          <h1 className={styles.head}>{TEXT.title}</h1>
          <p className={styles.description}>{getDescription()}</p>
        </header>

        <form className={styles.counters} aria-label={ARIA_LABELS.form}>
          <div className={styles.counter}>
            <label htmlFor="accounts" className={styles.counters_info_text}>
              {TEXT.accountsLabel}
            </label>
            <div className={styles.input_number_wrapper}>
              <input
                id="accounts"
                type="number"
                value={state.accounts}
                min={1}
                onChange={handleAccountsChange}
                className={styles.input}
                aria-describedby="accounts-desc"
                placeholder={TEXT.accountsPlaceholder}
                tabIndex={0}
                aria-label={ARIA_LABELS.accountsInput}
                aria-required="true"
              />
              <div className={styles.input_number_arrows} aria-hidden="true">
                <svg className={styles.input_number_arrow} viewBox="0 0 16 16">
                  <path
                    d="M8 4l4 4-4 4"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
                <svg className={styles.input_number_arrow} viewBox="0 0 16 16">
                  <path
                    d="M8 12l4-4-4-4"
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className={styles.counter}>
            <label
              htmlFor="billingPeriod"
              className={styles.counters_info_text}
            >
              {TEXT.billingLabel}
            </label>
            <select
              id="billingPeriod"
              value={state.selectedBilling}
              onChange={handleBillingChange}
              className={`${styles.input} ${styles.custom_select}`}
              aria-describedby="billing-desc"
              aria-label={ARIA_LABELS.billingSelect}
              aria-required="true"
            >
              {state.costData?.billings.map((billing) => (
                <option key={billing.code} value={billing.code}>
                  {billing.name}
                </option>
              )) ||
                DEFAULT_BILLING_OPTIONS.map((option) => (
                  <option key={option.code} value={option.code}>
                    {option.name}
                  </option>
                ))}
            </select>
          </div>
        </form>

        <section
          className={styles.price_info}
          aria-live="polite"
          aria-atomic="true"
          aria-busy={state.isLoading}
        >
          {state.isLoading ? (
            <LoadingSpinner />
          ) : state.error ? (
            <ErrorMessage message={state.error} />
          ) : (
            <PriceDisplay
              priceData={state.priceData}
              costData={state.costData}
            />
          )}
        </section>
      </article>
    </section>
  );
});

Payment.displayName = "Payment";
