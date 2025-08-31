import { useQueryClient } from "@tanstack/react-query";
import { getCarById } from "../api";

export const usePrefetchCars = () => {
  const queryClient = useQueryClient();

  return {
    prefetchCar: async (id: string) => {
      try {
        await queryClient.prefetchQuery({
          queryKey: ["car", id],
          queryFn: () => getCarById(id),
          staleTime: 5 * 60 * 1000, // 5 minuta
        });
      } catch (error) {
        console.error(`Failed to prefetch car ${id}:`, error);
      }
    },
  };
};
