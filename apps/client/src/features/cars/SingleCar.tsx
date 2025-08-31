import { useParams } from "react-router";
import { useCar } from "./hooks/useCar";

const SingleCar = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useCar(id ?? "");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">
        {data.brand.name} {data.model}
      </h1>

      <p>{data.kilometers} km</p>
      <p>{data.registration}</p>
      <p>{data.price} €</p>
      {/* <p>{data.createdAt.toLocaleDateString()}</p>
      <p>{data.updatedAt.toLocaleDateString()}</p> */}
    </div>
  );
};

export default SingleCar;
