import axios from "axios";

export const pixlipApiService = axios.create({
  baseURL: process.env.PIXLIP_APP_API_URL,
});
