import { Link } from "react-router";
import { useCars } from "./hooks/useCars";
import { usePrefetchCars } from "./hooks/usePrefetchCars";

const Cars = () => {
  const { data, isLoading, error } = useCars();
  const { prefetchCar } = usePrefetchCars();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      {data?.map((car) => {
        return (
          <ul key={car.id}>
            <li>
              <Link
                to={`/cars/${car.id}`}
                key={car.id}
                onMouseEnter={() => prefetchCar(car.id.toString())}
              >
                {car.brand.name} {car.model}
              </Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Cars;
