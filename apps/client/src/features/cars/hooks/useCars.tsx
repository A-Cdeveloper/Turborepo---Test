import type { CarWithBrand } from "@repo/types";
import { useInfiniteQuery, type InfiniteData } from "@tanstack/react-query";
import { getCars } from "../api";
import { CARS_PER_PAGE } from "../../../constants";

export const useCars = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<
    CarWithBrand[],
    Error,
    InfiniteData<CarWithBrand[], number>
  >({
    queryKey: ["cars"],
    queryFn: ({ pageParam }) => getCars(pageParam as number, CARS_PER_PAGE), // 10 automobila po stranici
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) =>
      lastPage.length === CARS_PER_PAGE ? pages.length + 1 : undefined, // Ako ima 10, ima sledeća stranica
  });
  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};
