import { API_URL } from "@/config/settings";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
    });
    return Promise.reject(error);
  }
);

export const get = async (url: string, options: any = {}) => {
  try {
    const response = await apiClient.get(url, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (url: string, data: any, options: any = {}) => {
  try {
    const response = await apiClient.post(url, data, options);
    return response.data;
  } catch (error) {
    throw error;
  }
};
