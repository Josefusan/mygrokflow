export const CHECKOUT_LANES = {
  "$500 audit+report": {
    priceId: "price_1UBFzRQueSrGdHy2lHAaqGxy",
    mode: "payment" as const,
  },
  "$2,000/month": {
    priceId: "price_1UBFzrQueSrGdHy2fWK0766S",
    mode: "subscription" as const,
  },
  "$7,500/month": {
    priceId: "price_1UBG04QueSrGdHy22hl64adA",
    mode: "subscription" as const,
  },
  "$9,500/month": {
    priceId: "price_1UBG04QueSrGdHy2cCme8sBP",
    mode: "subscription" as const,
  },
} as const;

export type CheckoutLane = keyof typeof CHECKOUT_LANES;

export function isCheckoutLane(rate: string): rate is CheckoutLane {
  return rate in CHECKOUT_LANES;
}
