type FormatPriceOptions = {
  locale?: string;
  currency?: string;
};

export const formatPrice = (value: number, options: FormatPriceOptions = {}): string => {
  const detectedLocale = options?.locale || (typeof window !== "undefined" && navigator.language) || "en-IN";

  const detectedCurrency = options?.currency || detectCurrency(detectedLocale);

  return new Intl.NumberFormat(detectedLocale, {
    style: "currency",
    currency: detectedCurrency,
  }).format(value);
};

const detectCurrency = (locale: string): string => {
  const localeCurrencyMap: { [key: string]: string } = {
    "en-US": "USD",
    "en-GB": "GBP",
    "en-IN": "INR",
    "ja-JP": "JPY",
  };

  return localeCurrencyMap[locale] || "INR"; // Default to INR if not found
};
