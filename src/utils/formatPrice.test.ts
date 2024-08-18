import { describe, expect, it } from "vitest";
import { formatPrice } from "./formatPrice";

describe("formatPrice", () => {
  it("should format the price in USD when locale is en-US", () => {
    const result = formatPrice(1000, { locale: "en-US" });
    expect(result).toBe("$1,000.00");
  });

  it("should format the price in GBP when locale is en-GB", () => {
    const result = formatPrice(1000, { locale: "en-GB" });
    expect(result).toBe("£1,000.00");
  });

  it("should format the price in INR when locale is en-IN", () => {
    const result = formatPrice(1000, { locale: "en-IN" });
    expect(result).toBe("₹1,000.00");
  });

  it("should use the currency from options even if locale is provided", () => {
    const result = formatPrice(1000, { locale: "en-US", currency: "EUR" });
    expect(result).toBe("€1,000.00");
  });
});
