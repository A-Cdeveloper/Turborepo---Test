import type { CarWithBrand } from "@repo/types";
import { formatKilometers, formatPrice } from "@repo/utils";

const CarGridItem = ({ car }: { car: CarWithBrand }) => {
  return (
    <div className="border border-gray-200 rounded-md p-2">
      <div className="relative overflow-hidden">
        <img
          src={car?.imageUrl || ""}
          alt={car.model}
          className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300 origin-center"
        />
      </div>
      <div className="flex flex-col gap-2 mt-1">
        <h2 className="text-xl font-bold">
          {car.brand.name} {car.model}
        </h2>
        <p className="text-lg font-semibold">{formatPrice(car.price)}</p>
        <p className="text-sm text-gray-500">
          {formatKilometers(car.kilometers)}
        </p>
      </div>
    </div>
  );
};

export default CarGridItem;
