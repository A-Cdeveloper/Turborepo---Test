import { useCars } from "./hooks/useCars";

const Cars = () => {
  const { data, isLoading, error } = useCars();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      {data?.map((car) => {
        return (
          <div key={car.id}>
            {car.brand.name} {car.model}
          </div>
        );
      })}
    </div>
  );
};

export default Cars;
