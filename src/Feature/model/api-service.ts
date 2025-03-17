import axios from "axios";

export const pixlipApiService = axios.create({
  baseURL: "https://backend.exafy.io",
});
