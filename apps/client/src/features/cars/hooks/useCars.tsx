import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api";
import type { CarWithBrand } from "@repo/types";

export const useCars = () => {
  const { data, isLoading, error } = useQuery<CarWithBrand[]>({
    queryKey: ["cars"],
    queryFn: getCars,
  });
  return { data, isLoading, error };
};
