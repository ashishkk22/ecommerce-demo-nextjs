import { cn } from "./cn";
import { describe, expect, it } from "vitest";

describe("cn function", () => {
  it("should merge multiple class names", () => {
    const result = cn("bg-red-500", "text-white", "p-4");
    expect(result).toBe("bg-red-500 text-white p-4");
  });

  it("should remove duplicate class names", () => {
    const result = cn("bg-red-500", "bg-red-500", "text-white");
    expect(result).toBe("bg-red-500 text-white");
  });

  it("should handle conditional class names", () => {
    const isActive = true;
    const result = cn("bg-red-500", isActive && "text-white");
    expect(result).toBe("bg-red-500 text-white");
  });

  it("should handle undefined and null values", () => {
    const result = cn("bg-red-500", undefined, "text-white", null);
    expect(result).toBe("bg-red-500 text-white");
  });

  it("should merge class names using tailwind-merge", () => {
    const result = cn("bg-red-500", "bg-blue-500");
    expect(result).toBe("bg-blue-500");
  });
});
