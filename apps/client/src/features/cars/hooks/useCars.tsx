import { useQuery } from "@tanstack/react-query";
import { getCars } from "../api";

export const useCars = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["cars"],
    queryFn: getCars,
  });
  return { data, isLoading, error };
};
