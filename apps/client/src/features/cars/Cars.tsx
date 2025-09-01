import { Link } from "react-router";
import { useCars } from "./hooks/useCars";
import { usePrefetchCars } from "./hooks/usePrefetchCars";
import CarGridItem from "./CarGridItem";
import { useEffect, useRef } from "react";

const Cars = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useCars();
  const { prefetchCar } = usePrefetchCars();

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });
    });
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  const allCars = data.pages.flat();

  return (
    <>
      <h1 className="text-4xl text-center text-secondary-800 font-bold my-4">
        Cars
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {/* Lista automobila */}
        {allCars?.map((car) => (
          <div key={car.id}>
            <Link
              to={`/cars/${car.id}`}
              onMouseEnter={() => prefetchCar(car.id.toString())}
            >
              <CarGridItem car={car} />
            </Link>
          </div>
        ))}
      </div>

      {/* <div>
     
        {hasNextPage && (
          <div className="mt-4 text-center">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isFetchingNextPage ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div> */}

      {hasNextPage && (
        <div ref={loadMoreRef} className="my-4 text-center">
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </div>
      )}
    </>
  );
};

export default Cars;
