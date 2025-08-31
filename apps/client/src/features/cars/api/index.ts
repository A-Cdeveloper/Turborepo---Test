import type { CarWithBrand } from "@repo/types";

// API functions treba da vraćaju direktno podatke, ne ApiResponse
export const getCars = async (): Promise<CarWithBrand[]> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars`);
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  const data = await response.json();
  return data.data; // Izvlačimo data deo iz ApiResponse
};

export const getCarById = async (id: string): Promise<CarWithBrand> => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch car");
  }
  const data = await response.json();
  return data.data; // Izvlačimo data deo iz ApiResponse
};
