// Import Prisma types kao osnovu
import type { Car, Brand } from "@repo/prisma";

// API response types
export type ApiResponse<T> = {
  success: boolean;
  data: T | null;
  error: any;
  status: number;
};

// Custom types bazirani na Prisma types
export type CarWithBrand = Car & {
  brand: Brand;
};

export type BrandWithCars = Brand & {
  cars: Car[];
};
