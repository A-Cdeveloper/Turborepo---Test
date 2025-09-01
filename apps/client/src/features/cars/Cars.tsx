import { Link } from "react-router";
import { useCars } from "./hooks/useCars";
import { usePrefetchCars } from "./hooks/usePrefetchCars";

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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  const allCars = data.pages.flat();

  return (
    <div>
      {/* Lista automobila */}
      {allCars?.map((car) => (
        <div key={car.id}>
          <Link
            to={`/cars/${car.id}`}
            onMouseEnter={() => prefetchCar(car.id.toString())}
            className="border-b border-gray-200 p-2 block"
          >
            {car.brand.name} {car.model}
          </Link>
        </div>
      ))}

      {/* Load More dugme */}
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
    </div>
  );
};

export default Cars;
