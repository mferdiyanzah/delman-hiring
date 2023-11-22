import axios from "axios";

const baseUrl = "https://delman-fe-api.fly.dev/";

export const getSalesData = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
