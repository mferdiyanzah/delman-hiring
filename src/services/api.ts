import { RegisterUserPayload } from "@/shared/types";
import axios from "axios";

const baseUrl = "https://delman-fe-api.fly.dev/";

export const getSalesData = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

export const getUsersData = async () => {
  const response = await axios.get(`${baseUrl}users`);
  return response.data;
};

export const registerUser = async (payload: RegisterUserPayload) => {
  const response = await axios.post(`${baseUrl}users`, payload);
  return response.data;
};

export const deleteUser = async (id: string) => {
  const response = await axios.delete(`${baseUrl}users/${id}`);
  return response.data;
};
