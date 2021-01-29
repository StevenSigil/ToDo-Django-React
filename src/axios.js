import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/todo",
  timeout: 3000,
});

export default axiosInstance;