// API functions ne treba da se tipuju - TypeScript će infer-ovati
export const getCars = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars`);
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  const data = await response.json();
  return data.data;
};

export const getCarById = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch car");
  }
  const data = await response.json();
  return data.data;
};
