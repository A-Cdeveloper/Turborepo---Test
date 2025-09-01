// API functions za pagination
export const getCars = async (page: number = 1, limit: number = 10) => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/cars?page=${page}&limit=${limit}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch cars");
  }
  const data = await response.json();
  return data.data; // Backend vraća { success: true, data: cars, ... }
};

export const getCarById = async (id: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch car");
  }
  const data = await response.json();
  return data.data; // Ovo ostaje isto jer je drugi endpoint
};
