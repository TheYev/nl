/**
 * API utilities for Neurolover landing
 * Всі типи, функції, мапи для роботи з бекендом
 */

const API_BASE_URL = "https://dev.api.neurolover.com";

// Типи для підписок
export type BillingPeriod =
  | "MONTHLY"
  | "THREE_MONTHLY"
  | "SIX_MONTHLY"
  | "YEARLY";

export interface BillingOption {
  code: string;
  name: string;
  discount: number;
}

export interface CostData {
  originalMonthlyPrice: number;
  accountDiscount: number;
  billings: BillingOption[];
}

export interface PrognosisData {
  monthlyPriceUSD: number;
  monthlyPriceWithDiscountUSD: number;
  accountsCount: number;
  billingPeriod: string;
  billingPeriodName: string;
  billingPeriodAsDays: number;
  accountDiscountRate: number;
  accountDiscountUSD: number;
  totalAccountsDiscountRate: number;
  totalAccountsDiscountUSD: number;
  billingDiscountRate: number;
  billingDiscountUSD: number;
  totalDiscountRate: number;
  totalDiscountUSD: number;
  totalPriceUSD: number;
  totalPriceWithDiscountUSD: number;
}

/**
 * Мапа для конвертації code -> BillingPeriod
 */
export const billingCodeToPeriod: Record<string, BillingPeriod> = {
  monthly: "MONTHLY",
  "3_months": "THREE_MONTHLY",
  "6_months": "SIX_MONTHLY",
  yearly: "YEARLY",
};

/**
 * Отримати базову інформацію про вартість підписки
 */
export const fetchCostData = async (): Promise<CostData> => {
  const response = await fetch(`${API_BASE_URL}/admin/pub/subscription/cost`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
  });
  if (!response.ok) throw new Error("Failed to fetch cost data");
  const data = await response.json();
  return data.data;
};

/**
 * Розрахувати вартість підписки
 */
export const calculatePrognosis = async (
  billingPeriod: BillingPeriod,
  accountsCount: number
): Promise<PrognosisData> => {
  const response = await fetch(
    `${API_BASE_URL}/admin/pub/subscription/prognosis`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify({ billingPeriod, accountsCount }),
    }
  );
  if (!response.ok) throw new Error("Failed to calculate prognosis");
  const data = await response.json();
  return data.data;
};

/**
 * Форматування ціни у USD
 */
export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);

/**
 * Відправити email для preregistration
 */
export const submitPreregistration = async (
  email: string
): Promise<{ status: string }> => {
  const response = await fetch(`${API_BASE_URL}/admin/pub/preregistration`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({ email }),
  });
  if (!response.ok) throw new Error("Failed to submit preregistration");
  return response.json();
};
