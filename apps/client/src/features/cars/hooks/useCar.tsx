import { useQuery } from "@tanstack/react-query";
import { getCarById } from "../api";
import type { CarWithBrand } from "@repo/types";

export const useCar = (id: string) => {
  const { data, isLoading, error } = useQuery<CarWithBrand>({
    queryKey: ["car", id],
    queryFn: () => getCarById(id),
  });
  return { data, isLoading, error };
};
