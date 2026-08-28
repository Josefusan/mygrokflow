export const CHECKOUT_LANES = {
  "$1,500/month": {
    priceId: "price_1U9FIAQueSrGdHy2gRSSo2tp",
    mode: "subscription" as const,
  },
  "$5K one-time": {
    priceId: "price_1U9FI1QueSrGdHy24SNBoWhE",
    mode: "payment" as const,
  },
  "$10K one-time": {
    priceId: "price_1U9FI2QueSrGdHy2prId4EpR",
    mode: "payment" as const,
  },
} as const;

export type CheckoutLane = keyof typeof CHECKOUT_LANES;

export function isCheckoutLane(rate: string): rate is CheckoutLane {
  return rate in CHECKOUT_LANES;
}
