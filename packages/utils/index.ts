import { format, formatDistance, parseISO, isValid } from "date-fns";
import { sr } from "date-fns/locale";

// Date formatting sa date-fns
export const formatDate = (date: Date | string): string => {
  const d = typeof date === "string" ? parseISO(date) : date;
  if (!isValid(d)) return "Invalid date";

  return format(d, "dd MMMM yyyy", { locale: sr });
};

export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === "string" ? parseISO(date) : date;
  if (!isValid(d)) return "Invalid date";

  return format(d, "dd MMMM yyyy HH:mm", { locale: sr });
};

export const formatRelativeTime = (date: Date | string): string => {
  const d = typeof date === "string" ? parseISO(date) : date;
  if (!isValid(d)) return "Invalid date";

  return formatDistance(d, new Date(), { locale: sr, addSuffix: true });
};

// Price formatting
export const formatPrice = (
  price: number,
  currency: string = "EUR"
): string => {
  return new Intl.NumberFormat("sr-RS", {
    style: "currency",
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price);
};

export const formatPriceCompact = (price: number): string => {
  if (price >= 1000000) {
    return `${(price / 1000000).toFixed(1)}M €`;
  }
  if (price >= 1000) {
    return `${(price / 1000).toFixed(0)}K €`;
  }
  return `${price} €`;
};

// Kilometers formatting
export const formatKilometers = (km: number): string => {
  return new Intl.NumberFormat("sr-RS").format(km) + " km";
};

// String utilities
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};

export const truncate = (str: string, length: number): string => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};
