import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://kindredtoe-us.backendless.app",
});
